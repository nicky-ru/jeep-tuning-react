import {Container, Heading, Stack, Text, Link as ChackraLink, Center, Box} from "@chakra-ui/layout";
import {Button, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {FaYandex} from "react-icons/fa";

const Contacts = () => {
    const bg = useColorModeValue("light.100", 'dark.100');
    const tel1 = "+79108210003"
    const tel2 = "+79038230004"

    return (
        <Container
            id={"contacts-section"}
            maxW={'container.lg'}
            my={4}
        >
            <Heading marginBottom={5}>Наш адресс</Heading>

            <Stack
                direction={["column", "row"]}
                spacing={8}
                bg={bg}
                p={5}
                borderRadius={'md'}
            >
                <Box
                    w={["full", null, "50%"]}
                    textAlign={["center", null, "right"]}
                >
                    <Text>
                        г. Ярославль <br/>
                        Район ТЦ Вернисаж, Ул Дорожная 7 <br/><br/>

                        <ChackraLink
                            py={2}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location = `tel:${tel1}`;
                            }}
                        >
                            Тел:{" "}{tel1}
                        </ChackraLink>
                        <br/>
                        <ChackraLink
                            py={2}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location = `tel:${tel2}`;
                            }}
                        >
                            Тел:{" "}{tel2}
                        </ChackraLink>
                    </Text>
                </Box>
                <Center w={["full", null, "50%"]}>
                    <Button
                        colorScheme={'red'}
                        leftIcon={<FaYandex/>}
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