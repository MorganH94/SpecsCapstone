import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import UserProfile from './UserProfile';

const Auth = () => {
  return (
    <div>
      <h1>Authentication</h1>
      <SignUpForm />
      <SignInForm />
      <UserProfile />
    </div>
  );
};

export default Auth;