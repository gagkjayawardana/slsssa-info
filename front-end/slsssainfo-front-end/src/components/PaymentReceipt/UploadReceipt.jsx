import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { addPaymentAction } from '../../redux/school/schoolsSlice';

const Upload_Payment_h2 = styled.h2`
  @media (max-width: 600px) {
    font-size: 15pt;
  }
`;

const Payment_Upload_Link = styled.div`
  margin-top: 30px;
`;

function UploadReceipt() {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileData = {
        name: selectedFile.name,
        type: selectedFile.type,
        size: selectedFile.size,
        lastModified: selectedFile.lastModified,
        lastModifiedDate: selectedFile.lastModifiedDate
      };
      dispatch(addPaymentAction(fileData));
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="uploadPayement">
      <Upload_Payment_h2>Upload Your Payment Receipt</Upload_Payment_h2>
      <Typography variant="body1" gutterBottom>
        Account Name: Sri Lanka Schools Shooting Sports Association
        <br />
        Bank: Bank of Ceylon (BOC)
        <br />
        Branch: Maradana
        <br />
        Account Number: 72937043
      </Typography>
      <Payment_Upload_Link>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <Button
            sx={{ color: 'red' }}
            variant="outlined"
            component="span"
            startIcon={<CloudUploadIcon />}>
            Select Payment Receipt
          </Button>
        </label>
        <Typography variant="subtitle1" gutterBottom>
          {selectedFile ? `Selected File: ${selectedFile.name}` : 'No file selected'}
        </Typography>
        <Button
          sx={{
            textTransform: 'none',
            marginTop: '10px',
            backgroundColor: '#000000'
          }}
          variant="contained"
          onClick={handleUpload}
          disabled={!selectedFile}>
          Upload
        </Button>
      </Payment_Upload_Link>
    </div>
  );
}

export default UploadReceipt;
