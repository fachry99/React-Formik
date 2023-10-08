import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
