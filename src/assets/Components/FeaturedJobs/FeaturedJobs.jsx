import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(
        () => {
            fetch('jobs.json')
                .then(res => res.json())
                .then(data => setJobs(data))
        }, []
    )
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl">Featured Jobs : {jobs.length}</h1>
                <p className="text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <FeatureJob key={job.id} job={job}></FeatureJob>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "flex justify-center mt-4 "}>
                <button 
                onClick={() => setDataLength(jobs.length)}
                className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;