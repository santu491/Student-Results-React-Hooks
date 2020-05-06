import { useState } from "react"

export const useSearchResults = (results) => {
    const [searchString, setSearchString] = useState(null)

    let getSearchResults = []
    if (searchString !== null && searchString !== "") {
        let storeResults = [...results]
        getSearchResults = storeResults.filter((student) => student.studentName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1)
    }

    return { searchString, setSearchString, getSearchResults }
}