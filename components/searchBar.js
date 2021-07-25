import React, {useState} from "react";
import {Input} from "@chakra-ui/react";

const SearchBar = () => {
    const [keyWord, setKeyWord] = useState("");

    const handleChange = () => {
        setKeyWord(document.getElementById('serviceSearchBar').value);
    }

    return(
        <Input placeholder="Поиск по услугам" id={'serviceSearchBar'} value={keyWord} onChange={handleChange}/>
    )
}

export default SearchBar;