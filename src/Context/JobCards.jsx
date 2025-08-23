import { GrLocation } from "react-icons/gr";

const JobCards = ({ job }) => {
  const { company, company_logo, requirements, description, location, title, salaryRange } =
    job;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
       <div className="flex gap-2">
         <figure>
          <img
          className="w-16"
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div>
            <h1 className="text-2xl font-bold">{company}</h1>
            <p className="flex gap-1 items-center"><GrLocation />{location}</p>
        </div>
       </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}
          </p>
          <div className="flex gap-2 text-xs flex-wrap px-2 text-center">
            {
                requirements.map(skill=><p className="p-0.5 border border-gray-700">{skill}</p>)
            }
          </div>
          <div className="card-actions flex justify-between items-center mt-4">
            <div>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            </div>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
