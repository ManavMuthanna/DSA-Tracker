import '../signup/sign_up.css'
import { useNavigate } from 'react-router-dom';

function Signup(){
	const navigate = useNavigate();
	const handleSignupFormSubmit = (e) => {
	  e.preventDefault();
	  // Your form submission logic here
	  console.log(document.querySelector("#first").value);
	  console.log(document.querySelector("#password").value);
	  // After successful submission, navigate to the '/home' route
	  navigate("/");
	};
    return(
		<div className='signup-body'>
        <div className="signup-main">
            <h1 className='signup-h1'>DSA Tracker</h1>
		    <h3>Sign up</h3>
		    <form onSubmit={handleSignupFormSubmit}>
                <label className='signup-label'>
				Username:
			    </label>
			<input className='signup-input' type="text"
				id="first"
				name="first"
				placeholder="Enter your Username" required/>

                <label className='signup-label'>
				Email:
			    </label>
			<input className='signup-input' type="text"
				id="name"
				name="name"
				placeholder="Enter your email ID" required/>

			<label className='signup-label' for="password">
				Password:
			</label>
			<input className='signup-input' type="password"
				id="password"
				name="password"
				placeholder="Enter your Password" required/>

            <label className='signup-label' for="password2">
				Confirm Password:
			</label>
			<input className='signup-input' type="password"
				id="password2"
				name="password2"
				placeholder="Confirm Password" required/>    

			<div class="signup-wrap">
				<button className='signup-button' type="submit">
					Submit
				</button>
			</div>
		    </form>
	    </div>
		</div>
    );
}

export default Signup