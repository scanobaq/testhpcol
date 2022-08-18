import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState("");
  //const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeDate = (value) => {
    console.log(value);
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  return {
    form,
    errors,
    response,
    handleChecked,
    handleChange,
    handleChangeDate,
    handleBlur,
    setForm,
  };
};
