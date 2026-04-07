import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Login = () => {

    const {loginUser,googleLogin,setUser} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email,password)
  };


const handleGoogleLogin = ()=>{
  googleLogin().then(result =>setUser(result.user))
}





  return (
    <div className="w-[20%] mx-auto min-w-125 border-2 border-red-400 p-2 rounded-xl">
      <form onSubmit={handleLogin}>
        <div>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email here"
            className="input w-full"
          />
        </div>
        <div className="mb-2">
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password here"
            className="input w-full"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn btn-secondary mt-3">Google Login</button>
      </div>
    </div>
  );
};

export default Login;
