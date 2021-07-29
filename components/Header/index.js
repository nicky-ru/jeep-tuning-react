import React from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    Flex,
    Container,
    Stack,
    IconButton,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    useOutsideClick,
    Portal,
    Heading,
    Link as ChakraLink,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import { IoMoon, IoSunny } from 'react-icons/io5';
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {SocialIcon} from 'react-social-icons';
import {FaHome} from "react-icons/fa";

const Header = () => {
    const { toggleColorMode } = useColorMode();
    const {onClose, onToggle, isOpen} = useDisclosure();
    const ref = React.useRef();
    const bg = useColorModeValue("dark.500", "light.500");
    const icon = useColorModeValue(<IoMoon size={18} />, <IoSunny size={18} />)
    const router = useRouter();
    useOutsideClick({
        ref: ref,
        handler: () => onClose()
    })

    const email = "misaxa@yandex.ru";
    const tel = "+79108210003";

    return(
        <Box>
            <Flex
                as={'header'}
                minH={16}
                w={"full"}
                boxShadow={'sm'}
                justify={'center'}
                position={'fixed'}
                top="0"
                zIndex={1}
                bg={bg}
                sx={{
                    backdropFilter: 'saturate(180%) blur(5px)',
                }}
            >
                <Container as={Flex} maxW={'container.xl'} align={'center'}>
                    <Flex flex={[1, "auto"]} ml={[-2]} display={["flex", "none"]}>
                        <Menu
                        >
                            <MenuButton
                                ref={ref}
                                as={IconButton}
                                aria-label={'Toggle Navigation'}
                                icon={isOpen ? <CloseIcon w={4} h={4}/> : <HamburgerIcon w={5} h={5} />}
                                onClick={() => {onToggle()}}
                                variant={'ghost'}
                                size={'sm'}
                            />
                            <Portal>
                                <MenuList>
                                    <MenuItem
                                        icon={<SocialIcon url={"//api.whatsapp.com/send?phone=8615651921699"} network={'whatsapp'}/>}
                                        onClick={() => window.location = "//api.whatsapp.com/send?phone=8615651921699"}
                                    >
                                        <a>Написать в Вотсапп</a>
                                    </MenuItem>
                                    <MenuItem
                                        icon={<SocialIcon url={"https://telegram.me/Vezdehod13"} network={'telegram'}/>}
                                        onClick={() => window.location = "https://telegram.me/Vezdehod13"}
                                    >
                                        Написать в Телеграм
                                    </MenuItem>
                                    <MenuItem
                                        icon={<SocialIcon url={"https://vk.com/jeepservice76"} network={'vk'}/>}
                                        onClick={() => window.location = "https://vk.com/jeepservice76"}
                                    >
                                        Группа Вконтакте
                                    </MenuItem>
                                    <MenuItem
                                        icon={<SocialIcon url={"https://www.instagram.com/jeepservice_76/"} network={'instagram'}/>}
                                        onClick={() => window.location = "https://www.instagram.com/jeepservice_76/"}
                                    >
                                        Мы в Инстаграмме
                                    </MenuItem>
                                    {router.pathname !== "/" &&
                                    <MenuItem
                                        icon={<FaHome size={50} style={{fill: "#7289da", padding: 5}}/>}
                                        onClick={() => router.push('/')}
                                    >
                                        На главную
                                    </MenuItem>
                                    }
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Flex>

                    <Flex flex={[1, "auto"]} justify={["center", "start"]}>
                        <Stack direction={'row'} alignItems={'center'} spacing={{ base: 2, sm: 4 }}>
                            <Link href="/" style={{ textDecoration: 'none'}}>
                                <a>
                                    <Heading as={'h1'} fontSize={'xl'} display={["none", null, "block"]}>
                                        JeepService
                                    </Heading>
                                </a>
                            </Link>
                        </Stack>
                    </Flex>



                    <Stack direction={'row'} align={'center'} spacing={2} flex={[1, null, "auto"]} justify={'flex-end'}>
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
                            display={["none", null, "flex"]}
                            ml={10}
                        >
                            <ChakraLink
                                fontSize={"xl"}
                                fontWeight={"medium"}
                                px={2}
                                textDecoration={"none"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location = `tel:${tel}`;
                                }}
                            >
                                {tel}
                            </ChakraLink>
                        </Flex>
                        <IconButton
                            borderRadius="12"
                            aria-label={'Toggle Color Mode'}
                            onClick={toggleColorMode}
                            icon={icon}
                        />
                    </Stack>
                </Container>
            </Flex>
        </Box>
    );
}

export default Header