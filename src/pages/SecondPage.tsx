import { useEffect, useState } from "react";
import { ArrowRight, Plus } from "react-feather";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BenefitCard from "../components/BenefitCard";
import ImageUpload from "../components/ImageUpload";
import { ClubOfferPurchaseTypes, ClubOfferTypes } from "../constants/enums";
import IClubOffer from "../constants/interfaces/IClubOffer";

const SecondPage = () => {
  const navigate = useNavigate();

  const [offerType, setOfferType] = useState<ClubOfferTypes | null>(null);
  const [smallLogo, setSmallLogo] = useState<any | null>(null);
  const [bigLogo, setBigLogo] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!offerType) {
      setError("offerType", {
        type: "required",
        message: "Please select the offer type",
      });
    } else {
      clearErrors("offerType");
    }
  }, [setError, offerType]);

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
        <div className="col-6 p-0">
          <div className="card p-5 ms-5">
            <div className="row mb-2">
              <div className="col-4 left">
                <button
                  className={`submit_button w-100 py-2 ${
                    offerType === ClubOfferTypes.Prepaid ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.Prepaid)}
                >
                  Prepaid
                </button>
              </div>
              <div className="col-4 middle">
                <button
                  className={`submit_button w-100 py-2 ${
                    offerType === ClubOfferTypes.PunchCard ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.PunchCard)}
                >
                  Punchcard
                </button>
              </div>
              <div className="col-4 right">
                <button
                  className={`submit_button w-100 py-2 ${
                    offerType === ClubOfferTypes.Free ? "active " : ""
                  }`}
                  type="submit"
                  onClick={() => setOfferType(ClubOfferTypes.Free)}
                >
                  Free
                </button>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
                <label>Price</label>
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
              </div>
              <div className="inputgroup col-6 right">
                <label>Points</label>
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
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-6 left">
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
              </div>
              <div className="inputgroup col-6 right">
                <label>Discount Amount</label>
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
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Description</label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Description"
                    {...register("description", {
                      maxLength: {
                        value: 20,
                        message:
                          "Description should be less than 20 characters",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Long Description</label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Long Description"
                    {...register("longDescription", {
                      maxLength: {
                        value: 200,
                        message:
                          "Long Description should be less than 200 characters",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup">
                <label>Extra Information</label>
                <div className="inputdivtext">
                  <textarea
                    placeholder="Extra Information"
                    {...register("extraInfo", {
                      maxLength: {
                        value: 250,
                        message:
                          "Extra Information should be less than 250 characters",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-4 left">
                <label>Logo (Small)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setSmallLogo}></ImageUpload>
                </div>
              </div>
              <div className="inputgroup col-4 middle">
                <label>Logo (Big)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setBigLogo}></ImageUpload>
                </div>
              </div>
              <div className="col-4 right position-relative">
                <div className="add-benefits-div">
                  <span className="textsec">Add Benefits</span>
                  <button className="submit_button_plus" type="submit">
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-0 position-relative">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
          <div className=" d-inline-flex justify-content-center align-items-center position-absolute bottom-0 mb-5 ms-5">
            <span className="textsec benefit-card">Next</span>
            <button
              className="submit_button_plus"
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
