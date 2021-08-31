import React from 'react';
import { Document } from 'react-pdf'


function Resume(){
    return (
        <>
            <Document file="DanielleFongResume.pdf" />
        </>
    )
}

export default Resume;