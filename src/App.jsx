import { useState } from 'react'
import Info from "./components/Info";
import CV from './components/CV';
import Education from './components/Education';

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
    } else if (infoStatus == 'submitted') {
      setEdu('edit');
    } else if (infoStatus == 'edit') {
      setEdu('submitted');
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
          />
        </aside>
      </main>
		</>
	);
}

export default App;
