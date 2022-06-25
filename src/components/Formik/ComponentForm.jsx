// Render Prop
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nativeValidate, yupSchema } from "../../hooks/validate";

const ComponentForm = () => (
    <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        // validate={nativeValidate}
        validationSchema={yupSchema}
        onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }}
    >
        {({ isSubmitting }) => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" id="firstName" />
                <ErrorMessage name="firstName" component="p" />

                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" id="lastName" />
                <ErrorMessage name="lastName" component="p" />

                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="p" />

                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
);

export default ComponentForm;
