import React from 'react';
import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { eventType } from '../../utils/eventType';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCompetitionAction } from '../../redux/competition/competitionSlice';

const Create_Event_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding-top: 50px;
`;

const Create_Event_Form = styled.div`
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

const Create_Event_Content = styled.div`
  margin-top: 50px;
`;

function CreateEvent() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    competitionName: Yup.string().required('Competition Name is required'),
    competitionType: Yup.string().required('Select an Event Type'),
    competitionDate: Yup.string()
      .required('Date is required')
      .matches(/^\d{2}-\d{2}-\d{4}$/, 'Date must be in DD-MM-YYYY format'),
    competitionStart: Yup.string()
      .required('Start Time is required')
      .matches(
        /^(0[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/,
        'Start Time must be in HH:MM AM/PM format'
      ),
    competitionEnd: Yup.string()
      .required('End Time is required')
      .matches(/^(0[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/, 'End Time must be in HH:MM AM/PM format'),
    competitionVenue: Yup.string().required('Venue is required'),
    competitionDescription: Yup.string().required('Description is required')
  });

  const formik = useFormik({
    initialValues: {
      competitionName: '',
      competitionType: '',
      competitionDate: '',
      competitionStart: '',
      competitionEnd: '',
      competitionVenue: '',
      competitionDescription: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const dateOfCompetition = new Date(values.competitionDate);
      const formattedCompetitionDate = dateOfCompetition.toISOString().split('T')[0];

      console.log(values);
      const competitionName = values.competitionName;
      const competitionType = values.competitionType;
      const competitionDate = formattedCompetitionDate;
      const competitionStart = values.competitionStart;
      const competitionEnd = values.competitionEnd;
      const competitionVenue = values.competitionVenue;
      const competitionDescription = values.competitionDescription;

      dispatch(
        addCompetitionAction({
          competitionName,
          competitionType,
          competitionDate,
          competitionStart,
          competitionEnd,
          competitionVenue,
          competitionDescription
        })
      );
      resetForm();
    }
  });
  return (
    <Create_Event_Page>
      <Create_Event_Form>
        <Typography variant="h4" sx={{ color: '#ff0000' }} gutterBottom>
          Create Competition
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Create_Event_Content>
            <TextField
              name="competitionName"
              label="Comperition Name"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionName}
              helperText={formik.touched.competitionName && formik.errors.competitionName}
              error={formik.touched.competitionName && Boolean(formik.errors.competitionName)}
            />
            <FormControl
              sx={{ marginTop: '20px' }}
              size="small"
              fullWidth
              error={formik.touched.competitionType && Boolean(formik.errors.competitionType)}>
              <InputLabel htmlFor="province-select">Select Event Type</InputLabel>
              <Select
                name="competitionType"
                value={formik.values.competitionType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                {eventType.map((competition, index) => (
                  <MenuItem key={index} value={competition}>
                    {competition}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.competitionType && formik.errors.competitionType && (
                <FormHelperText>{formik.errors.competitionType}</FormHelperText>
              )}
            </FormControl>
            <TextField
              name="competitionDate"
              sx={{ marginTop: '20px' }}
              label="Date (DD-MM-YYYY)"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionDate}
              helperText={formik.touched.competitionDate && formik.errors.competitionDate}
              error={formik.touched.competitionDate && Boolean(formik.errors.competitionDate)}
            />
            <TextField
              name="competitionStart"
              sx={{ marginTop: '20px' }}
              label="Start Time (09:00 AM)"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionStart}
              helperText={formik.touched.competitionStart && formik.errors.competitionStart}
              error={formik.touched.competitionStart && Boolean(formik.errors.competitionStart)}
            />
            <TextField
              name="competitionEnd"
              sx={{ marginTop: '20px' }}
              label="End Time (03:00 PM)"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionEnd}
              helperText={formik.touched.competitionEnd && formik.errors.competitionEnd}
              error={formik.touched.competitionEnd && Boolean(formik.errors.competitionEnd)}
            />
            <TextField
              name="competitionVenue"
              sx={{ marginTop: '20px' }}
              label="Venue"
              size="small"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionVenue}
              helperText={formik.touched.competitionVenue && formik.errors.competitionVenue}
              error={formik.touched.competitionVenue && Boolean(formik.errors.competitionVenue)}
            />
            <TextField
              name="competitionDescription"
              sx={{ marginTop: '20px' }}
              label="Description"
              multiline
              rows={4}
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.competitionDescription}
              helperText={
                formik.touched.competitionDescription && formik.errors.competitionDescription
              }
              error={
                formik.touched.competitionDescription &&
                Boolean(formik.errors.competitionDescription)
              }
            />
          </Create_Event_Content>
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
            Create New Event
          </Button>
        </form>
      </Create_Event_Form>
    </Create_Event_Page>
  );
}

export default CreateEvent;
