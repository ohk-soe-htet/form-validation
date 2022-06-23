import { useFormik } from "formik";
import * as yup from "yup";

import { nativeValidate } from "../../hooks/validate";
import { yupSchema } from "../../hooks/validate";
import EmptyDiv from "../UI/EmptyDiv";

const HookForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        // validate: nativeValidate,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                name="firstName"
                type="text"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firstName}
                {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <p>{formik.errors.firstName}</p>
            ) : (
                <EmptyDiv />
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
                name="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <p>{formik.errors.lastName}</p>
            ) : (
                <EmptyDiv />
            )}

            <label htmlFor="email">Email Address</label>
            <input
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
            ) : (
                <EmptyDiv />
            )}

            <button type="submit">Submit</button>
        </form>
    );
};

export default HookForm;
