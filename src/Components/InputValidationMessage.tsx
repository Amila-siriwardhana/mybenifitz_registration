const InputValidationMessage = (props: { errors: any, type: string }) => {
  const { errors, type } = props;
  return (
    <>
      {errors[type] && (
        <small className="text-err ms-3">{`${errors[type].message}`}</small>
      )}
    </>
  );
};
export default InputValidationMessage;
