import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import ImageUpload from "../components/ImageUpload";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ClubTypes } from "../constants/enums";
import IClub from "../constants/interfaces/IClub";

const FirstPage = () => {
  const navigate = useNavigate();

  const [clubType, setClubType] = useState<ClubTypes | null>(null);
  const [smallLogo, setSmallLogo] = useState<any | null>(null);
  const [bigLogo, setBigLogo] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!clubType) {
      setError("clubType", {
        type: "required",
        message: "Please select the club type",
      });
    } else {
      clearErrors("clubType");
    }
  }, [setError, clubType]);

  const onSubmit = (data: any) => {
    if (data && clubType) {
      const clubDataObj: IClub = {
        type: clubType,
        name: data.name,
        email: data.email,
        phoneNum: data.phoneNum,
        website: data.website,
        description: data.description,
        extraInfo: data.extraInfo,
        smallImage: smallLogo,
        largeImage: bigLogo,
      };
      console.log("clubData: ", clubDataObj);
    }
    // navigate("/add_business_to_club");
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
            <button
              className={`submit_button px-5 py-2 ${
                clubType === ClubTypes.Public ? "active " : ""
              }`}
              onClick={() => setClubType(ClubTypes.Public)}
            >
              Public
            </button>
            <span className="textsec mx-3">or</span>
            <button
              className={`submit_button px-5 py-2 ${
                clubType === ClubTypes.Private ? "active " : ""
              }`}
              onClick={() => setClubType(ClubTypes.Private)}
            >
              Private
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Club Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Club Name"
                    {...register("name", {
                      required: "Please enter the club name",
                      maxLength: 80,
                    })}
                  />
                </div>
              </div>
              <div className="inputgroup col-6 right">
                <label>Email</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Please enter the email address",
                      maxLength: 100,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Please enter a valid mail address",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Phone Number</label>
                <div className="inputdiv ">
                  <Controller
                    name="phoneNum"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Please enter the phone number" }}
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
                    type="text"
                    placeholder="Website"
                    {...register("website", {})}
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
                    {...register("description", {
                      required: true,
                      maxLength: {
                        value: 140,
                        message:
                          "Description should be less than 140 characters",
                      },
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
                    {...register("extraInfo", {})}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-5">
                <label>Logo (Small)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setSmallLogo}></ImageUpload>
                </div>
              </div>
              <div className="inputgroup col-5 right">
                <label>Logo (Big)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setBigLogo}></ImageUpload>
                </div>
              </div>
            </div>
            <div className="w-100 right position-relative">
              <div className="checkbox mt-4">
                <input
                  type="checkbox"
                  placeholder=""
                  {...register("isAgreed", {
                    required:
                      "Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy",
                  })}
                />
                <div>
                  <span> I agree to</span>
                  <a href="" className="terms">
                    Terms of Service
                  </a>
                  <span>&amp;</span>
                  <a href="" className="terms">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <button
                className="submit_button p-3 px-5 position-absolute end-0 bottom-0"
                type="submit"
                disabled={!!errors.isAgreed}
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
