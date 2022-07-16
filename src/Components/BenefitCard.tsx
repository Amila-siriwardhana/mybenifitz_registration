import { Edit, Trash2 } from "react-feather";

const BenefitCard = () => {
  return (
    <div className="card mx-5 my-3">
      <div className="row benefit-card p-3">
        <div className="col-10">
          <div className="">
            <span className="textsec ms-3">Benefit 1</span>
          </div>
        </div>
        <div className="col-2 text-end">
          <Edit size={18} className="text-warning mx-2 cursor-pointer"/>
          <Trash2 size={20} className="text-danger mx-2 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};
export default BenefitCard;
