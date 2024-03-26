import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeatureJob = ({ job }) => {
    const { id ,  logo, job_title, company_name, location, remote_or_onsite, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4 pl-4">
                        <button className="text-[#7E90FE] px-5 py-2 font-extrabold rounded border border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="text-[#7E90FE] px-5 py-2 font-extrabold rounded border border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex gap-1 justify-left items-center">
                        <p className="flex gap-2 items-center text-xl"><IoLocationOutline /><span className="text-lg">{location}</span></p>
                        <p className="flex gap-2 items-center text-xl"><AiOutlineDollar /><span className="text-lg">{salary}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobDetails/${id}`}>
                            <button className="text-white px-5 py-2 font-extrabold rounded bg-[#7E90FE] border border-[#7E90FE]">Job Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;