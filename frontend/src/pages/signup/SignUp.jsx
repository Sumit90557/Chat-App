import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckBox"
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = ()=>{
   const [inputs , setinputs] = useState({
    fullName :'' , 
    username :'' , 
    password : '' ,
    confirmPassword : '' , 
    gender : '' 
   });

 const {loading , signup} = useSignup();   

const handleCheckBoxChange =(gender)=>{
    setinputs({...inputs , gender}) ; 
}

const handlesubmit =async (e) =>{
    e.preventDefault() ; 
   await signup(inputs) ; 
}


    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/30">
           <h1 className="text-3xl font-semibold text-center text-gray-300">
             Signup <span className="text-green-900">TalkNet</span>
           </h1>
          <form onSubmit={handlesubmit}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10" 
                value={inputs.fullName}
                onChange={(e)=>setinputs({...inputs , fullName :e.target.value})}
                />
            </div>
           <div>
             <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" 
                value={inputs.username}
                 onChange={(e)=>setinputs({...inputs , username :e.target.value})}
                />
           </div>
              <div>
             <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" 
                value={inputs.password}
                onChange={(e)=>setinputs({...inputs , password :e.target.value})}
                />
           </div>
           <div>
             <label className="label p-2">
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm password " className="w-full input input-bordered h-10 mb-2" 
                value={inputs.confirmPassword}
                    onChange={(e)=>setinputs({...inputs , confirmPassword :e.target.value})}
                />
           </div>


           {/* gender check box */}
         <GenderCheckbox onCheckboxChange = {handleCheckBoxChange} selectedGender = {inputs.gender}/>

         <Link to='/login' className="text-sm hover:underline hover:text-green-900 mt-2 inline-block" >
            Already have an account?
         </Link>
         
   <div>
      <button className="btn btn-block btn-sm mt-2" 
        disabled={loading}>
        {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
           
        </button>
   </div>

          </form>
        </div>

    </div>
}

export default SignUp