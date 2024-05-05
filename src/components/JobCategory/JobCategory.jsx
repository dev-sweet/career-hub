import accounts from "../../assets/icons/accounts.png";
import creative from "../../assets/icons/creative.png";
import marketing from "../../assets/icons/marketing.png";
import chip from "../../assets/icons/chip.png";
const JobCategory = () => {
  const categories = [
    {
      title: "Account & Finance",
      availableJobs: "300 Jobs Available",
      img: accounts,
    },
    {
      title: "Creative Design",
      availableJobs: "100+ Jobs Available",
      img: creative,
    },
    {
      title: "Marketing & Sales",
      availableJobs: "150 Jobs Available",
      img: marketing,
    },
    {
      title: "Engineering Job",
      availableJobs: "224 Jobs Available",
      img: chip,
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-4xl text-center font-bold">Job Category List</h2>
      <p className="text-[#757575] text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-center items-center gap-5 mt-5">
        {categories.map((category) => (
          <div key={category.img} className="card w-96 bg-[#D1D1D1]">
            <div className="card-body items-center text-center">
              <img src={category.img} alt="" />
              <h2 className="card-title">{category.title}</h2>
              <p>{category.availableJobs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
