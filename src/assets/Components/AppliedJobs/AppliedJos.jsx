import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../../Utility/Utility";
import Ajobs from "../AJobs/Ajobs";

const AppliedJos = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs , setDisplayJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs , storedJobIds ,jobsApplied);

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                jobsApplied.push(job);
            }
            setAppliedJobs(jobsApplied);
        }
    }, [jobs])

    const handleFilterJobs = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="m-1 btn">Filter Jobs</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilterJobs('all')}><a>All</a></li>
                    <li onClick={() => handleFilterJobs('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilterJobs('onsite')}><a>On Site</a></li>
                </ul>
            </details>
            <h3 className="text-2xl">Applied Jobs : {appliedJobs.length}</h3>
            <div>
                {
                    displayJobs.map(job => <Ajobs key={job.id} job={job}></Ajobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJos;