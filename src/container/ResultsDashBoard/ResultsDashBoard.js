import React, { useEffect, useState } from 'react'
import { setPercaentage } from '../../utilities/genericFunctions'
import ToolBar from '../../component/ToolBar/ToolBar'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StudentResultsModal from '../../component/studentResultsModal/StudentResultsModal'
import StudentResults from '../../component/studentResults/StudentResults'
import { studentsInfo } from '../../constants/StudentsInfo'


const ResultsDashBoard = (props) => {
    const [results, setResults] = useState(studentsInfo)
    const [searchString, setSearchString] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [studentData, setStudentData] = useState({})

    //update student results with gardes and grade color
    const updateResults = () => {
        let updatedData = results.map((student) => {
            return {
                ...student,
                grade: setPercaentage(student.marks).grade,
                color: setPercaentage(student.marks).color

            }
        })

        //Sort based on Grade and  studentnames
        updatedData.sort((a, b) => {
            let u = a.studentName.toLowerCase();
            let v = b.studentName.toLowerCase();
            let x = a.grade.toLowerCase();
            let y = b.grade.toLowerCase();
            if (x === y) {
                if (u < v) { return -1; }
                if (u > v) { return 1; }
                return 0;
            }
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })

        setResults(updatedData)
    }

    useEffect(() => {
        updateResults()
    }, [])

    const searchHandler = (e) => {
        let searchString = e.target.value.trim()
        setSearchString(searchString)
    }


    const selectStudent = (student) => {
        setStudentData(student)
        setShowModal(true)
    }


    let updatedResults = results
    if (searchString !== null && searchString !== "") {
        let storeResults = [...results]
        updatedResults = storeResults.filter((student) => student.studentName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1)
    }

    return (
        <>
            <ToolBar searchHandler={searchHandler} />
            <StudentResults
                results={updatedResults}
                selectStudent={(student) => selectStudent(student)}
            />
            {
                showModal && <StudentResultsModal studentData={studentData} setShowModal={() => setShowModal(false)} />
            }
        </>
    )
}


export default ResultsDashBoard