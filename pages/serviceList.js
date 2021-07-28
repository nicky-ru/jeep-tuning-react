import Head from 'next/head'
import {Divider, Container} from "@chakra-ui/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceList from "../components/Services/serviceList"
import SearchBar from "../components/searchBar";
import {getAllServices} from "../lib/services";

export async function getStaticProps() {
    const serviceData = await getAllServices();
    const services = serviceData.map(service => {return service.params.service;})

    return {
        props: {
            services,
        },
        revalidate: 15,
    };
}

export default function Services({services = []}) {
    return(
        <>
            <Head>
                <title>Service List</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <Container mt={16} maxW={"container.lg"}>
                <SearchBar/>
                <Divider my={4}/>
                <ServiceList services={services} uzelId={'all'}/>
            </Container>

            <Divider/>
            <Footer/>

        </>
    )
}