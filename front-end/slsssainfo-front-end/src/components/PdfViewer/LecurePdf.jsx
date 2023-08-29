import React from 'react';
import Link from '@mui/material/Link';

function LectureViewer({ pdfUrl }) {
  return (
    <div className="lectureLink">
      <Link href={pdfUrl} underline="hover" color="#ff0000" variant="h6">
        Open PDF
      </Link>
    </div>
  );
}

export default LectureViewer;
