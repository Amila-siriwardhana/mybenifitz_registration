import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import ImageUpload from "../components/ImageUpload";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const [image, setImage] = useState<any | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/add_business_to_club");
  };
  console.log("ERR:", errors);

  return (
    <div className="row">
      <div className="col-6 p-0 d-flex justify-content-center align-items-center">
        <img className="logo" src={logo}></img>
      </div>
      <div className="formdiv col-6">
        <div className="textsec mx-5">
          <h3>Register Yourself!</h3>
        </div>
        <div className="card p-5 me-5">
          <div className="mb-2">
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
                <label>Phone Number</label>
                <div className="inputdiv ">
                  <Controller
                    name="Phone Number"
                    control={control}
                    defaultValue={false}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <PhoneInputWithCountrySelect
                        className="ps-2"
                        placeholder="Phone Number"
                        {...field}
                      />
                    )}
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
            <div className="row">
              <div className="inputgroup col-5">
                <label>Logo (Small)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setImage}></ImageUpload>
                </div>
              </div>
              <div className="inputgroup col-5 right">
                <label>Logo (Big)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setImage}></ImageUpload>
                </div>
              </div>
            </div>
            <div className="w-100 right position-relative">
              <div className="checkbox mt-4">
                <input
                  type="checkbox"
                  placeholder=""
                  {...register("I agree to Terms & Privacy Plicy", {})}
                />
                <div>
                  <span> I agree to</span>
                  <a href="" className="terms">Terms of Service</a>
                  <span>&amp;</span>
                  <a href="" className="terms">Privacy Policy</a>
                </div>
              </div>
              <button
                className="submit_button p-3 px-5 position-absolute end-0 bottom-0"
                type="submit"
              >
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
