import { useFormData } from '@/app/contexts/FormDataContext';

export default function DisplaySubmittedData() {
  const { submittedData } = useFormData();

  return (
    <div>
      {submittedData && (
        <pre>{JSON.stringify(JSON.parse(submittedData), null, 2)}</pre>
      )}
    </div>
  );
}
