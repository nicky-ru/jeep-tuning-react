import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Input} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {setServiceSearch} from "../../redux/actions/serviceSearch";

const SearchBar = observer(() => {
    const dispatch = useDispatch();
    const [keyWord, setKeyWord] = useState("");

    useEffect(() => {
        dispatch(setServiceSearch(keyWord));
        console.log('dispatch');
    }, [keyWord]);

    const handleChange = () => {
        setKeyWord(document.getElementById('serviceSearchBar').value);
    }

    return(
        <Input placeholder="Поиск по услугам" id={'serviceSearchBar'} value={keyWord} onChange={handleChange}/>
    )
})

export default SearchBar;