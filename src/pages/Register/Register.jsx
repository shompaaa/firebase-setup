import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Register = () => {

    const {registerUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo,email,password,confirmPassword);
    registerUser(email,password)
  };
  return (
    <div className="w-[20%] mx-auto min-w-125 border-2 border-red-400 p-2 rounded-xl">
      <form onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input type="text" name="name" placeholder="Name here" className="input w-full" />
        </div>
        <div>
          <p>Photo</p>
          <input type="text" name="photo" placeholder="Photo" className="input w-full" />
        </div>
        <div>
          <p>Email</p>
          <input type="email" name="email" placeholder="Email here" className="input w-full" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" name="password" placeholder="Password here" className="input w-full" />
        </div>
        <div className="mb-2">
          <p>Confirm Password</p>
          <input type="password" name="confirmPassword" placeholder="Confirm password here" className="input w-full" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
