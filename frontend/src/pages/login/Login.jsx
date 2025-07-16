const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/30">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Login
            <span className="text-green-900"> TalkNet</span>
        </h1>
        <form >
         <div>
            <label className="label p-2">
                <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"/>
         </div>
          <div>
   <label className="label p-2">
                <span className="text-base label-text">Password</span>
            </label>
              <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
    </div>
    <a href="#" className="text-sm hover:underline hover:text-green-900 mt-2 inline-block">
        {"Don't"} have an account ?
    </a>
    <div>
        <button className="btn btn-block btn-sm mt-2">
            Login
        </button>
    </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
