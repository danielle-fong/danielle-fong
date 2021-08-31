import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';



function Resume(){
    return (
        <div>
            <Document file="DanielleFongResume.pdf" />
        </div>
    )
}

export default Resume;