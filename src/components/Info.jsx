import { useState } from "react";

function Info({nameState, emailState, phoneState, status, submitSetter}) {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        nameState(name);
        emailState(email);
        phoneState(phone);
        submitSetter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>General Information</legend>
            {(status == 'pending' || status == 'edit') && 
                <>
                    <label htmlFor="name">Full Name</label>
                    <input key="name" type="text" name="name" id="name" value={name} required onChange={handleNameChange} />
                    <label htmlFor="email">E-Mail</label>
                    <input key="email" type="email" name="email" id="email" value={email} required onChange={handleEmailChange} />
                    <label htmlFor="phone">Phone Number</label>
                    <input key="phone" type="number" name="phone" id="phone" value={phone} required onChange={handlePhoneChange} />
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

export default Info;