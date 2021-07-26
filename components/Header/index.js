import React from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    Flex,
    Container,
    Stack,
    IconButton,
    useColorModeValue,
    useColorMode,
    Heading,
    Link as ChackraLink,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import { IoMoon, IoSunny } from 'react-icons/io5';
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {SocialIcon} from 'react-social-icons';
import {FaHome} from "react-icons/fa";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    const email = "misaxa@yandex.ru";
    const tel = "+79108210003";

    return(
        <Box>
            <Flex
                as={'header'}
                // pos="fixed"
                // top="0"
                // w={'full'}
                minH={'60px'}
                boxShadow={'sm'}
                zIndex="999"
                justify={'center'}
                css={{
                    backdropFilter: 'saturate(180%) blur(5px)',
                    backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                }}
            >
                <Container as={Flex} maxW={'7xl'} align={'center'}>
                    <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                        <Menu
                        >
                            <MenuButton
                                as={IconButton}
                                aria-label={'Toggle Navigation'}
                                icon={<HamburgerIcon w={5} h={5} />}
                                variant={'ghost'}
                                size={'sm'}
                            />
                            <MenuList>
                                <MenuItem
                                    icon={<SocialIcon url={"//api.whatsapp.com/send?phone=8615651921699"} network={'whatsapp'}/>}
                                >
                                    Написать в Вотсапп
                                </MenuItem>
                                <MenuItem icon={<SocialIcon url={"https://telegram.me/Vezdehod13"} network={'telegram'}/>}
                                >
                                    Написать в Телеграм
                                </MenuItem>
                                <MenuItem icon={<SocialIcon url={"https://vk.com/jeepservice76"} network={'vk'}/>}
                                >
                                    Группа Вконтакте
                                </MenuItem>
                                <MenuItem icon={<SocialIcon url={"https://www.instagram.com/jeepservice_76/"} network={'instagram'}/>}
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
                        </Menu>
                    </Flex>

                    <Flex flex={{ base: 1, md: 'auto' }} justify={{ base: 'center', md: 'start' }}>
                        <Stack direction={'row'} alignItems={'center'} spacing={{ base: 2, sm: 4 }}>
                            <Link href="/" style={{ textDecoration: 'none'}}>
                                <a>
                                    <Heading as={'h1'} fontSize={'xl'} display={{ base: 'none', md: 'block' }}>
                                        JeepService
                                    </Heading>
                                </a>
                            </Link>
                        </Stack>
                    </Flex>



                    <Stack direction={'row'} align={'center'} spacing={2} flex={{ base: 1, md: 'auto' }} justify={'flex-end'}>
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
                            <ChackraLink
                                fontSize={'1.2em'}
                                px={'0.5rem'}
                                textDecoration={"none"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location = `tel:${tel}`;
                                }}
                            >
                                {tel}
                            </ChackraLink>
                        </Flex>
                        <IconButton
                            borderRadius="12"
                            aria-label={'Toggle Color Mode'}
                            onClick={toggleColorMode}
                            icon={colorMode === 'light' ? <IoMoon size={18} /> : <IoSunny size={18} />}
                        />
                    </Stack>
                </Container>
            </Flex>
        </Box>
    );
}

export default Header