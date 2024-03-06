import '../screens/sign_up.css'

function Signup(){
    return(
        <div className="main">
            <h1>DSA Tracker</h1>
		    <h3>Sign up</h3>
		    <form>
                <label>
				Username:
			    </label>
			<input type="text"
				id="first"
				name="first"
				placeholder="Enter your Username" required/>

                <label>
				Full Name:
			    </label>
			<input type="text"
				id="name"
				name="name"
				placeholder="Enter your name" required/>

			<label for="password">
				Password:
			</label>
			<input type="password"
				id="password"
				name="password"
				placeholder="Enter your Password" required/>

            <label for="password2">
				Confirm Password:
			</label>
			<input type="password2"
				id="password2"
				name="password2"
				placeholder="Confirm Password" required/>    

			<div class="wrap">
				<button type="submit"
						onclick="solve()">
					Submit
				</button>
			</div>
		    </form>
	    </div>
    );
}

export default Signup