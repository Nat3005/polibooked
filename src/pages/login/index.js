import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginFormContainer,
  LoginImage,
  LoginImageContainer,
  LogoImage,
} from './LoginElements';
import fullScreenImage from '../../images/homepage_full_screen.svg';
import logoVertical from '../../images/logo vertical.svg';
import { PrimaryButton } from '../../components/buttons/ButtonElements';
import { UserAuth } from '../../context/UserContext';

function LoginPage() {
  const { user, googleLogIn } = UserAuth();
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await googleLogIn();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LogoImage src={logoVertical} />
        <PrimaryButton size="big" variant="yellowAccent" onClick={handleLogIn}>
          Login with PWR Google account
        </PrimaryButton>
      </LoginFormContainer>
      <LoginImageContainer>
        <LoginImage src={fullScreenImage} />
      </LoginImageContainer>
    </LoginContainer>
  );
}

export default LoginPage;
