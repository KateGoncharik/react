import { FormData } from '@/pages/uncontrolled-form-page';
export function Submit({ submit }: { submit: FormData }) {
  return (
    <div className="submit">
      <div>Name: {submit.name}</div>
      <div>Age: {submit.age}</div>
      <div>Email: {submit.email}</div>
      <div>Gender: {submit.gender}</div>
      <div>Accept rules: {submit.acceptRules}</div>
      <div>Uploaded image: {submit.uploadImage}</div>
    </div>
  );
}
