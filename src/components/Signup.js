import Navbar from "./Navbar";

function Signup() {
	return (
		<div className="container vh-100  mw-100">
			<div className="row ">
				<Navbar />
			</div>
			<div className="row justify-content-center m-4" >
				<h2 className="m-4 text-center">Create Personal Account</h2>

			</div>
			<div className="row justify-content-center " >
				<div className=" row rounded  " style={{ width: '60%' }} >
					<div className="row  my-2 "style={{ width: '80%' }} >

						<label className=" row " htmlFor="email">Email / Phone Number</label>
						<input className="row justify-content-center " type="email" required />

					</div>
					<div className="row my-2  " style={{ width: '80%' }} >
						
						<label className="row " htmlFor="referral id">Referral ID:</label>
						<input type="key" className="row justify-content-center" id="" />
						
					</div>
					<div className="row my-2">
						<p > <span className="text-muted">By creating an account i agree to Hicrypto's </span><span text-dark>Terms of Services <span className="text-muted"> and</span>  Privacy Police.</span> </p>
					</div>

				</div>
				<div className="row m-4 d-4 align-item-center " style={{ width: '40%' }}>
					<button className=" m-1px-4 d-4 bg-warning border rounded align-item-center">Next</button>
				</div>
				<div className=" row justify-content-center text-small text-muted ">
					<p className="text-center">@copy <span className="text-dark">Hicrypto</span>All rights reserved</p>
				</div>
			</div>


		</div>
	)

}
export default Signup;