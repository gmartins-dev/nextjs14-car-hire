import { useFormData } from '@/app/contexts/FormDataContext';

export default function DisplaySubmittedData() {
  const { submittedData } = useFormData();

  return (
    <div>
      {submittedData && (
        <div className="justify-center items-center flex flex-col">
          <div className="text-2xl font-bold text-green-600">Thank you for registering!</div>
          <span>Below is just a simulation of the payload <br /> That would be sent to BE:</span>
          <pre>{JSON.stringify(JSON.parse(submittedData), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
