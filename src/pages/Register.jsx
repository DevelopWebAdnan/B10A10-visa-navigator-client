import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, photo, email, password);

        // const newUser = { name, email };

        // reset error message
        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage('Password must be 6 characters or longer');
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!regex.test(password)) {
            setErrorMessage('Password must contain at least one Lowercase and at least one Uppercase letter; without a space or gap between 2 words');
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log('User created at fb: ', result.user);

                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, photo, email, createdAt };

                // save user to database

                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            console.log('User created at db: ', data)};
                    })

                event.target.reset();
                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => {
                        setErrorMessage(error.message);
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const handleGoogle = () => {
        // reset error message
        setErrorMessage('');

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className='hero-content flex-col'>
                <h2 className='text-2xl font-bold'>Register</h2>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className='fieldset'>
                            {/* <fieldset className="fieldset border mx-auto"> */}
                            <legend className="fieldset-legend">What is your name?</legend>
                            <input type="text" name='name' className="input" required placeholder="Name" />
                            {/* <p className="label">Optional</p> */}
                            {/* </fieldset> */}

                            <legend className="fieldset-legend">What is your email?</legend>
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" name='email' placeholder="mail@site.com" required />
                            </label>

                            {/* <fieldset className="fieldset mx-auto"> */}
                            <legend className="fieldset-legend">What is your photo-url?</legend>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />
                            {/* <p className="label">Optional</p> */}
                            {/* </fieldset> */}

                            {/* <fieldset className="fieldset mx-auto"> */}

                            {/* <fieldset className="fieldset mx-auto"> */}
                            <legend className="fieldset-legend">What is your password?</legend>
                            {/* <input type="email" className="input" placeholder="Email" /> */}
                            {/* <p className="label">Optional</p> */}
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    placeholder="Password"
                                // minLength="8"
                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                />
                            </label>
                            {/* </fieldset> */}

                            {/* <div className="validator-hint hidden">Enter valid email address</div> */}

                            <input type="submit" value="Submit" className="btn" />

                            <p className="m-4">
                                Already have an account? Please <Link className="text-red-500" to="/login">Login</Link>
                            </p>

                        </form>
                        {
                            errorMessage && <p className="text-red-600">{errorMessage}</p>
                        }
                        {/* Google */}
                        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;