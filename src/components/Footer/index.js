import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Center} from "@chakra-ui/layout";
import {Button, Flex, Link, Stack} from "@chakra-ui/react";
import {SocialIcon} from "react-social-icons";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";

export const Footer = observer(() => {
    const email = "misaxa@yandex.ru";
    const tel = "+79108210003";

    return(
        <Container py={'50px'}>
            <Stack direction={'row'} align={'center'} spacing={2} flex={{ base: 1, md: 'auto' }} justify={'flex-end'}>
                <SocialIcon url={"//api.whatsapp.com/send?phone=8615651921699"} network={'whatsapp'}/>
                <SocialIcon url={"https://telegram.me/Vezdehod13"} network={'telegram'}/>
                <SocialIcon url={"https://vk.com/jeepservice76"} network={'vk'}/>
                <SocialIcon url={"https://vk.com/jeepservice76"} network={'instagram'}/>
                <Button
                    leftIcon={<EmailIcon />}
                    variant="solid"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location = `mailto:${email}`;
                    }}
                >
                    Email
                </Button>
                <Button
                    rightIcon={<PhoneIcon />}
                    variant="outline"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location = `tel:${tel}`;
                    }}
                >
                    Позвонить
                </Button>
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    ml={10}
                >
                    <Link
                        fontSize={'1.2em'}
                        px={'0.5rem'}
                        textDecoration={"none"}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location = `tel:${tel}`;
                        }}
                    >
                        {tel}
                    </Link>
                </Flex>
            </Stack>
            <Center>2021 Все права защищены</Center>
        </Container>
    )
})