import { useState } from "react";

const useFormulario = (initial) => {
  const [form, setForm] = useState(initial);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return [form, handleChange];
};

export default useFormulario;