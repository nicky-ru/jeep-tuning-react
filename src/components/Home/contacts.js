import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, HStack, AspectRatio, Text} from "@chakra-ui/layout";

export const Contacts = observer(() => {
    return(
        <Container
            maxW={'container.lg'}
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Контакты</Heading>

            <HStack>
                <Container>
                    <Heading size={'lg'}>
                        Мы на карте
                    </Heading>
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                            alt="demo"
                        />
                    </AspectRatio>
                </Container>
                <Container>
                    <Heading size={'md'}>Адрес</Heading>
                    <Text>Д.Телегино 1А</Text>
                </Container>
            </HStack>
        </Container>
    );
})