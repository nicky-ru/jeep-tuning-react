import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, HStack, AspectRatio, Text, Box} from "@chakra-ui/layout";

const Contacts = observer(() => {
    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Контакты</Heading>

            <HStack>
                <Container>
                    <Box>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                title={'Джип сервис'}
                                src="https://yandex.ru/map-widget/v1/-/CCUe7SAZlB?lang=ru_RU"
                                width="560" height="400"
                                allowFullScreen
                                alt={'Джип сервис на карте'}
                            />
                        </AspectRatio>
                    </Box>
                </Container>
                <Container>
                    <Heading size={'md'}>Мы находимся:</Heading>
                    <Text>
                        г. Ярославль <br/>
                        Район ТЦ Вернисаж, Ул Дорожная 7 <br/>
                        тел 89108210003 WhatsApp/Viber <br/>
                        тел 89038230004
                    </Text>
                </Container>
            </HStack>
        </Container>
    );
})

export default Contacts;