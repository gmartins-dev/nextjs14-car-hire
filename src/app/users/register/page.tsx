'use client'

import { FormDataProvider } from '@/app/contexts/FormDataContext';
import DisplaySubmittedData from '@/components/DisplaySubmittedData';
import RegisterUserForm from '@/components/RegisterUserForm';

export default function RegisterPage() {

  return (
    <FormDataProvider>
      <RegisterUserForm />
      <DisplaySubmittedData />
    </FormDataProvider>
  );
}
