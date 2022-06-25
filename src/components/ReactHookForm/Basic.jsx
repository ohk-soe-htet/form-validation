import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../hooks/validate";
import EmptyDiv from "../UI/EmptyDiv";

export default function Basic() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(yupSchema),
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

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
            <input {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : <EmptyDiv />}
            <input type="submit" />
        </form>
    );
}
