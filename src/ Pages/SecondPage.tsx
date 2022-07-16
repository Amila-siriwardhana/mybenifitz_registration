import { useState } from "react";
import { Plus } from "react-feather";
import { useForm } from "react-hook-form";
import ImageUpload from "../Components/ImageUpload";

const SecondPage = () => {
  const [image, setImage] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log("ERR:", errors);

  return (
    <div className="row">
      <div className="col-6 p-0">
        <div className="card p-5">
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
            <div className="row">
              <div className="inputgroup">
                <label>Description</label>
                <div className="inputdivtext ">
                  <textarea
                    placeholder="Description"
                    {...register("Description", { min: 0, maxLength: 20 })}
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
                    {...register("Long Description", {
                      required: true,
                      min: 0,
                      maxLength: 200,
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
                    {...register("Extra Information", {
                      min: 0,
                      maxLength: 250,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputgroup col-4 left">
                <label>Logo (Small)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setImage}></ImageUpload>
                </div>
              </div>
              <div className="inputgroup col-4 middle">
                <label>Logo (Big)</label>
                <div className="inputdiv image-uplaod-div">
                  <ImageUpload setImageFile={setImage}></ImageUpload>
                </div>
              </div>
              <div className="col-4 right position-relative">
                <div className="add-benefits-div">
                  <span className="textsec">Add Benifits</span>
                  <button className="submit_button_plus">
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 p-0"></div>
    </div>
  );
};
export default SecondPage;
