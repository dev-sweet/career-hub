import banner from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="md:flex gap-4 items-center justify-center">
      <div className="md:w-2/5">
        <h1 className="text-5xl font-bold">
          One Step <br /> Closer To Your{" "}
          <span className="text-[#7E90FE] block">Dream Job</span>
        </h1>
        <p className="text-[#757575] mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn mt-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-5">
          Get Started
        </button>
      </div>
      <div className="md:w-3/5">
        <img className="w-100" src={banner} alt="banner img" />
      </div>
    </div>
  );
};

export default Banner;
