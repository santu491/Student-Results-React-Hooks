export const columnDefs = [
    {
        headerName: "Grade", field: "grade", sortable: true, filter: true, align: 'center', maxWidth: 170,
        cellStyle: (params) => gradeStyle(params),
    },
    { headerName: "Student Name", field: "studentName", sortable: true, filter: true, },
    { headerName: "Teacher Name", field: "classTeacher", sortable: true, filter: true, },
    { headerName: "Branch", field: "branchName", sortable: true, filter: true, maxWidth: 170, },
    {
        headerName: "", field: "showDetails", maxWidth: 150, sortable: false, suppressMovable: true,
        cellRenderer: () => {
            return '<span><i class="fa fa-angle-right fa-lg"></i> </span>'
        },
        cellStyle: {
            color: "red",
            textAlign: "center",
            cursor: "pointer",
        },
    },

]

export const sideBar = {
    toolPanels: [
        {
            id: 'columns',
            labelDefault: 'Columns',
            labelKey: 'columns',
            iconKey: 'columns',
            toolPanel: 'agColumnsToolPanel',
            toolPanelParams: {
                suppressRowGroups: true,
                suppressValues: true,
                suppressPivots: true,
                suppressPivotMode: true,
                suppressSideButtons: true,
                suppressColumnFilter: true,
                suppressColumnSelectAll: true,
                suppressColumnExpandAll: true,
            },
        },
    ],
}

export const defaultColDef={
    flex: 1, 
    resizable: true,
     suppressSizeToFit: true,
    sortable: true,
}


export const gradeStyle = (params) => {
    return {
        color: params.data.color,
        fontSize: 20,
        paddingLeft: "40px",
        flex: 1,
        fontWeight: "bold",


    }
}