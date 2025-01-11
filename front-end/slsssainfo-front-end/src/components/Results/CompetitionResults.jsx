import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function CompetitionResultsTable({ competitorsDetails }) {
  return (
    <div className="competitionResults">
      <TableContainer sx={{ height: '375px' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ff0000' }}>
              <TableCell>Place</TableCell>
              <TableCell>Competitor Id</TableCell>
              <TableCell>School Name</TableCell>
              <TableCell>Participant Name</TableCell>
              <TableCell>Participant Birthday</TableCell>
              <TableCell>Rifle Or Pistol</TableCell>
              <TableCell>Men Or Women</TableCell>
              <TableCell>youth Or Junior</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>SharpShooter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#ffff00' }}>
            {competitorsDetails.map((competitor, index) => (
              <TableRow key={competitor.competitorId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{competitor.competitorId}</TableCell>
                <TableCell>{competitor.schoolName}</TableCell>
                <TableCell>{competitor.participantName}</TableCell>
                <TableCell>{competitor.participantBirthday}</TableCell>
                <TableCell>{competitor.rifleOrPistol}</TableCell>
                <TableCell>{competitor.menOrWomen}</TableCell>
                <TableCell>{competitor.youthOrJunior}</TableCell>
                <TableCell>{competitor.marks}</TableCell>
                <TableCell
                  sx={{ backgroundColor: competitor.sharpShooter === 'SharpShooter' && '#ff0000' }}>
                  {competitor.sharpShooter}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompetitionResultsTable;
