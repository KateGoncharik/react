import MainPage from '@/my-pages/main-page';
import { fetchCharacters, charactersApi } from '@/api/charactersApi';
import { wrapper } from '@/store/';
import { Character } from '@/types/types';

export default function Page({
  characters,
  totalCount,
}: {
  characters: Character[];
  totalCount: number;
}) {
  return <MainPage characters={characters} totalCount={totalCount} />;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { query } = context;
  const { q, page, limit } = query;

  let name = '';
  if (typeof q === 'string') {
    name = q;
  }
  const { data } = await store.dispatch(
    fetchCharacters.initiate({
      name,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
    })
  );
  await Promise.all(store.dispatch(charactersApi.util.getRunningQueriesThunk()));

  return { props: { characters: data?.characters, totalCount: data?.totalCount } };
});
