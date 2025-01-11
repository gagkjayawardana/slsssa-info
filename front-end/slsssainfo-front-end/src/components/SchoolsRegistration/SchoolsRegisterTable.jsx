import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addParticipantAction } from '../../redux/school/schoolsSlice';

import { styled } from 'styled-components';

const Schools_Form = styled.div`
  width: 100%;
  min-height: 800px;
  height: fit-content;
  margin: 50px 0 50px 0;
`;

const Schools_Form_Fields = styled.div`
  width: 40%;
  background-color: #f4f4f4;
  border: 1px solid black;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 20px 20px 20px 20px;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Competitor_Details_H2 = styled.h2`
  @media (max-width: 600px) {
    font-size: 15pt;
  }
`;

const Schools_Register_TextFields = styled.div`
  width: 100%;
`;

const Schools_Register_RadioGroups = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: block;
  }
`;

const validationSchema = Yup.object({
  playerName: Yup.string()
    .matches(/^[A-Z\s]+$/, 'Player Name should be in block capital letters')
    .required('Player Name is required'),
  playerBirthday: Yup.string()
    .required('Player Birthday is required')
    .test('is-valid-date', 'Invalid date format. Please use DD-MM-YYYY.', (value) => {
      const dateFormat = /^(\d{2})-(\d{2})-(\d{4})$/;
      if (!value.match(dateFormat)) {
        return false;
      }
      const [day, month, year] = value.split('-');
      const date = new Date(year, month - 1, day);
      return (
        date.getDate() === parseInt(day, 10) &&
        date.getMonth() === parseInt(month, 10) - 1 &&
        date.getFullYear() === parseInt(year, 10)
      );
    })
    .test('is-valid-age', 'Player Age must be between 14 and 21', (value) => {
      if (!value) return false;
      const today = new Date();
      const dob = new Date(value.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$2-$1'));
      const age = today.getFullYear() - dob.getFullYear();
      return age >= 14 && age <= 21;
    })
});

function SchoolsRegisterTable() {
  const formik = useFormik({
    initialValues: {
      playerName: '',
      playerBirthday: '',
      selectedWeapon: 'Rifle',
      gender: 'Men'
    },
    validationSchema
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  const [players, setPlayers] = useState([]);
  const [editPlayerId, setEditPlayerId] = useState(null);

  const addOrUpdatePlayer = () => {
    formik.validateForm().then((formErrors) => {
      if (Object.keys(formErrors).length === 0 && values.playerName && values.playerBirthday) {
        if (editPlayerId !== null) {
          setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
              player.id === editPlayerId
                ? {
                    ...player,
                    name: values.playerName,
                    birthday: values.playerBirthday,
                    weapon: values.selectedWeapon,
                    gender: values.gender
                  }
                : player
            )
          );
          formik.resetForm();
          setEditPlayerId(null);
        } else if (players.length < 10) {
          const newPlayer = {
            id: players.length + 1,
            name: values.playerName,
            birthday: values.playerBirthday,
            weapon: values.selectedWeapon,
            gender: values.gender
          };
          setPlayers([...players, newPlayer]);
          formik.resetForm();
        }
      }
    });
  };

  const editPlayer = (id) => {
    const playerToEdit = players.find((player) => player.id === id);
    if (playerToEdit) {
      formik.setFieldValue('playerName', playerToEdit.name);
      formik.setFieldValue('playerBirthday', playerToEdit.birthday);
      formik.setFieldValue('selectedWeapon', playerToEdit.weapon);
      setEditPlayerId(id);
    }
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
    if (editPlayerId === id) {
      formik.resetForm();
      setEditPlayerId(null);
    }
  };

  const dispatch = useDispatch();

  const confirmParticipantsDetails = () => {
    if (players) {
      dispatch(addParticipantAction(players));
    }
  };

  return (
    <Schools_Form>
      <Competitor_Details_H2>Participant Details Forum</Competitor_Details_H2>
      <Typography variant="body1" gutterBottom>
        Fill below forum with participants details to enroll in the competition.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Schools_Form_Fields>
          <Schools_Register_TextFields>
            <TextField
              label="Participant Name"
              variant="outlined"
              name="playerName"
              fullWidth
              value={values.playerName}
              onChange={handleChange}
              error={touched.playerName && !!errors.playerName}
              helperText={touched.playerName && errors.playerName}
            />
            <TextField
              label="Participant Birthday (DD-MM-YYYY)"
              variant="outlined"
              name="playerBirthday"
              fullWidth
              sx={{ marginTop: '20px' }}
              value={values.playerBirthday}
              onChange={handleChange}
              error={touched.playerBirthday && !!errors.playerBirthday}
              helperText={touched.playerBirthday && errors.playerBirthday}
            />
          </Schools_Register_TextFields>
          <Schools_Register_RadioGroups>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Category</FormLabel>
              <RadioGroup
                row
                name="selectedWeapon"
                value={values.selectedWeapon}
                onChange={handleChange}>
                <FormControlLabel value="Rifle" control={<Radio />} label="Rifle" />
                <FormControlLabel value="Pistol" control={<Radio />} label="Pistol" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Gender</FormLabel>
              <RadioGroup row name="gender" value={values.gender} onChange={handleChange}>
                <FormControlLabel value="Men" control={<Radio />} label="Male" />
                <FormControlLabel value="Women" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Schools_Register_RadioGroups>

          <Button
            sx={{
              backgroundColor: editPlayerId !== null ? '#000000' : '#ff0000',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#ff6666' },
              marginTop: '20px'
            }}
            variant="contained"
            onClick={addOrUpdatePlayer}
            type="submit"
            disabled={players.length >= 10}>
            {editPlayerId !== null ? 'Update Player' : 'Add Player'}
          </Button>
        </Schools_Form_Fields>
        <br />
        <TableContainer sx={{ marginTop: '50px' }} component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#ff0000' }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: '#ffff00' }}>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>{player.id}</TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.birthday}</TableCell>
                  <TableCell>{player.weapon}</TableCell>
                  <TableCell>{player.gender}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => editPlayer(player.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => removePlayer(player.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      <Button
        sx={{
          backgroundColor: '#ff0000',
          textTransform: 'none',
          '&:hover': { backgroundColor: '#ff6666' },
          marginTop: '30px'
        }}
        variant="contained"
        onClick={confirmParticipantsDetails}
        disabled={players.length <= 1}>
        Confirm Participants Details
      </Button>
    </Schools_Form>
  );
}

export default SchoolsRegisterTable;
