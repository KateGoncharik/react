import { FormData } from '@/types/form-data';

export function SentFormDataItem({ formData }: { formData: FormData }) {
  return (
    <div className="submit">
      <div>Name: {formData.name}</div>
      <div>Age: {formData.age}</div>
      <div>Email: {formData.email}</div>
      <div>Gender: {formData.gender}</div>
      <div>Accept rules: {`${formData.acceptRules}`}</div>
    </div>
  );
}
