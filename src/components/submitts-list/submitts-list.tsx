import { SentFormDataItem } from '../submit/submit';
import { FormData } from '@/types/form-data';

export function SentFormDataItemsList({ sentFormData }: { sentFormData: FormData[] }) {
  return (
    <>
      {sentFormData.map((formData: FormData) => {
        return <SentFormDataItem key={`${formData.name}-${formData.age}`} formData={formData} />;
      })}
    </>
  );
}
