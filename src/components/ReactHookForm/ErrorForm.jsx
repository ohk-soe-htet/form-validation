import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmptyDiv from "../UI/EmptyDiv";

import * as yup from "yup";

const numberSchema = yup.object({
    name: yup
        .string()
        .required("Please enter your name")
        .matches(/^[a-z0-9]+$/gi, "Alphanumeric character only"),
    number: yup
        .number()
        .required("Please enter your age")
        .typeError("Please enter your age")
        .positive("Positive Number only") // min(),max()
        .integer("Integer Only")
        .lessThan(100, "Less than 100 only"), // moreThan()
    email: yup
        .string()
        .required("Please enter your email")
        .email("Invalid format"),
});

const ErrorForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: "",
            number: "",
            email: "",
        },
        resolver: yupResolver(numberSchema),
    });

    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            {/* <input
                type="text"
                id="name"
                {...register("name", {
                    required: "Required",
                    maxLength: {
                        value: 15,
                        message: "Must be 15 characters or less",
                    },
                    pattern: {
                        value: /^[a-z0-9]+$/gi,
                        message: "Alphanumeric character only",
                    },
                })}
            /> */}
            <input id="name" {...register("name")} />
            {errors.name ? <p>{errors.name.message}</p> : <EmptyDiv />}

            <label htmlFor="number">Number</label>
            <input id="number" {...register("number")} />
            {errors.number ? <p>{errors.number.message}</p> : <EmptyDiv />}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : <EmptyDiv />}
            <input type="submit" />
        </form>
    );
};
export default ErrorForm;
