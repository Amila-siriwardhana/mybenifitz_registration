import { useEffect, useState } from "react";
import { ArrowRight, HelpCircle, Plus } from "react-feather";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BenefitCard from "../components/BenefitCard";
import ImageUpload from "../components/ImageUpload";
import InputValidationMessage from "../components/InputValidationMessage";
import Tooltip from "../components/Tooltip";
import { ClubOfferPurchaseTypes, ClubOfferTypes } from "../constants/enums";
import IClubOffer from "../constants/interfaces/IClubOffer";

const SecondPage = () => {
  const navigate = useNavigate();

  const [offerType, setOfferType] = useState<ClubOfferTypes | null>(null);
  const [smallLogo, setSmallLogo] = useState<any | null>(null);
  const [bigLogo, setBigLogo] = useState<any | null>(null);
  const [smallLogoeErr, setSmallLogoErr] = useState<string | null>(null);
  const [bigLogoErr, setBigLogoErr] = useState<string | null>(null);
  const [descriptionLen, setDescriptionLen] = useState<number>(0);
  const [longDescriptionLen, setlongDescriptionLen] = useState<number>(0);
  const [extarInfoLen, setExtarInfoLen] = useState<number>(0);

  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "description") {
        setDescriptionLen(value.description.length);
      }
      if (name === "longDescription") {
        setlongDescriptionLen(value.longDescription.length);
      }
      if (name === "extraInfo") {
        setExtarInfoLen(value.extraInfo.length);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!offerType) {
      setError("offerType", {
        type: "required",
        message: "Please select the offer type",
      });
    } else {
      clearErrors("offerType");
    }

    if (smallLogoeErr) {
      setError("smallLogo", {
        type: "required",
        message: smallLogoeErr,
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
  }, [setError, offerType, clearErrors, smallLogoeErr, bigLogoErr]);

  const onSubmit = (data: any) => {
    if (data && offerType) {
      const clubOfferDataObj: IClubOffer = {
        type: offerType,
        price: Number(data.price),
        points: Number(data.points),
        discountAmount: Number(data.discountAmount),
        possiblePurchases:
          data.possiblePurchases === ClubOfferPurchaseTypes.Single ? 1 : null,
        description: data.description,
        longDescription: data.longDescription,
        extraInfo: data.extraInfo,
        smallImage: smallLogo,
        largeImage: bigLogo,
      };
      console.log("clubData: ", clubOfferDataObj);
    }
    // navigate("/define_brand");
  };
  console.log("ERR:", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6 m-0 p-0">
          <div className="card p-md-4 px-4 mt-5">
            <div className="second-page-button row mb-1 p-0">
              <div className="second-button col-xs-12 col-md-4 mb-4 md-left align-content-xs-center p-0">
                <button
                  className={`submit_button   py-2 mt-4 mt-md-0  ${
                    offerType === ClubOfferTypes.Prepaid ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.Prepaid)}
                >
                  Prepaid
                  <Tooltip text={"tooltip"} />
                </button>
              </div>
              <div className="second-button col-xs-12 col-md-4 mb-4 middle">
                <button
                  className={`submit_button w-100 py-2 p-xs-5 ${
                    offerType === ClubOfferTypes.PunchCard ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.PunchCard)}
                >
                  Punchcard
                  <Tooltip text={"tooltip"} />
                </button>
              </div>
              <div className="second-button col-xs-12 col-md-4 right ">
                <button
                  className={`submit_button w-100 py-2 ${
                    offerType === ClubOfferTypes.Free ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.Free)}
                >
                  Free
                  <Tooltip text={"tooltip"} />
                </button>
              </div>
            </div>
            <InputValidationMessage errors={errors} type={"offerType"} />

            <div className="row">
              <div className="inputgroup col-xs-12 col-md-6 left">
                <label>
                  Price
                  <Tooltip text={"tooltip"} />
                </label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("price", {
                      required: true,
                      min: 0,
                      maxLength: 80,
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"price"} />
              </div>
              <div className="inputgroup col-xs-12 col-md-6 right">
                <label>
                  Points
                  <Tooltip text={"tooltip"} />
                </label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Points"
                    {...register("points", {
                      required: true,
                      min: 0,
                      maxLength: 100,
                    })}
                  />
                </div>
                <InputValidationMessage errors={errors} type={"points"} />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-xs-12 col-md-6 left">
                <label>Possible Purchase</label>
                <div className="inputdiv ">
                  <select
                    defaultValue=""
                    {...register("possiblePurchases", {
                      required: "Please select possible purchase type",
                    })}
                  >
                    <option value="" disabled hidden>
                      Possible Purchase
                    </option>
                    <option value={ClubOfferPurchaseTypes.Single}>
                      Single
                    </option>
                    <option value={ClubOfferPurchaseTypes.Unlimited}>
                      Unlimited
                    </option>
                  </select>
                </div>
                <InputValidationMessage
                  errors={errors}
                  type={"possiblePurchases"}
                />
              </div>
              <div className="inputgroup col-xs-12 col-md-6 right">
                <label>
                  Discount Amount
                  <Tooltip text={"tooltip"} />
                </label>
                <div className="inputdiv ">
                  <input
                    type="number"
                    placeholder="Discount Amount"
                    {...register("discountAmount", {
                      required: true,
                      min: 0,
                      maxLength: 140,
                    })}
                  />
                </div>
                <InputValidationMessage
                  errors={errors}
                  type={"discountAmount"}
                />
              </div>
            </div>
            <div className="row">
              <div className="inputgroup ">
                <label>
                  Description
                  <Tooltip text={"tooltip"} />
                </label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Description"
                    maxLength={20}
                    {...register("description", {
                      maxLength: {
                        value: 20,
                        message:
                          "Description should be less than 20 characters",
                      },
                    })}
                  />
                </div>
                <small className="p-0 m-0 me-3 float-end text-white length-info">
                  {descriptionLen}/20
                </small>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup mt-0">
                <label>
                  Long Description
                  <Tooltip text={"tooltip"} />
                </label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Long Description"
                    maxLength={200}
                    {...register("longDescription", {
                      maxLength: {
                        value: 200,
                        message:
                          "Long Description should be less than 200 characters",
                      },
                    })}
                  />
                </div>
                <small className="p-0 m-0 me-3 float-end text-white length-info">
                  {longDescriptionLen}/200
                </small>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup mt-0">
                <label>Extra Information</label>
                <div className="inputdivtext">
                  <textarea
                    placeholder="Extra Information"
                    maxLength={250}
                    {...register("extraInfo", {
                      maxLength: {
                        value: 250,
                        message:
                          "Extra Information should be less than 250 characters",
                      },
                    })}
                  />
                </div>
                <small className="p-0 m-0 me-3 float-end text-white length-info">
                  {extarInfoLen}/250
                </small>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-xs-6 col-md-6 my-4 left">
                <label>Logo (Small)</label>
                <div className="inputdiv image-uplaod-div mt-2">
                  <ImageUpload
                    setImageFile={setSmallLogo}
                    setError={setSmallLogoErr}
                    ratio={[1.8, 1]}
                    minheight={141}
                    minwidth={80}
                  ></ImageUpload>
                </div>
                <small className="p-0 m-0 ms-4 text-white length-info">
                  1.8:1 (min 141x80 px)
                </small>
                <div>
                  <InputValidationMessage errors={errors} type={"smallLogo"} />
                </div>
              </div>
              <div className="inputgroup col-xs-6 col-md-6 my-4  middle">
                <label>Logo (Big)</label>
                <div className="inputdiv image-uplaod-div p-0 mt-2">
                  <ImageUpload
                    setImageFile={setBigLogo}
                    setError={setBigLogoErr}
                    minheight={200}
                    minwidth={200}
                    ratio={[1, 1.23]}
                  ></ImageUpload>
                </div>
                <small className="p-0 m-0 ms-4 text-white length-info">
                  1:2.3 (min 200x250 px)
                </small>
                <div>
                  <InputValidationMessage errors={errors} type={"bigLogo"} />
                </div>
              </div>
              <div className="col-md-4 col-xs-8 mt-5 right position-relative ">
                <div className="add-benefits-div  position-relative ">
                  <span className="textsec ">Add Benefits</span>
                  <button className="submit_button_plus" type="submit">
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benifits-card-div col-md-6 col-xs-12 p-md-0 pb-5 px-0 mx-0  position-relative">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <div className="next-button-div d-inline-flex justify-content-center align-items-center position-absolute bottom-0 mb-md-5 ms-md-5 mt-5 mx-5 ">
            <span className="textsec benefit-card ">Next</span>
            <button
              className="submit_button_plus "
              onClick={() => navigate("/define_brand")}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SecondPage;
