import { useState } from 'react'
import Info from "./components/Info";
import CV from './components/CV';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const[name, setName] = useState('Full Name');
  const[email, setEmail] = useState('E-mail Address');
  const[phone, setPhone] = useState('Phone Number');
  const[infoStatus, setInfo] = useState('pending');
  const[school, setSchool] = useState('School Name');
  const[study, setStudy] = useState('Title of Study');
  const[startDate, setStartDate] = useState('Start Date');
  const[endDate, setEndDate] = useState('End Date');
  const[eduStatus, setEdu] = useState('pending');
  const[company, setCompany] = useState('Company Name');
  const[position, setPosition] = useState('Position Title');
  const[responsibilities, setResponsibilities] = useState('Responsibilities');
  const[startJob, setStartJob] = useState('Start Date');
  const[endJob, setEndJob] = useState('End Date');
  const[expStatus, setExp] = useState('pending');

  const setNameState = (value) => {
    setName(value);
  }
  const setEmailState = (value) => {
    setEmail(value);
  }
  const setPhoneState = (value) => {
    setPhone(value);
  }
  const submitInfoSetter = () => {
    if (infoStatus == 'pending') {
      setInfo('submitted');
    } else if (infoStatus == 'submitted') {
      setInfo('edit');
    } else if (infoStatus == 'edit') {
      setInfo('submitted');
    }
  }

  const setSchoolState = (value) => {
    setSchool(value);
  }
  const setStudyState = (value) => {
    setStudy(value);
  }
  const setStartDateState = (value) => {
    setStartDate(value);
  }
  const setEndDateState = (value) => {
    setEndDate(value);
  }
  const submitEduSetter = () => {
    if (eduStatus == 'pending') {
      setEdu('submitted');
    } else if (eduStatus == 'submitted') {
      setEdu('edit');
    } else if (eduStatus == 'edit') {
      setEdu('submitted');
    }
  }

  const setCompanyState = (value) => {
    setCompany(value);
  }
  const setPositionState = (value) => {
    setPosition(value);
  }
  const setResponsibilitiesState = (value) => {
    setResponsibilities(value);
  }
  const setStartJobState = (value) => {
    setStartJob(value);
  }
  const setEndJobState = (value) => {
    setEndJob(value);
  }
  const submitExpSetter = () => {
    if (expStatus == 'pending') {
      setExp('submitted');
    } else if (expStatus == 'submitted') {
      setExp('edit');
    } else if (expStatus == 'edit') {
      setExp('submitted');
    }
  }

	return (
		<>
			<main>
        <section>
          {/* Info */}
          <Info 
            nameState={setNameState}
            emailState={setEmailState}
            phoneState={setPhoneState}
            status={infoStatus}
            submitSetter={submitInfoSetter}
          />
          {/* Education */}
          <Education
            schoolState={setSchoolState}
            studyState={setStudyState}
            startDateState={setStartDateState}
            endDateState={setEndDateState}
            status={eduStatus}
            submitSetter={submitEduSetter}
          />
          {/* Experience */}
          <Experience
            companyState={setCompanyState}
            positionState={setPositionState}
            responsibilitiesState={setResponsibilitiesState}
            startJobState={setStartJobState}
            endJobState={setEndJobState}
            status={expStatus}
            submitSetter={submitExpSetter}
          />
        </section>
        <aside>
          {/* CV */}
          <CV
            name={name}
            email={email}
            phone={phone}
            school={school}
            study={study}
            startDate={startDate}
            endDate={endDate}
            company={company}
            position={position}
            responsibilities={responsibilities}
            startJob={startJob}
            endJob={endJob}
          />
        </aside>
      </main>
		</>
	);
}

export default App;
