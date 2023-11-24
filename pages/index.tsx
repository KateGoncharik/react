import MainPage from '@/my-pages/main-page';
import { fetchCharacters } from '@/api/charactersApi';
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { data } = await store.dispatch(fetchCharacters.initiate({ name: '', page: 1, limit: 20 }));
  return { props: { characters: data?.characters, totalCount: data?.totalCount } };
});
