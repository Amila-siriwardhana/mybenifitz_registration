import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { BASE_URL } from "./config/config";
import { IClubEntity } from "./constants/interfaces/IClub";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const ClientApp = () => {
  const createClubEntity = (clubData: any) => {
    const clubEntity: IClubEntity = {
      type: clubData.type,
      name: clubData.name,
      email: clubData.email,
      phoneNum: clubData.phoneNum,
      website: clubData.website,
      description: clubData.description,
      extraInfo: clubData.extraInfo,
    };
    const url = BASE_URL + "/club";
    // axios
    //   .post(url, clubEntity)
    //   .then((res) => {
    //     if (res.status === 201) {
          
    //     }
    //   })
    //   .catch((err) => {});
  };

  return (
    <Routes>
      <Route
        path="/build_loyalty_club"
        element={<FirstPage createClubEntity={createClubEntity} />}
      />
      <Route path="/add_business_to_club" element={<SecondPage />} />
      <Route path="/define_brand" element={<ThirdPage />} />
    </Routes>
  );
};
export default ClientApp;
