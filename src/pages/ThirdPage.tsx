import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import ImageUpload from "../components/ImageUpload";
import InputValidationMessage from "../components/InputValidationMessage";
import { IBrand } from "../constants/interfaces/IBrand";
import { IBussiness } from "../constants/interfaces/IBussiness";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";

const ThirdPage = () => {
  const [brandLogo, setBrandLogo] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (data) {
      const brandDataObj: IBrand = {
        name: data.brandName,
        description: data.brandDescription,
        logo: brandLogo,
      };

      const businessDataObj: IBussiness = {
        email: data.email,
        password: data.password,
        name: data.accountName,
        brandId: "",
        information: {
          name: data.businessName,
          address: data.businessAddress,
          phone: data.phone,
          openingHours1: data.openingHours,
          openingHours2: data.specialOpeningHours,
          contactName: data.contactName,
          description: data.description,
        },
      };
      console.log("BRAND: ", brandDataObj);
      console.log("BUSINESS: ", businessDataObj);
    }
  };

  console.log("ERR:", errors);

  return (
    <div className="card m-5">
      <div className="row">
        <div className="col-md-6 col-xs-12 p-5">
          <div className="textsec">
            <h3>Create Business Account</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup col-md-6 col-xs-12 left">
                <label>Email</label>
                <div className="inputdiv ">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Please enter the email address",
                      maxLength: {
                        value: 320,
                        message:
                          "Email address is too long. Max length is 320 characters",
                      },
                      pattern: {
                        value: EMAIL_REGEX,
                        message: "Please enter a valid mail address",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"email"} />
              </div>
              <div className="inputgroup col-md-6 col-xs-12 right">
                <label>Password</label>
                <div className="inputdiv ">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Please enter the password",
                      maxLength: {
                        value: 20,
                        message:
                          "Password is too long. Maximum length is 20 characters",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "Password is too short. Minimum length is 8 characters",
                      },
                      pattern: {
                        value: PASSWORD_REGEX,
                        message:
                          "Password must contain at least one uppercase, one lowercase, one number and one special character",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"password"} />
              </div>
            </div>
            <div className="row">
              {/* <div className="inputgroup col-6 left"> */}
              <div className="inputgroup col-md-12 col-xs-12">
                <label>Account Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Account Name"
                    {...register("accountName", {
                      required: "Please enter the account name",
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"accountName"} />
              </div>
            </div>
            <div className="row">
              {/* <div className="inputgroup col-6 left">
                <label>Brand ID</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Brand ID"
                    {...register("brandId", {})}
                  />
                </div>
              </div> */}
              <div className="inputgroup col-md-6 col-xs-12 left">
                <label>Business Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Business Name"
                    {...register("businessName", {
                      maxLength: {
                        value: 20,
                        message:
                          "Business name should be less than 20 characters",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"businessName"} />
              </div>
              <div className="inputgroup col-md-6 col-xs-12 right">
                <label>Business Address</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Business Address"
                    {...register("businessAddress", {
                      maxLength: {
                        value: 35,
                        message:
                          "Business address should be less than 35 characters",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage
                  errors={errors}
                  type={"businessAddress"}
                />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-md-6 col-xs-12 left">
                <label>Phone Number</label>
                <div className="inputdiv ">
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={""}
                    rules={{}}
                    render={({ field }) => (
                      <PhoneInputWithCountrySelect
                        className="ps-2"
                        placeholder="Phone Number"
                        {...field}
                      />
                    )}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"phoneNumber"} />
              </div>
              <div className="inputgroup col-md-6 col-xs-12 right">
                <label>Contact Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Contact Name"
                    {...register("contactName", {})}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-md-6 col-xs-12 left">
                <label>Opening Hours</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Opening Hours"
                    {...register("openingHours", {
                      maxLength: {
                        value: 25,
                        message:
                          "Opening hours should be entered with less than 25 characters",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"openingHours"} />
              </div>
              <div className="inputgroup col-md-6 col-xs-12 right">
                <label>Special Opening Hours</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Special Opening Hours"
                    {...register("specialOpeningHours", {
                      maxLength: {
                        value: 25,
                        message:
                          "Special Opening hours should be entered with less than 25 characters",
                      },
                    })}
                  />
                </div>
                <InputValidationMessage
                  errors={errors}
                  type={"specialOpeningHours"}
                />
              </div>
            </div>

            <div className="inputgroup col-md-12 col-xs-12">
              <label>Description</label>
              <div className="inputdiv ">
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description", {})}
                />
              </div>
              <InputValidationMessage errors={errors} type={"description"} />
            </div>
          </form>
        </div>
        <div className="col-md-6 col-xs-12 p-5">
          <div className="textsec">
            <h3>Brand Information</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="inputgroup">
                <label>Brand Name</label>
                <div className="inputdiv ">
                  <input
                    type="text"
                    placeholder="Brand Name"
                    {...register("brandName", {})}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"brandName"} />
              </div>
            </div>
            <div className="row h-auto">
              <div className="inputgroup">
                <label>Description</label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Description"
                    {...register("brandDescription", {})}
                  />
                </div>
              </div>
              <InputValidationMessage
                errors={errors}
                type={"brandDescription"}
              />
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6 m-5 m-md-0">
                <div className="inputgroup col-6  left">
                  <label>Brand Logo</label>
                  <div className="inputdiv image-uplaod-div">
                    <ImageUpload setImageFile={setBrandLogo}></ImageUpload>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6  m-md-5 position-relative">
                <button
                  className="submit_button p-3 px-5 my-2 mx-5 position-md-absolute  end-0 bottom-0"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
