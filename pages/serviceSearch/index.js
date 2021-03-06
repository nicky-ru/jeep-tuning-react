import Head from 'next/head'
import {Divider, Container} from "@chakra-ui/layout";
import ServiceList from "../../components/Services/serviceList"
import {getAllServicesNames} from "../../lib/services";
import {Input, Stack, useControllableState, Select, Button, InputLeftElement, InputGroup} from "@chakra-ui/react";
import React from "react";
import {ArrowBackIcon, SearchIcon} from "@chakra-ui/icons";
import {getAllUzels} from "../../lib/uzels";
import {useRouter} from "next/router";

export default function Services({services = [], uzels = []}) {
    const [serviceName, setServiceName] = useControllableState({ defaultValue: "" })
    const [uzelId, setUzelId] = useControllableState({defaultValue: "all"})
    const router = useRouter();

    return(
        <>
            <Head>
                <title>Все услуги</title>
                <meta name="description" content="Список всех услуг нашего джипсервиса" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container mt={24} mb={4} maxW={"container.lg"}>
                <Button
                    variant={"link"}
                    my={5}
                    leftIcon={<ArrowBackIcon/>}
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    На главную
                </Button>
                <Divider my={4}/>

                <InputGroup mb={4}>
                    <InputLeftElement
                        pointerEvents="none"
                    >
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        minHeight={10}
                        w={"full"}
                        variant={"filled"}
                        placeholder={"Поиск по услугам"}
                        value={serviceName}
                        onChange={(e) => {
                            setServiceName(e.target.value);
                        }}
                    />
                </InputGroup>

                <Stack isInline>
                    <Select
                        onChange={(e) => setUzelId(e.target.value)}
                        defaultValue={"all"}
                    >
                        <option value={"all"}>--Все узлы--</option>
                        {uzels.map(uzel => (
                            <option key={uzel.id} value={uzel.id}>{uzel.name}</option>
                        ))}
                    </Select>
                </Stack>
                <Divider my={4}/>
                <ServiceList services={services} uzelId={uzelId} serviceName={serviceName} withPrice={true}/>
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
    const services = serviceData.map(service => {return service.params.service;})
    const uzelData = await getAllUzels();
    const uzels = uzelData.map(uzel => {return uzel.params.uzel;})

    return {
        props: {
            services,
            uzels,
        },
        revalidate: 10,
    };
}