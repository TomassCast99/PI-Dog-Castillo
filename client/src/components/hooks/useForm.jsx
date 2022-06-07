import { useState } from "react";
import axios from "axios";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Sending Form");
      setLoading(true);
      axios
        .post("http://localhost:3001/dog", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

// if (Object.keys(errors).length === 0) {
//   alert("Sending Form");
//   setLoading(true);
//   return async function () {
//     const create = await axios.post("http://localhost:3001/dog");
//     return create;
//   }.then((res) => {
//     setLoading(false);
//     setResponse(true);
//     setForm(initialForm);
//     setTimeout(() => setResponse(false), 5000);
//   });
// } else {
//   return;
// }
// };
