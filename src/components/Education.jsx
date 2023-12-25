import { useState } from "react";

function Education({schoolState, studyState, startDateState, endDateState, status, submitSetter}) {
    const[school, setSchool] = useState('');
    const[study, setStudy] = useState('');
    const[startDate, setStartDate] = useState('');
    const[endDate, setEndDate] = useState('');

    const handleSchoolChange = (e) => {
        setSchool(e.target.value)
    }
    const handleStudyChange = (e) => {
        setStudy(e.target.value)
    }
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
    }
    const handleEndDateChange = (e) => {
        setEndDate(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        schoolState(school);
        studyState(study);
        startDateState(startDate);
        endDateState(endDate);
        submitSetter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Educational Experience</legend>
            {(status == 'pending' || status == 'edit') && 
                <>
                    <label htmlFor="school">School Name</label>
                    <input key="school" type="text" name="school" id="school" value={school} required onChange={handleSchoolChange} />
                    <label htmlFor="study">Title of Study</label>
                    <input key="study" type="text" name="study" id="study" value={study} required onChange={handleStudyChange} />
                    <label htmlFor="start-date">Date of Study</label>
                    <input key="start-date" type="date" name="start-date" id="start-date" value={startDate} required onChange={handleStartDateChange} />
                    <label htmlFor="end-date">Date of Study</label>
                    <input key="end-date" type="date" name="end-date" id="end-date" value={endDate} required onChange={handleEndDateChange} />
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

export default Education;