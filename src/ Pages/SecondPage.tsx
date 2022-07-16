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
        <div className="card ms-5">
          <div className="d-flex justify-content-between">
            <button className="submit_button p-3 px-5" type="submit">
              Register
            </button>
            <button className="submit_button p-3 px-5" type="submit">
              Register
            </button>
            <button className="submit_button p-3 px-5" type="submit">
              Register
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputgroup">
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
            <div className="inputgroup">
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
            <div className="inputgroup">
              <label>Possible Purchase</label>
              <div className="inputdiv ">
                <select {...register("Possible Purchase", { required: true })}>
                  <option value="Null"> Null</option>
                  <option value="1"> 1</option>
                </select>
              </div>
            </div>
            <div className="inputgroup">
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
            <span className="addlabel d-flex float-end p-1">Add Benifits</span>

            <div>
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
