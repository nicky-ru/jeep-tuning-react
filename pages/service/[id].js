import {Container, Stack, Box, StackDivider, Divider} from "@chakra-ui/layout";
import {Breadcrumb, BreadcrumbItem, Button, useBreakpointValue, Heading} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

import {getAllServicesIds, getServiceData} from "../../lib/services";
import {getUzelData} from "../../lib/uzels";
import Head from "next/head";
import ServiceInfo from "../../components/Services/serviceInfo";
import React from "react";

const Service = ({service={}, uzel={}}) => {
    const router = useRouter();
    const height = useBreakpointValue({base: 20, md: "full"})

    if (router.isFallback) {
        return (
            <Container>
                <Heading>Loading&hellip;</Heading>
            </Container>
        );
    }

    return (
        <>
            <Head>
                <title>{service.name}</title>
                <meta name="description" content={"Описание услуги " + service.name}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Container maxW="container.lg" mt={24} mb={5} minH={'65vh'}>
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
                </Breadcrumb>

                <Stack
                    direction={["column", "row"]}
                    spacing="6"
                    h={"full"}
                    align={"center"}
                    divider={<StackDivider borderColor="gray.200"/>}
                >

                    <ServiceInfo service={service} uzel={uzel}/>
                    <Box>
                        <Button
                            size={"lg"}
                            colorScheme={"orange"}
                            onClick={() => {
                                router.push(
                                    `/appointment?serviceId=${service.id}`
                                )
                            }}
                        >
                            Записаться
                        </Button>
                    </Box>
                </Stack>
            </Container>

            <Divider/>
        </>
    );
}

export default Service

export async function getStaticPaths() {
    const paths = await getAllServicesIds();
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const serviceData = await getServiceData(params.id)
    const uzelData = await getUzelData(serviceData.data.uzelID)
    return {
        props: {
            service: serviceData.data,
            uzel: uzelData.data,
        },
        revalidate: 10,
    }
}