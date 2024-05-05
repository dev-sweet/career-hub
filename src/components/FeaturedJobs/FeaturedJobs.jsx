import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl font-bold">Featured Jobs</h1>
      <p className="text-[#757575] mt-4 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:flex flex-wrap items-center justify-between gap-5 mt-5">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center">
        <button className="btn mt-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-8 text-center">
          See All jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
