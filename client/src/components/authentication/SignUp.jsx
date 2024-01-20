import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Nav from '../main/Nav';

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const navigateToHome = () => {
        const target = `/`
        navigate(target, {
            state: {
                userName: firstName
            }
        })
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleCreateAccount = async(e) => {
        e.preventDefault()
    
        try {
          const response = await fetch(`http://localhost:3000/api/sign_up`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
              firstname: firstName,
              lastname: lastName,
              username: userName,
              password: password,
              confirmpassword: confirmPassword
            })
          });
    
          if (response.ok) {
            console.log("Created account successfully")
          } else if (response.status == 400) {
            const errorData = await response.json();
            const errors = errorData.details;
            setErrors(errors.map(error => error.msg))
            console.log(errors)
          } else {
            console.error('Could not create account')
          }
        } catch (err) {
          console.error(err)
        }
    }

    return (
        <>
            <Nav />
            <form className="signup-form" action="" method="POST" onSubmit={handleCreateAccount}>
                <h2 className='signup-title'>Sign Up</h2>

                <label htmlFor="firstname" className='form-label'>First name</label>
                <input type="text" name='firstname' className='form-input' id='firstname' onChange={handleFirstName} />

                <label htmlFor="lastname" className='form-label'>Last name</label>
                <input type="text" name='lastname' className='form-input' id='lastname' onChange={handleLastName} />

                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" name='username' className='form-input' id='username' onChange={handleUserName} />

                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name='password' className='form-input' id='password' onChange={handlePassword} />

                <label htmlFor="confirmpassword" className='form-label'>Confirm password</label>
                <input type="password" name='confirmpassword' className='form-input' id='confirmpassword' onChange={handleConfirmPassword} />

                <button className="signup-submit" type="submit">Sign Up</button>
            </form>
        </>
    )
}