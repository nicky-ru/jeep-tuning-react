// styles and package components
import Head from 'next/head'
import {Divider} from "@chakra-ui/layout";
// custom components
import Jumbotron from "../components/Jumbotron";
import ServiceAccordion from "../components/Services";
import Advantages from "../components/Advantages";
import Brands from "../components/Brands";
import Contacts from "../components/Contacts";
// amplify
import {getAllServices, getAllServicesNames} from "../lib/services";
import {getAllUzels} from "../lib/uzels";
import {getAllAdvantages} from "../lib/advantages";
import {getAllBrands} from "../lib/brands";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Джипcервис Главная</title>
        <meta name="description" content="Сервис внедорожников и кроссоверов c гарантией в городе Ярославль" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Jumbotron services={props.services}/>
        <ServiceAccordion uzels={props.uzels} services={props.services}/>
        <Divider/>
        <Advantages advantages={props.advantages}/>
        <Divider/>
        <Brands brands={props.brands}/>
        <Divider/>
        <Contacts/>
        <Divider/>

    </>
  )
}

export async function getStaticProps(context) {
    if (context.preview) {
        return {
            props: context.previewData
        }
    }
    const uzelsData = await getAllUzels();
    const serviceData = await getAllServicesNames();
    const advantagesData = await getAllAdvantages();
    const brandsData = await getAllBrands();

    const services = serviceData.map(service => {return service.params.service;})
    const uzels = uzelsData.map(uzel => {return uzel.params.uzel;})
    const advantages = advantagesData.map(advantage => {return advantage.params.advantage;})
    const brands = brandsData.map(brand => {return brand.params.brand;})

    return {
        props: {
            uzels,
            advantages,
            brands,
            services,
        },
        revalidate: 10,
    };
}