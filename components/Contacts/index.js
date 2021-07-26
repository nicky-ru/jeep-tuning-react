import {Container, Heading, Stack, Text, Link as ChackraLink, Center} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/react";
import MapComponent from "./mapComponent";
import React from "react";
import {FaYandex} from "react-icons/fa";

const Contacts = () => {
    const tel1 = "+79108210003"
    const tel2 = "+79038230004"

    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наш адресс</Heading>

            <Stack direction={["column", "row"]} spacing="24px">
                <Center w={{base: "90vw", md: "30vw"}} textAlign={{base: 'center', md: 'left'}}>
                    {/*<Heading size={'md'}>Мы находимся:</Heading>*/}
                    <Text>
                        г. Ярославль <br/>
                        Район ТЦ Вернисаж, Ул Дорожная 7 <br/><br/>

                        <ChackraLink
                            py={'0.5rem'}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location = `tel:${tel1}`;
                            }}
                        >
                            Тел:{" "}{tel1}
                        </ChackraLink>
                        <br/>
                        <ChackraLink
                            py={'0.5rem'}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location = `tel:${tel2}`;
                            }}
                        >
                            Тел:{" "}{tel2}
                        </ChackraLink>
                    </Text>
                </Center>
                <Center w={{base: "90vw", md: "30vw"}}>
                    <Button
                        colorScheme={'red'}
                        leftIcon={<FaYandex />}
                        type={'link'}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location = "https://yandex.ru/maps/-/CCUi4Qu69D";
                        }}
                    >
                        Посмотреть на карте
                    </Button>
                    <MapComponent/>
                </Center>
            </Stack>
        </Container>
    );
}

export default Contacts;