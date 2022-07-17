const InputValidationMessage = (props: { errors: any, type: string }) => {
  const { errors, type } = props;
  return (
    <>
      {errors[type] && errors[type].message && (
        <small className="text-err ms-3 m-0 p-0">{`${errors[type].message}`}</small>
      )}
    </>
  );
};
export default InputValidationMessage;
