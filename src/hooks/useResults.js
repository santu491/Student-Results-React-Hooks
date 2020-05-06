import { studentsInfo } from '../constants/StudentsInfo';
import { setPercaentage } from '../utilities/genericFunctions'
import { useState, useEffect } from 'react';

//   update student results with gardes and grade color
const updatedResults = (results, setResults) => {
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

export const useResults = () => {
    const [results, setResults] = useState(studentsInfo)

    useEffect(() => {
        updatedResults(results, setResults)
    }, [])

    return [results, setResults]

};

