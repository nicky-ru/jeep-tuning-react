import Head from "next/head";
import {Container, Divider} from "@chakra-ui/layout";
import {useRouter} from "next/router";
import {getAllServicesNames} from "../../lib/services";
import {getAllUzels} from "../../lib/uzels";
import {getAllBrands} from "../../lib/brands";
import {getAllModels} from "../../lib/models";
import AppointmentForm from "../../components/Appointment/form";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Breadcrumb, BreadcrumbItem, Button, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

export default function Appointment({uzels = [], services = [], brands = [], models = []}) {
    const router = useRouter();
    const containerW = useBreakpointValue({base: "container.xs", md: "container.lg"})

    return (
        <>
            <Head>
                <title>Запись на услугу</title>
                <meta name="description" content="Страница записи на услугу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container mt={24} mb={4} size={containerW}>
                <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
                    <BreadcrumbItem>
                        <Button
                            variant={"link"}
                            my={5}
                            leftIcon={""}
                            onClick={() => {
                                router.push("/")
                            }}
                        >
                            Главная
                        </Button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Button
                            variant={"link"}
                            my={5}
                            leftIcon={""}
                            onClick={() => {
                                router.push("/serviceSearch")
                            }}
                        >
                            Все услуги
                        </Button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Button
                            variant={"link"}
                            my={5}
                            leftIcon={""}
                            onClick={() => {
                                router.push(`/service/${router.query.serviceId}`)
                            }}
                        >
                            Описание услуги
                        </Button>
                    </BreadcrumbItem>
                </Breadcrumb>
                <AppointmentForm
                    serviceId={router.query.serviceId}
                    uzels={uzels}
                    services={services}
                    brands={brands}
                    models={models}
                />
            </Container>
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
    const serviceData = await getAllServicesNames();
    const uzelsData = await getAllUzels();
    const brandsData = await getAllBrands();
    const modelsData = await getAllModels();

    const services = serviceData.map(service => {return service.params.service;})
    const uzels = uzelsData.map(uzel => {return uzel.params.uzel;})
    const brands = brandsData.map(brand => {return brand.params.brand;})
    const models = modelsData.map(model => {return model.params.model;})

    return {
        props: {
            uzels,
            models,
            brands,
            services,
        },
        revalidate: 10,
    };
}