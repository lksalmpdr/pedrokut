import { useState } from 'react';

const useForm = (inicialValues)=>{
    const [values, setValues] = useState(inicialValues);

    const setValue = (key, val) =>
    {
        setValues({
            ...values,
            [key] : val,
        });
    }

    const handleChange = (event) =>
    {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    const clearForm = () =>
    {
        setValues(inicialValues);
    }

    return {
        values,
        handleChange,
        clearForm
    }

}

export default useForm;