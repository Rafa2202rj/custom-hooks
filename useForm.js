import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
       
    }
}

