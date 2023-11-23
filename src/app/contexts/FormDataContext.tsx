'use client'

import { createContext, useContext, useState } from 'react';

interface FormDataContextProps {
  submittedData: string | null;
  setSubmittedData: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [submittedData, setSubmittedData] = useState<string | null>(null);

  return (
    <FormDataContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
