import React from 'react'
import './StudentResultsAgGrid.scss'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnDefs,sideBar } from '../../constants/AgGridinfo'

const showDetails = (student, selectStudent) => {
    if (student.colDef.field === "showDetails") {
        selectStudent(student.data)
    }
}

const StudentResultsAgGrid = ({ results, selectStudent }) => {

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
                defaultColDef={{
                    flex: 1, resizable: true, suppressSizeToFit: true,
                    sortable: true,
   
                }}
                sideBar={sideBar}
            >
            </AgGridReact>
        </div>
    )
}

 export default StudentResultsAgGrid