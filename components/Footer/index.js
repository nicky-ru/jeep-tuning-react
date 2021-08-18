import {Container, Center} from "@chakra-ui/layout";
import {Stack} from "@chakra-ui/react";
import {SocialIcon} from "react-social-icons";
import Link from "next/link";

const Footer = () => {

    return(
        <Container py={12} id={"footer"}>
            <Stack direction={'row'} align={'center'} spacing={2} flex={[1, null, 'auto']} justify={'center'} mb={5}>
                <SocialIcon url={"//api.whatsapp.com/send?phone=8615651921699"} network={'whatsapp'}/>
                <SocialIcon url={"https://telegram.me/Vezdehod13"} network={'telegram'}/>
                <SocialIcon url={"https://vk.com/jeepservice76"} network={'vk'}/>
                <SocialIcon url={"https://www.instagram.com/jeepservice_76/"} network={'instagram'}/>
            </Stack>

            <Center>2021 Все права защищены</Center>
            <Center><Link href={'/privacyPolicy'}>Политика конфиденциальности</Link></Center>
        </Container>
    )
}

export default Footer