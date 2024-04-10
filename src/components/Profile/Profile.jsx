import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Context } from '../../main';
import Loader from '../Loader/Loader';
import "./Profile.css";

const Profile = () => {

  const { isAuthenticated, loading, user } = useContext(Context);
  console.log(isAuthenticated);
  return (
    loading ? <Loader /> :(
      <div>
      <Navbar setSticky={true} />
      <div className='container'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Welcome Back, <a className='name'>{user?.Identification}</a> !</h2>
      <h3>{user?.Email}</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <Footer />
      </div>
    </div>
    )
  );
};

export default Profile
