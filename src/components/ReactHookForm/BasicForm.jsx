import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../hooks/validate";
import EmptyDiv from "../UI/EmptyDiv";

const BasicForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        resolver: yupResolver(yupSchema),
    });

    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
            {/* Native Validate */}
            {/* <input 
                type="text"
                id="firstName"
                {...register("firstName", {
                    required: "Required",
                    maxLength: {
                        value: 15,
                        message: "Must be 15 characters or less",
                    },
                })}
            /> */}
            {errors.firstName ? (
                <p>{errors.firstName.message}</p>
            ) : (
                <EmptyDiv />
            )}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
            {errors.lastName ? <p>{errors.lastName.message}</p> : <EmptyDiv />}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : <EmptyDiv />}
            <input type="submit" />
        </form>
    );
};
export default BasicForm;
