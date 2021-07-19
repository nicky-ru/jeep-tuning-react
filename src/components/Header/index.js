import React from 'react'
import { observer } from 'mobx-react-lite';
import { Box, Flex, Container, Stack, useDisclosure, IconButton, useColorModeValue, useColorMode, Heading, Text, Link, Button } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {Link as ReachLink} from 'react-router-dom';
import { IoMoon, IoSunny } from 'react-icons/io5';
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {SocialIcon} from 'react-social-icons';

export const Header = observer(() => {
    const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

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
                    {/*<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>*/}
                    {/*    <IconButton onClick={onToggle} icon={isMobileNavOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} size={'sm'} aria-label={'Toggle Navigation'} />*/}
                    {/*</Flex>*/}

                    <Flex flex={{ base: 1, md: 'auto' }} justify={{ base: 'center', md: 'start' }}>
                        <Stack as={'a'} direction={'row'} alignItems={'center'} spacing={{ base: 2, sm: 4 }}>
                            <Link as={ReachLink} to={"/"} style={{ textDecoration: 'none'}}>
                                <Heading as={'h1'} fontSize={'xl'} display={{ base: 'none', md: 'block' }}>
                                    JeepService
                                </Heading>
                            </Link>
                        </Stack>
                    </Flex>



                    <Stack direction={'row'} align={'center'} spacing={2} flex={{ base: 1, md: 'auto' }} justify={'flex-end'}>
                        <SocialIcon url={"//api.whatsapp.com/send?phone=8615651921699"} network={'whatsapp'}/>
                        <SocialIcon url={"https://telegram.me/Vezdehod13"} network={'telegram'}/>
                        <SocialIcon url={"https://vk.com/jeepservice76"} network={'vk'}/>
                        <SocialIcon url={"https://www.instagram.com/jeepservice_76/"} network={'instagram'}/>
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
                        <IconButton borderRadius="12" aria-label={'Toggle Color Mode'} onClick={toggleColorMode} icon={colorMode === 'light' ? <IoMoon size={18} /> : <IoSunny size={18} />} />
                    </Stack>
                </Container>
            </Flex>
        </Box>
    );
});