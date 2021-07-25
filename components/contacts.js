import {Container, Heading, Stack, Text} from "@chakra-ui/layout";

const Contacts = () => {
    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Контакты</Heading>

            <Stack direction={["column", "row"]} spacing="24px">
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
            </Stack>
        </Container>
    );
}

export default Contacts;