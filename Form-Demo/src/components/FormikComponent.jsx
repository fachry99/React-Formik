import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikComponent() {
  const initialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <form>
          <submit type="submit">Submit</submit>
        </form>
      )}
    </Formik>
  );
}

export default FormikComponent;
