import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = yup.object({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid email format").required("Required!"),
  channel: yup.string().required("Required!"),
});
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("visted", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default YoutubeForm;
