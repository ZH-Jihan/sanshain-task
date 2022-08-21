import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Token from '../Hooks/Token';
import Loading from '../Shared/Loading';
import SocileLogin from '../Shared/SocileLogin';

const Registar = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");
  const navigate = useNavigate();
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = Token(user)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const confPassword = confPasswordRef.current.value;
    // if (password !== confPassword) {
    //   return toast.error("Password did not matched");
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    if(token){
      navigate('/');
    }
    
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (error || updateError) {
    toast.error(error?.message)
    }
    return (
<section class=" bg-blueGray-50">
<div class="w-full lg:w-6/12 px-4 mx-auto pt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
    
    <div class="rounded-t mb-0 px-6 py-6">
    <div class="flex-auto px-4 lg:px-10">
    <div class="text-center mb-3">
        <h6 class="text-blueGray-500 text-3xl font-bold">
          Sign up with
        </h6>
      </div>
      <form onSubmit={handleRegister}>
        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password"> Name</label>
          <input type="text" name="name" id="" placeholder="Your Name" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
        </div>

        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Email</label>
          <input ref={emailRef}
          type="email"
          name="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" required/>
        </div>

        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Password</label>
          <input ref={passwordRef}
          type="password"
          name="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" required/>
        </div>

        <div className='pb-4'>
          <label class="inline-flex items-center cursor-pointer">
            <input onClick={() => setAgree(!agree)} id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
            <span class="ml-2 text-sm font-semibold text-blueGray-600">
              I agree with the
               <a href="javascript:void(0)" class="text-pink-500">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
        <span class="ml-2"
            >You have an account?
            <Link
              to='/login'
              class="text-xs ml-2 text-blue-500 font-semibold"
              >Login here</Link>
              </span>
        <div class="text-center mt-6">
          <button disabled={!agree} class="btn text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type='submit'>
            Create Account
          </button>
        </div>
      </form>
    </div>
    <div class="divider">OR</div>
      <SocileLogin></SocileLogin>
    </div>
  </div>
</div>
</section>
    );
};

export default Registar;