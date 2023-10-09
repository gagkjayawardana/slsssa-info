import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { styled } from 'styled-components';
import { provinces } from '../../utils/provinces';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../redux/user/userSlice';

const Create_School_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding-top: 50px;
`;

const School_Add_Form = styled.div`
  width: 40%;
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

const School_Add_Form_Content = styled.div`
  margin-top: 50px;
`;

function CreateNewSchool() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateSchoolPassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let newPassword = '';

    do {
      newPassword = '';
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
      }
    } while (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(newPassword));

    formik.setFieldValue('schoolPassword', newPassword);
  };

  const validationSchema = Yup.object().shape({
    schoolName: Yup.string().required('School Name is required'),
    schoolProvince: Yup.string().required('Select a Province'),
    schoolEmail: Yup.string().email('Invalid email address').required('School Email is required'),
    schoolPhno: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone number is required'),
    micName: Yup.string().required('MIC Name is required'),
    micPhno: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone number is required'),
    schoolUserName: Yup.string().required('Username is required'),
    schoolPassword: Yup.string().required('Generated Password is required')
  });

  const formik = useFormik({
    initialValues: {
      schoolName: '',
      schoolProvince: '',
      schoolEmail: '',
      schoolPhno: '',
      micName: '',
      micPhno: '',
      schoolUserName: '',
      schoolPassword: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const name = values.schoolName;
      const userName = values.schoolUserName;
      const password = values.schoolPassword;

      dispatch(addUserAction({ name, userName, password, navigate }));
      resetForm();
    }
  });
  return (
    <Create_School_Page>
      <School_Add_Form>
        <Typography variant="h4" sx={{ color: '#ff0000' }} gutterBottom>
          Add New School
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <School_Add_Form_Content>
            <TextField
              name="schoolName"
              label="School Name"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolName}
              helperText={formik.touched.schoolName && formik.errors.schoolName}
              error={formik.touched.schoolName && Boolean(formik.errors.schoolName)}
            />
            <FormControl
              sx={{ marginTop: '20px' }}
              size="small"
              fullWidth
              error={formik.touched.schoolProvince && Boolean(formik.errors.schoolProvince)}>
              <InputLabel htmlFor="province-select">Select Province</InputLabel>
              <Select
                labelId="province-select-label"
                name="schoolProvince"
                value={formik.values.schoolProvince}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                {provinces.map((province, index) => (
                  <MenuItem key={index} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.schoolProvince && formik.errors.schoolProvince && (
                <FormHelperText>{formik.errors.schoolProvince}</FormHelperText>
              )}
            </FormControl>
            <TextField
              name="schoolEmail"
              sx={{ marginTop: '20px' }}
              label="School Email"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolEmail}
              helperText={formik.touched.schoolEmail && formik.errors.schoolEmail}
              error={formik.touched.schoolEmail && Boolean(formik.errors.schoolEmail)}
            />
            <TextField
              name="schoolPhno"
              sx={{ marginTop: '20px' }}
              label="School Phno"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolPhno}
              helperText={formik.touched.schoolPhno && formik.errors.schoolPhno}
              error={formik.touched.schoolPhno && Boolean(formik.errors.schoolPhno)}
            />
            <TextField
              name="micName"
              sx={{ marginTop: '20px' }}
              label="Master In Charge (MIC)"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.micName}
              helperText={formik.touched.micName && formik.errors.micName}
              error={formik.touched.micName && Boolean(formik.errors.micName)}
            />
            <TextField
              name="micPhno"
              sx={{ marginTop: '20px' }}
              label="MIC Phno"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.micPhno}
              helperText={formik.touched.micPhno && formik.errors.micPhno}
              error={formik.touched.micPhno && Boolean(formik.errors.micPhno)}
            />
            <TextField
              name="schoolUserName"
              sx={{ marginTop: '20px' }}
              label="UserName"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolUserName}
              helperText={formik.touched.schoolUserName && formik.errors.schoolUserName}
              error={formik.touched.schoolUserName && Boolean(formik.errors.schoolUserName)}
            />
            <Button
              sx={{
                marginTop: '20px',
                backgroundColor: '#000000',
                '&:hover': { backgroundColor: '#cccccc' }
              }}
              variant="contained"
              onClick={generateSchoolPassword}>
              Generate Password
            </Button>
            {formik.values.schoolPassword && (
              <TextField
                name="schoolPassword"
                sx={{ marginTop: '20px' }}
                label="Generated Password"
                value={formik.values.schoolPassword}
                size="small"
                fullWidth
                readOnly
              />
            )}
          </School_Add_Form_Content>
          <Button
            sx={{
              marginTop: '45px',
              backgroundColor: '#ff0000',
              '&:hover': { backgroundColor: '#ff6666' },
              textTransform: 'none'
            }}
            type="submit"
            variant="contained"
            fullWidth>
            Submit School Information
          </Button>
        </form>
      </School_Add_Form>
    </Create_School_Page>
  );
}

export default CreateNewSchool;
