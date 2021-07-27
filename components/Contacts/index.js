import {Container, Heading, Stack, Text, Link as ChackraLink, Center} from "@chakra-ui/layout";
import {Button, useColorMode} from "@chakra-ui/react";
import React from "react";
import {FaYandex} from "react-icons/fa";

const Contacts = () => {
    const {colorMode} = useColorMode();
    const tel1 = "+79108210003"
    const tel2 = "+79038230004"

    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наш адресс</Heading>

            <Stack
                direction={["column", "row"]}
                spacing="24px"
                bg={colorMode === "light" ? "light.100" : "dark.100"}
                p={5}
                borderRadius={'md'}
            >
                <Center w={{base: "90vw", md: "30vw"}} textAlign={{base: 'center', md: 'left'}}>
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
                </Center>
            </Stack>
        </Container>
    );
}

export default Contacts;