import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useToast, Heading, Stack, Box, VStack, Button, Text} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import Link from "next/link";

export default function Layout({ children }) {
    const router = useRouter()
    const toast = useToast()
    const id = "test-toast"
    const toastIdRef = React.useRef()

    function close() {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current)
        }
    }

    function agree() {
        localStorage.setItem("cookieBannerDisplayed", "true");
        close();
    }

    useEffect(() => {
        setTimeout(() => {
            if (!toast.isActive(id) && !localStorage.getItem("cookieBannerDisplayed")) {
                toastIdRef.current = toast({
                    id,
                    render: () => (
                        <Box bg={'orange'} p={3} borderRadius={"md"}>
                            <VStack align={"stretch"}>
                                <Stack isInline align={'center'} justify={'space-between'}>
                                    <Heading size={"sm"}>Политика конфиденциальности и файлы Cookie</Heading>
                                    <Button
                                        colorScheme={'white'}
                                        variant={'ghost'}
                                        size={'sm'}
                                        onClick={agree}
                                    >
                                        <CloseIcon/>
                                    </Button>
                                </Stack>
                                <Box px={3}>
                                    <Text>
                                        Продолжая просмотр настоящего сайта, Вы соглашаетесь с
                                        <Link href={'/privacyPolicy'}> политикой конфиденциальности</Link>, использованием
                                        <Link href={'/privacyPolicy'}> файлов Cookie</Link> и иных
                                        методов, средств и инструментов интернет-статистики и настройки, применяемых на сайте для
                                        повышения удобства использования сайта, а также, в определенных случаях, для продвижения работ
                                        и услуг «Джипсервис в Ярославле», предоставления информации о предстоящих мероприятиях.
                                    </Text>
                                </Box>
                                <Stack isInline align={'center'} justify={'space-between'}>
                                    <Button
                                        colorScheme={'white'}
                                        variant={'ghost'}
                                        size={'sm'}
                                        onClick={() => {
                                            router.push(
                                                '/privacyPolicy'
                                            )
                                        }}
                                    >
                                        Подробнее
                                    </Button>

                                    <Button colorScheme={'orange'} size={'sm'} onClick={agree}>Продолжить</Button>
                                </Stack>
                            </VStack>
                        </Box>
                    ),
                    duration: null,
                });
            }
        }, 2000)
    })

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}