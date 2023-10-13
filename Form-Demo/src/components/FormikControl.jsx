function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputControl {...rest} />;
    case "textarea":
      return <TextareaControl {...rest} />;
    case "select":
      return <SelectControl {...rest} />;
    case "radio":
      return <RadioControl {...rest} />;
    case "checkbox":
      return <CheckboxControl {...rest} />;
    case "date":
      return <DateControl {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
