import { useState } from "react";

const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (text: string, name: string) => {
    setFormData({
      ...formData,
      [name]: text,
    });
  };

  return [formData, handleChange];
};

export default useForm;
