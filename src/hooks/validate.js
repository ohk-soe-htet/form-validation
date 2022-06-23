import * as yup from "yup";

export const nativeValidate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    return errors;
};

export const yupSchema = yup.object({
    firstName: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    lastName: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
});
