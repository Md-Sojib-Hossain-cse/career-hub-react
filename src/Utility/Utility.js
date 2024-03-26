const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem('job-applications');
    if(storedJobApplications){
        return JSON.parse(storedJobApplications);
    }
    else{
        return [];
    }
}


const saveJobApplications = id => {
    const storedJobApplications = getStoredJobApplications();
    const isExists = storedJobApplications.find(jobId => jobId === id);

    if(!isExists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications' , JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplications , saveJobApplications};