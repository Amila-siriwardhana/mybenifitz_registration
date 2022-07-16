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
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Price</label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("Price", {
                      required: true,
                      min: 0,
                      maxLength: 80,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Points</label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Points"
                    {...register("Points", {
                      required: true,
                      min: 0,
                      maxLength: 100,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Possible Purchase</label>
                <div className="inputdiv ">
                  <select
                    {...register("Possible Purchase", { required: true })}
                  >
                    <option value="Null"> Null</option>
                    <option value="1"> 1</option>
                  </select>
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Discount Amount</label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Discount Amount"
                    {...register("Discount Amount", {
                      required: true,
                      min: 0,
                      maxLength: 140,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="inputgroup">
              <label>Description</label>
              <div className="inputdiv ">
                <textarea
                  placeholder="Description"
                  {...register("Description", { min: 0, maxLength: 20 })}
                />
              </div>
            </div>
            <div className="inputgroup">
              <label>Long Description</label>
              <div className="inputdiv ">
                <textarea
                  {...register("Long Description", {
                    required: true,
                    min: 0,
                    maxLength: 200,
                  })}
                />
              </div>
            </div>
            <div className="inputgroup">
              <label>Extra Information</label>
              <div className="inputdiv">
                <textarea
                  {...register("Extra Information", { min: 0, maxLength: 250 })}
                />
              </div>
            </div>
            <div>
              <button className="submit_button_benifits px-4 py-2 m-5">
                Add Benifits
              </button>
              <button className="submit_button_plus px-4 py-3" type="submit">
                +
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 p-0"></div>
    </div>
  );
};
export default SecondPage;
