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
    <div className="card m-5">
      <div className="row">
        <div className="col-6 p-5">
          <div className="textsec">
            <h3>Create Business Account</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Email</label>
                <div className="inputdiv ">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      min: 0,
                      maxLength: 80,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Password</label>
                <div className="inputdiv ">
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
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Account Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Account Name"
                    {...register("Account Name", {
                      required: true,
                      maxLength: 12,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Business Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Business Name"
                    {...register("Business Name", {
                      max: 20,
                      min: 0,
                      maxLength: 17,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Brand ID</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Brand ID"
                    {...register("Brand ID", { min: 0, maxLength: 140 })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Business Address</label>
                <div className="inputdiv ">
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
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Phone Number</label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    {...register("Phone Number", { min: 0 })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Contact Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Contact Name"
                    {...register("Contact Name", {})}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Opening Hours</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Opening Hours"
                    {...register("Opening Hours", {
                      max: 25,
                      min: 0,
                      maxLength: 25,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Special Opening Hours</label>
                <div className="inputdiv ">
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
              </div>
            </div>

            <div className="inputgroup ">
              <label>Description</label>
              <div className="inputdiv ">
                <input
                  type="text"
                  placeholder="Description"
                  {...register("Description", {})}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 p-5">
          <div className="textsec">
            <h3>Brand Information</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputgroup">
              <label>Brand Name</label>
              <div className="inputdiv ">
                <input
                  type="text"
                  placeholder="Brand Name"
                  {...register("Brand Name", { required: true, min: 0 })}
                />
              </div>
            </div>
            <div className="inputgroup">
              <label>Long Description</label>
              <div className="inputdiv p-3">
                <textarea
                  placeholder="Long Description"
                  {...register("Description", {})}
                />
              </div>
            </div>

            <div>
              <button className="submit_button px-4 py-2 m-5">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
