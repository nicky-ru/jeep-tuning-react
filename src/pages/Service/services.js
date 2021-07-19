import React, {useEffect, Suspense, lazy} from "react";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import {Divider, Container} from "@chakra-ui/layout";
import {listServices} from "../../redux/actions/services"

const SearchBar = lazy(() => import("../../components/Service/searchBar"));
const ServiceList = lazy(() => import("../../components/Service/serviceSearchList"));

const Services = observer(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listServices());
    }, []);

    return(
        <Container maxW={"container.lg"} mt={'1rem'}>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchBar/>
                <Divider my={"1rem"}/>
                <ServiceList/>
            </Suspense>
        </Container>
    )
})

export default Services;