import React, { useState, useEffect } from "react";
import { login } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth);
    console.log(auth)
  const signin = () => {
    dispatch(login({email, password}))
  }

  let navigate = useNavigate();

useEffect(() => {
   if (auth.authenticate){
      return navigate("/task");
   }
},[auth.authenticate]);


  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div>
          <p className="text-left">email</p>
          <input
            className="border-2 rounded py-2 px-10 w-80"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className="border-2 rounded py-2 px-10 w-80"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
            <button className="bg-green-500 px-4 py-2 mt-5" onClick={signin}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
