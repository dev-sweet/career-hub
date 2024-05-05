import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <img src={logo} alt="job_img" />
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline text-[#7E90FE] border-[#7E90FE] rounded p-3">
              {remote_or_onsite}
            </div>
            <div className="badge badge-outline text-[#7E90FE] border-[#7E90FE] rounded p-3">
              {job_type}
            </div>
          </div>
          <div className="flex">
            <p className="flex items-center">
              <IoLocationOutline />
              {location}
            </p>
            <p className="flex items-center">
              <CiDollar />
              {salary}
            </p>
          </div>
          <button className="btn mt-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-5 w-1/2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
