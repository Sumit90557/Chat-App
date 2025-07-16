import GenderCheckbox from "./GenderCheckBox"

const SignUp = ()=>{
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/30">
           <h1 className="text-3xl font-semibold text-center text-gray-300">
             Signup <span className="text-green-900">TalkNet</span>
           </h1>
          <form >
            <div>
                <label className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10" />
            </div>
           <div>
             <label className="label p-2">
                    <span className="text-base label-text">UserName</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
           </div>
              <div>
             <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
           </div>
           <div>
             <label className="label p-2">
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm password " className="w-full input input-bordered h-10 mb-2" />
           </div>


           {/* gender check box */}
         <GenderCheckbox/>

         <a className="text-sm hover:underline hover:text-green-900 mt-2 inline-block" href="#">
            Already have an account?
         </a>
         
   <div>
      <button className="btn btn-block btn-sm mt-2">
            Sign Up
        </button>
   </div>

          </form>
        </div>

    </div>
}

export default SignUp