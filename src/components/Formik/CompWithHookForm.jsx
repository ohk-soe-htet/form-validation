import { createContext } from "react";
import { useFormik } from "formik";
import { nativeValidate, yupSchema } from "../../hooks/validate";
import EmptyDiv from "../UI/EmptyDiv";

// Create empty context
const FormikContext = createContext({});

// Place all of what’s returned by useFormik into context
const Formik = ({ children, ...props }) => {
    const formikStateAndHelpers = useFormik(props);
    return (
        <FormikContext.Provider value={formikStateAndHelpers}>
            {typeof children === "function"
                ? children(formikStateAndHelpers)
                : children}
        </FormikContext.Provider>
    );
};

const CompWithHookForm = () => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validate={nativeValidate}
            // validationSchema={yupSchema}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p>{formik.errors.firstName}</p>
                    ) : (
                        <EmptyDiv />
                    )}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
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
                        id="email"
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
            )}
        </Formik>
    );
};

export default CompWithHookForm;
