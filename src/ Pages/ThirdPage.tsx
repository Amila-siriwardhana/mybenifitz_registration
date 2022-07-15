import React from "react";
import { useForm } from "react-hook-form";

const ThirdPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputdiv p-3">
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: true, min: 0, maxLength: 80 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: true,
              min: 0,
              maxLength: 100,
            })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Account Name"
            {...register("Account Name", { required: true, maxLength: 12 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Brand ID"
            {...register("Brand ID", { min: 0, maxLength: 140 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Business Name"
            {...register("Business Name", { max: 20, min: 0, maxLength: 17 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Business Address"
            {...register("Business Address", {
              required: true,
              max: 35,
              min: 0,
              maxLength: 35,
            })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="number"
            placeholder="Phone Number"
            {...register("Phone Number", { min: 0 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Opening Hours"
            {...register("Opening Hours", { max: 25, min: 0, maxLength: 25 })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Special Opening Hours"
            {...register("Special Opening Hours", {
              max: 25,
              min: 0,
              maxLength: 25,
            })}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Contact Name"
            {...register("Contact Name", {})}
          />
        </div>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Description"
            {...register("Description", {})}
          />
        </div>

        <div className="inputdiv p-3">
          <input type="submit" />
        </div>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputdiv p-3">
          <input
            type="text"
            placeholder="Brand Name"
            {...register("Brand Name", { required: true, min: 0 })}
          />
        </div>
        <div className="inputdiv p-3">
          <textarea {...register("Description", {})} />
        </div>

        <div className="inputdiv p-3">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ThirdPage;
