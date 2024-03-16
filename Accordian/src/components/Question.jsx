import { CiSquarePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Question = ({ data }) => {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-gray-200 px-8 py-2 shadow-xl hover:bg-slate-100">
      <div className="font-itallic flex justify-between py-2 text-2xl ">
        <p>{data} </p>
        <CiSquarePlus className="text-2xl" />
      </div>
    </div>
  );
};

export default Question;
