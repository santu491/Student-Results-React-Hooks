import React, { useEffect, useState } from 'react'
import { setPercaentage } from '../../utilities/genericFunctions'
import ToolBar from '../../component/ToolBar/ToolBar'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StudentResultsModal from '../../component/studentResultsModal/StudentResultsModal'
import StudentResults from '../../component/studentResults/StudentResults'
import StudentResultsAgGrid from '../../component/studentResults/StudentResultsAgGrid'
import {useSearchResults} from '../../hooks/useSearchResults'
import {useResults} from '../../hooks/useResults'


const ResultsDashBoard = (props) => {

    const [results] = useResults()
    const {searchString, setSearchString,getSearchResults}=useSearchResults(results)
    const [showModal, setShowModal] = useState(false)
    const [studentData, setStudentData] = useState({})

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
        updatedResults=getSearchResults
    }

    return (
        <>
            <ToolBar searchHandler={searchHandler} />
            {/* <StudentResults
                results={updatedResults}
                selectStudent={(student) => selectStudent(student)}
            /> */}
             <StudentResultsAgGrid
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