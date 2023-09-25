import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/user/userSlice';

const Login_Page = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
`;

const Login_Form = styled.div`
  width: 35%;
  min-height: 500px;
  height: fit-content;
  background-color: #f0f5f5;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Login_Form_Content = styled.div``;

const Login_Form_Action = styled.div`
  margin-top: 50px;
`;

const Log_Err_Msg = styled.span`
  color: #cc0000;
`;

function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate('/');
  };

  const initialValues = {
    userName: '',
    password: ''
  };
  const validationSchema = yup.object().shape({
    userName: yup.string().required('Required'),
    password: yup.string().required('Required')
  });
  const onSubmit = (data) => {
    const userName = data.userName;
    const password = data.password;

    dispatch(loginUserAction({ userName, password, navigate }));
  };
  return (
    <Login_Page>
      <Login_Form>
        <Typography variant="h4" sx={{ color: '#ff0000' }} gutterBottom>
          Login
        </Typography>
        <Typography variant="h7" gutterBottom>
          Welcome to <b>the SLSSSA</b>
        </Typography>
        <Login_Form_Content>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
              <Field
                as={TextField}
                name="userName"
                sx={{ marginTop: '40px' }}
                label="User Name"
                variant="outlined"
                fullWidth
                helperText={
                  <ErrorMessage
                    name="userName"
                    render={(msg) => <Log_Err_Msg>{msg}</Log_Err_Msg>}
                  />
                }
              />
              <Field
                as={TextField}
                name="password"
                sx={{ marginTop: '40px' }}
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                helperText={
                  <ErrorMessage
                    name="password"
                    render={(msg) => <Log_Err_Msg>{msg}</Log_Err_Msg>}
                  />
                }
              />
              <Button
                sx={{
                  marginTop: '45px',
                  backgroundColor: '#000000',
                  '&:hover': { backgroundColor: '#cccccc' }
                }}
                variant="contained"
                type="submit"
                fullWidth>
                login
              </Button>
            </Form>
          </Formik>
        </Login_Form_Content>
        <Login_Form_Action>
          <Button
            sx={{ color: '#000000', textTransform: 'none' }}
            variant="text"
            onClick={NavigateToHome}>
            back
          </Button>
        </Login_Form_Action>
      </Login_Form>
    </Login_Page>
  );
}

export default UserLogin;
