import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../../Utility/Utility";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const jobId = parseInt(id);
    const job = jobs.find(job => job.id === jobId);
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    const handleAppliedJob = () => {
        saveJobApplications(jobId);
        toast("Application successful")
    };

    return (
        <div className="py-6">
            <h4>Job details of : {id} </h4>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 grid gap-4">
                    <p><span className="font-bold">Job Description :</span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility :</span>{job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements :</span>{educational_requirements}</p>
                    <p><span className="font-bold">Experience :</span>{experiences}</p>
                </div>
                <div className="md:col-span-1 grid gap-4">
                    <h4>Job Details</h4>
                    <hr />
                    <div>
                        <p>Salary : {salary}</p>
                        <p>Job Title : {job_title}</p>
                    </div>
                    <h4>Contact Information</h4>
                    <div>
                        <p>Phone : {contact_information.phone}</p>
                        <p>Email : {contact_information.email}</p>
                        <p>Adress : {contact_information.address}</p>
                    </div>
                    <button onClick={handleAppliedJob} className="w-full bg-purple-700 text-white font-bold px-5 py-2 rounded">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;