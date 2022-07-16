import React from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FirstPage = () => {
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
        <div>LOGO</div>
      </div>
      <div className="formdiv col-6">
        <div className="textsec mx-5">
          <h3>Register Yourself!</h3>
        </div>
        <div className="card">
          <div>
            <button className="submit_button px-5 py-2">Public</button>
            <span className="textsec mx-3">or</span>
            <button className="submit_button px-5 py-2">Private</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Club name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Club name"
                    {...register("Club name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Email</label>
                <div className="inputdiv ">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("Email", { required: true, maxLength: 100 })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Phone number</label>
                <div className="inputdiv ">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    {...register("Phone number", {
                      required: true,
                      minLength: 0,
                      maxLength: 12,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Website</label>
                <div className="inputdiv ">
                  <input
                    type="url"
                    placeholder="Website"
                    {...register("Website", {})}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Description</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Description"
                    {...register("Description", {
                      required: true,
                      max: 140,
                      min: 0,
                      maxLength: 140,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Extra Information</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Extra Information"
                    {...register("Extra Information", {
                      required: true,
                      max: 247,
                      min: 0,
                      maxLength: 247,
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="checkbox p-0">
              <input
                type="checkbox"
                placeholder=""
                {...register("I agree to Terms & Privacy Plicy", {})}
              />
              <span> I agree to </span>
              <a href="">Terms of Service</a>{" "}
              <span className="textsec">&amp;</span>{" "}
              <a href="">Privacy Policy</a>
            </div>
            <div>
              <button className="submit_button p-3 px-5" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
