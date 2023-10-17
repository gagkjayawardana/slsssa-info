import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Input,
  Button
} from '@mui/material';
import {
  getcompetitorAction,
  selectcompetitor,
  updateCompetitorAction
} from '../../redux/competitor/competitorSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000/', {
  transports: ['websocket']
});

function ResultsTable() {
  const competitors = useSelector(selectcompetitor);
  const [searchQuery, setSearchQuery] = useState('');
  const [editableMarks, setEditableMarks] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('competitor_updated', (data) => {
      alert(data);
      dispatch(getcompetitorAction());
    });

    return () => {
      socket.off();
    };
  }, [competitors, socket]);

  const handleMarksChange = (competitorId, newMarks) => {
    const marks = parseInt(newMarks);
    const sharpShooter = '';
    dispatch(updateCompetitorAction({ competitorId, marks, sharpShooter }));
  };

  const startEditingMarks = (competitorId, currentMarks) => {
    setEditableMarks({ ...editableMarks, [competitorId]: currentMarks });
  };

  const stopEditingMarks = (competitorId) => {
    handleMarksChange(competitorId, editableMarks[competitorId]);
    setEditableMarks((prev) => {
      const newEditableMarks = { ...prev };
      delete newEditableMarks[competitorId];
      return newEditableMarks;
    });
  };

  return (
    <div className="judgersTable">
      <Input
        type="text"
        placeholder="Search by Competitor ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TableContainer sx={{ height: '500px', marginTop: '50px' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ff0000' }}>
              <TableCell>Competitor ID</TableCell>
              <TableCell>Competition Name</TableCell>
              <TableCell>School Name</TableCell>
              <TableCell>Participant Name</TableCell>
              <TableCell>Participant Birthday</TableCell>
              <TableCell>Rifle or Pistol</TableCell>
              <TableCell>Men or Women</TableCell>
              <TableCell>Youth or Junior</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competitors
              .filter((competitor) =>
                String(competitor.competitorId).toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((competitor) => (
                <TableRow key={competitor.competitorId}>
                  <TableCell>{competitor.competitorId}</TableCell>
                  <TableCell>{competitor.competitionName}</TableCell>
                  <TableCell>{competitor.schoolName}</TableCell>
                  <TableCell>{competitor.participantName}</TableCell>
                  <TableCell>{competitor.participantBirthday}</TableCell>
                  <TableCell>{competitor.rifleOrPistol}</TableCell>
                  <TableCell>{competitor.menOrWomen}</TableCell>
                  <TableCell>{competitor.youthOrJunior}</TableCell>
                  <TableCell>
                    {editableMarks[competitor.competitorId] !== undefined ? (
                      <input
                        type="number"
                        value={editableMarks[competitor.competitorId] || ''}
                        onChange={(e) =>
                          setEditableMarks({
                            ...editableMarks,
                            [competitor.competitorId]: e.target.value
                          })
                        }
                      />
                    ) : (
                      competitor.marks
                    )}
                  </TableCell>
                  <TableCell>
                    {editableMarks[competitor.competitorId] !== undefined ? (
                      <>
                        <Button
                          sx={{
                            backgroundColor: '#ff0000',
                            '&:hover': { backgroundColor: '#ff6666' },
                            textTransform: 'none'
                          }}
                          onClick={() => stopEditingMarks(competitor.competitorId)}
                          variant="contained">
                          Save
                        </Button>
                        <Button
                          sx={{
                            marginLeft: '1px',
                            backgroundColor: '#000000',
                            '&:hover': { backgroundColor: '#cccccc' },
                            textTransform: 'none'
                          }}
                          onClick={() => stopEditingMarks(competitor.competitorId)}
                          variant="contained">
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button
                        sx={{
                          backgroundColor: '#ff0000',
                          '&:hover': { backgroundColor: '#ff6666' },
                          textTransform: 'none'
                        }}
                        onClick={() => startEditingMarks(competitor.competitorId, competitor.marks)}
                        variant="contained">
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ResultsTable;
