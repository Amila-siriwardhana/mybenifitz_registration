import React from "react";
import { useForm } from "react-hook-form";

const SecondPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="row">
      <div className="col-6 p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputdiv p-3">
            <input
              type="number"
              placeholder="Price"
              {...register("Price", { required: true, min: 0, maxLength: 80 })}
            />{" "}
          </div>
          <div className="inputdiv p-3">
            <input
              type="number"
              placeholder="Points"
              {...register("Points", {
                required: true,
                min: 0,
                maxLength: 100,
              })}
            />{" "}
          </div>
          <div className="inputdiv p-3">
            <select {...register("Possible Purchase", { required: true })}>
              <option value="Null"> Null</option>
              <option value="1"> 1</option>
            </select>{" "}
          </div>
          <div className="inputdiv p-3">
            <input
              type="number"
              placeholder="Discount Amount"
              {...register("Discount Amount", {
                required: true,
                min: 0,
                maxLength: 140,
              })}
            />{" "}
          </div>
          <div className="inputdiv p-3">
            <textarea {...register("Description", { min: 0, maxLength: 20 })} />{" "}
          </div>
          <div className="inputdiv p-3">
            <textarea
              {...register("Long Description", {
                required: true,
                min: 0,
                maxLength: 200,
              })}
            />{" "}
          </div>
          <div className="inputdiv p-3">
            <textarea
              {...register("Extra Information", { min: 0, maxLength: 250 })}
            />{" "}
          </div>

          <div className="inputdiv p-3">
            <input type="submit" />{" "}
          </div>
        </form>
      </div>
      <div className="col-6 p-0"></div>
    </div>
  );
};
export default SecondPage;
