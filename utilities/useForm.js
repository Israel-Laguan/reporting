import { useState, useEffect } from "react";

const useForm = ({ initialValues }) => {
  const [fields, setFields] = useState(initialValues);

  const onChange = event => {
    const { value, name } = event.target;
    setFields({ ...fields, [name]: value });
  };

  useEffect(() => {
    setFields(initialValues);
  }, [initialValues.id]);

  return {
    fields,
    getInput: name => ({
      name,
      value: fields[name],
      onChange
    }),
    getSelect: name => ({
      name,
      value: fields[name],
      onChange
    })
  };
};

export default useForm;
