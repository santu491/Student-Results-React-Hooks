import React from 'react'
import './StudentResultsAgGrid.scss'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnDefs } from '../../constants/StudentsInfo'

const showDetails = (student, selectStudent) => {
    if (student.colDef.field === "showDetails") {
        selectStudent(student.data)
    }
}

const StudentResults = ({ results, selectStudent }) => {

    return (
        <div
            className="ag-theme-alpine resultTable"
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={results}
                cellFocused={true}
                suppressMovableColumns={false}
                onCellClicked={(student) => { showDetails(student, selectStudent) }}
                defaultColDef={{ flex: 1, resizable: true, suppressSizeToFit: true, }}

            >
            </AgGridReact>
        </div>
    )
}

export default StudentResults