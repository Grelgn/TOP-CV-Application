import { useState } from "react";

function Experience({companyState, positionState, responsibilitiesState, startJobState, endJobState, status, submitSetter}) {
    const[company, setCompany] = useState('');
    const[position, setPosition] = useState('');
    const[responsibilities, setResponsibilities] = useState('');
    const[startJob, setStartJob] = useState('');
    const[endJob, setEndJob] = useState('');

    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }
    const handlePositionChange = (e) => {
        setPosition(e.target.value)
    }
    const handleResponsibilitiesChange = (e) => {
        setResponsibilities(e.target.value)
    }
    const handleStartJobChange = (e) => {
        setStartJob(e.target.value)
    }
    const handleEndJobChange = (e) => {
        setEndJob(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        companyState(company);
        positionState(position);
        responsibilitiesState(responsibilities);
        startJobState(startJob);
        endJobState(endJob);
        submitSetter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Practical Experience</legend>
            {(status == 'pending' || status == 'edit') && 
                <>
                    <label htmlFor="company">Company Name</label>
                    <input key="company" type="text" name="company" id="company" value={company} required onChange={handleCompanyChange} />
                    <label htmlFor="position">Position Title</label>
                    <input key="position" type="text" name="position" id="position" value={position} required onChange={handlePositionChange} />
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea key="responsibilities" type="text" name="responsibilities" id="responsibilities" value={responsibilities} required onChange={handleResponsibilitiesChange} />
                    <label htmlFor="start-job">Start Date</label>
                    <input key="start-job" type="date" name="start-job" id="start-job" value={startJob} required onChange={handleStartJobChange} />
                    <label htmlFor="end-job">End Date</label>
                    <input key="end-job" type="date" name="end-job" id="end-job" value={endJob} required onChange={handleEndJobChange} />
                    <button>Submit</button>
                </>
            }
            {(status == 'submitted') &&
                <>
                    <button>Edit</button>
                </>
            }
        </form>
    )
}

export default Experience;