import React, {Suspense, lazy} from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, HStack, Text} from "@chakra-ui/layout";
const MapComponent = lazy(() => import("./mapComponent"));

const Contacts = observer(() => {
    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Контакты</Heading>

            <HStack>
                <Container>
                    {/*<Suspense fallback={<div>Loading...</div>}><MapComponent/></Suspense>*/}
                    Тут будет карта
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