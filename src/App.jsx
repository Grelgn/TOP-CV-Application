import { useState } from 'react'
import Info from "./components/Info";
import CV from './components/CV';

function App() {
  const[name, setName] = useState('Name');
  const[email, setEmail] = useState('Email');
  const[phone, setPhone] = useState('Phone');
  const[infoStatus, setInfo] = useState('pending');

  const setNameState = (value) => {
    setName(value);
  }
  const setEmailState = (value) => {
    setEmail(value);
  }
  const setPhoneState = (value) => {
    setPhone(value);
  }
  const submitSetter = () => {
    if (infoStatus == 'pending') {
      setInfo('submitted');
    } else if (infoStatus == 'submitted') {
      setInfo('edit');
    } else if (infoStatus == 'edit') {
      setInfo('submitted');
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
            submitSetter={submitSetter}
          />
          {/* Education */}
          {/* Experience */}
        </section>
        <aside>
          {/* CV */}
          <CV
            name={name}
            email={email}
            phone={phone}
          />
        </aside>
      </main>
		</>
	);
}

export default App;
