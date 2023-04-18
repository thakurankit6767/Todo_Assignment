import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  //register function
  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post("http://localhost:4000/Register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
    return (
      <>
        <div >
          <div >
            Create a new account
          </div>
          <span >
            Already have an account ?
            <a
              href="#"
              target="_blank"
             
            >
              Sign in
            </a>
          </span>
          <div class="p-6 mt-8">
            <form action="#">
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-pseudo"
                   
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="FullName"
                  />
                </div>
              </div>
              <div class="flex gap-4 mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-first-name"
                    
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="password"
                    id="create-account-email"
                   
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
              </div>
              <div class="flex w-full my-4">
                <button
                  type="submit"
                 
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
};
export default Register;
