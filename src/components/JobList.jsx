import { useState } from "react";

const JobList = ({ job }) => {
  const [showFullDiscription, setShowFullDiscription] = useState(false);
  var description = job.description;
  if (!showFullDiscription) {
    description = job.description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Full-Time</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>
          <div className="mb-5">{description}</div>
          <button
            className="text-indigo-500 mb-2 hover:text-indigo-600"
            onClick={() => setShowFullDiscription((prev) => !prev)}
          >
            {showFullDiscription ? "Less" : "More"}
          </button>
          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
          <div className="border border-gray-100 mb-5" />
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg" />
              {job.location}
            </div>
            <a
              href={`job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
