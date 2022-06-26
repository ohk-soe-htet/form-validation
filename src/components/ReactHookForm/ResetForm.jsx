import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../hooks/validate";
import EmptyDiv from "../UI/EmptyDiv";

const ResetForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        getValues,
        formState,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        resolver: yupResolver(yupSchema),
    });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ firstName: "", lastName: "", email: "" });
        }
    }, [formState, reset]);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
            {errors.firstName ? (
                <p>{errors.firstName.message}</p>
            ) : (
                <EmptyDiv />
            )}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
            {errors.lastName ? <p>{errors.lastName.message}</p> : <EmptyDiv />}

            <label htmlFor="email">Email</label>
            <input id="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : <EmptyDiv />}
            <input type="submit" />

            <input
                type="button"
                value="Reset all"
                onClick={() => {
                    reset(
                        { firstName: "", lastName: "", email: "" },
                        {
                            keepDefaultValues: true,
                            keepErrors: true,
                            keepDirty: true,
                            keepIsSubmitted: false,
                            keepTouched: false,
                            keepIsValid: false,
                            keepSubmitCount: false,
                        }
                    );
                }}
            />
            <input
                type="button"
                value="Reset email"
                onClick={() => {
                    // reset({ ...getValues, email: "" });
                    resetField("email", { keepError: true });
                }}
            />
        </form>
    );
};
export default ResetForm;
