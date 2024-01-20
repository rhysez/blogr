export default function SignUp() {

    const handleSignUp = () => {
        return "hello"
    }

    return (
        <>
            <form class="signup-form" action="" method="POST">
                <h2 className='signup-title'>Sign Up</h2>

                <label htmlFor="firstname">First name</label>
                <input type="text" name='firstname' class='form-input' />

                <label htmlFor="lasttname">Last name</label>
                <input type="text" name='lastname' class='form-input' />

                <label htmlFor="username">Username</label>
                <input type="text" name='username' class='form-input' />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' class='form-input' />

                <label htmlFor="confirmpassword">Confirm password</label>
                <input type="password" name='confirmpassword' class='form-input' />

                <button class="signup-submit" type="submit">Sign Up</button>
            </form>
        </>
    )
}