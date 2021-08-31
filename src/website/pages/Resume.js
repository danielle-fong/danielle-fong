import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { PDFViewer } from '@react-pdf/renderer';
import pdf from "./DanielleFongResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume(){
    return (
        <PDFViewer width="1100" height="900" className="pdf" >
            <Document file={pdf} />
        </PDFViewer>    
    )
}
export default Resume;