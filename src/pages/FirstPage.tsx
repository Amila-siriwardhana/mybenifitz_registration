import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ImageUpload from "../components/ImageUpload";
import InputValidationMessage from "../components/InputValidationMessage";
import Required from "../components/Required";
import { ClubTypes } from "../constants/enums";
import IClub from "../constants/interfaces/IClub";
import { EMAIL_REGEX, URL_REGEX } from "../constants/regex";

type FirstPageProps = {
  createClubEntity: (clubData: IClub) => void;
};

const FirstPage = (props: FirstPageProps) => {
  const { createClubEntity } = props;

  const [clubType, setClubType] = useState<ClubTypes | null>(null);
  const [smallLogo, setSmallLogo] = useState<any | null>(null);
  const [bigLogo, setBigLogo] = useState<any | null>(null);
  const [smallLogoErr, setSmallLogoErr] = useState<string | null>(null);
  const [bigLogoErr, setBigLogoErr] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!smallLogo) {
      setSmallLogoErr("Please upload small logo");
    } else {
      clearErrors("smallLogo");
    }
    if (!bigLogo) {
      setBigLogoErr("Please upload big logo");
    } else {
      clearErrors("bigLogo");
    }

    if (!clubType) {
      setError("clubType", {
        type: "required",
        message: "Please select the club type",
      });
    } else {
      clearErrors("clubType");
    }

    if (smallLogoErr) {
      setError("smallLogo", {
        type: "required",
        message: smallLogoErr,
      });
    } else {
      clearErrors("smallLogo");
    }

    if (bigLogoErr) {
      setError("bigLogo", {
        type: "required",
        message: bigLogoErr,
      });
    } else {
      clearErrors("bigLogo");
    }
  }, [setError, clubType, clearErrors, smallLogoErr, bigLogoErr, smallLogo, bigLogo]);

  const onSubmit = (data: any) => {
    console.log(smallLogo);

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
      // createClubEntity(clubDataObj);
    }
  };

  console.log("ERR:", errors);

  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 p-0 d-flex justify-content-center align-items-center">
        <img className="logo" src={logo} alt="Logo"></img>
      </div>
      <div className="formdiv col-xs-12 col-md-6">
        <div className="textsec mx-5">
          <h3>Register Yourself!</h3>
        </div>
        <div className="card p-4 p-md-5 me-md-5">
          <div className="mb-2">
            <button className={`submit_button px-5 py-2 ${clubType === ClubTypes.Public ? "active " : ""}`} onClick={() => setClubType(ClubTypes.Public)}>
              Public
            </button>
            <span className="textsec mx-3">or</span>
            <button className={`submit_button px-5 py-2 ${clubType === ClubTypes.Private ? "active " : ""}`} onClick={() => setClubType(ClubTypes.Private)}>
              Private
            </button>
          </div>
          <InputValidationMessage errors={errors} type={"clubType"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-xs-12 col-md-6 left">
                <label>
                  Club Name <Required />
                </label>
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
                <InputValidationMessage errors={errors} type={"name"} />
              </div>
              <div className="inputgroup col-xs-12 col-md-6 right">
                <label>
                  Email <Required />
                </label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Please enter the email address",
                      maxLength: {
                        value: 320,
                        message: "Email address is too long. Max length is 320 characters",
                      },
                      pattern: {
                        value: EMAIL_REGEX,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"email"} />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-xs-12 col-md-6 left">
                <label>
                  Phone Number <Required />
                </label>
                <div className="inputdiv ">
                  <Controller
                    name="phoneNum"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Please enter the phone number" }}
                    render={({ field }) => <PhoneInputWithCountrySelect className="ps-2" placeholder="Phone Number" {...field} />}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"phoneNum"} />
              </div>
              <div className="inputgroup col-xs-12 col-md-6 right">
                <label>Website</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Website"
                    {...register("website", {
                      pattern: {
                        value: URL_REGEX,
                        message: "Please enter a valid website URL",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"website"} />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>
                  Description <Required />
                </label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Description"
                    {...register("description", {
                      required: "Please enter the description",
                      maxLength: {
                        value: 140,
                        message: "Description should be less than 140 characters",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"description"} />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Extra Information</label>
                <div className="inputdiv">
                  <input type="text" placeholder="Extra Information" {...register("extraInfo", {})} />
                </div>
                <InputValidationMessage errors={errors} type={"extraInfo"} />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-5">
                <label>
                  Logo (Small) <Required />
                </label>
                <div className="image-uplaod-div">
                  <ImageUpload setImageFile={setSmallLogo} setError={setSmallLogoErr} ratio={[1, 3]} isSquare={true}></ImageUpload>
                </div>
                <small className="p-0 m-0 ms-4 text-white length-info">1:3 or square</small>
                <InputValidationMessage errors={errors} type={"smallLogo"} />
              </div>
              <div className="inputgroup col-5 right">
                <label>
                  Logo (Big) <Required />
                </label>
                <div className="image-uplaod-div">
                  <ImageUpload setImageFile={setBigLogo} setError={setBigLogoErr} isSquare={true} minheight={40} ratio={[1, 1]}></ImageUpload>
                </div>
                <small className="p-0 m-0 ms-4 text-white length-info">square (min 80x80)</small>
                <InputValidationMessage errors={errors} type={"bigLogo"} />
              </div>
            </div>
            <div className="w-100 right position-relative">
              <div className="checkbox mt-4">
                <input
                  type="checkbox"
                  placeholder=""
                  {...register("isAgreed", {
                    required: "Please indicate that you have read and agree to the Terms of Service and Privacy Policy",
                  })}
                />
                <div>
                  <span> I agree to</span>
                  <a href="terms_of_service_link" className="terms">
                    Terms of Service
                  </a>
                  <span>&amp;</span>
                  <a href="privacy_policy_link" className="terms">
                    Privacy Policy
                  </a>
                </div>
                <div></div>
              </div>
              <button className="submit_button p-3 px-5 position-absolute end-0 bottom-0" type="submit" disabled={!!errors.isAgreed}>
                Register
              </button>
            </div>
            <InputValidationMessage errors={errors} type={"isAgreed"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
