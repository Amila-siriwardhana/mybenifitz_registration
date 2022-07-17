import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BASE_URL } from "./config/config";
import { StatusCodes } from "./constants/enums";
import { IClubEntity } from "./constants/interfaces/IClub";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const ClientApp = () => {
  const navigate = useNavigate();

  const createClubEntity = (clubData: any) => {
    const createClubErrors = [];
    const clubEntity: IClubEntity = {
      type: clubData.type,
      name: clubData.name,
      email: clubData.email,
      phoneNum: clubData.phoneNum,
      website: clubData.website,
      description: clubData.description,
      extraInfo: clubData.extraInfo,
    };
    const clubUrl = BASE_URL + "/club";
    axios
      .post(clubUrl, clubEntity)
      .then((res) => {
        if (res.status === StatusCodes.CREATED) {
          if (clubData.smallImage) {
            const smallLogoUrl = BASE_URL + "/club/" + res.data.id + "/small_logo";
            axios
              .post(smallLogoUrl, {
                name: clubData.smallImage.name,
                base64: clubData.smallImage.base64,
              })
              .then((res) => {
                if (res.status === StatusCodes.SUCCESS) {
                  console.log("small logo created");
                }
              })
              .catch((err) => {
                createClubErrors.push(err);
              });
          }
          if (clubData.largeImage) {
            const smallLogoUrl = BASE_URL + "/club/" + res.data.id + "/large_logo";
            axios
              .post(smallLogoUrl, {
                name: clubData.largeImage.name,
                base64: clubData.largeImage.base64,
              })
              .then((res) => {
                if (res.status === StatusCodes.SUCCESS) {
                  console.log("large logo created");
                }
              })
              .catch((err) => {
                createClubErrors.push(err);
              });
          }
          //
        }
      })
      .catch((err) => {
        createClubErrors.push(err);
      });
  };

  return (
    <Routes>
      <Route path="/build_loyalty_club" element={<FirstPage createClubEntity={createClubEntity} />} />
      <Route path="/add_business_to_club" element={<SecondPage />} />
      <Route path="/define_brand" element={<ThirdPage />} />
    </Routes>
  );
};
export default ClientApp;
