import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {getServiceById} from "../../redux/actions/services";
import {getUzelList} from "../../redux/actions/uzels";

import {ServiceInfo} from "../../components/Service";

const Service = observer(() => {
    let { slug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServiceById(slug));
    }, []);

    return(
        <>
            <ServiceInfo/>
        </>
    )
})

export default Service;