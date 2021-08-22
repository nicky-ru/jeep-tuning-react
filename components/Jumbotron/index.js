import {
    Heading,
    Text,
    Center,
    Box,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Button,
    Modal, ModalOverlay
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import Image from "next/image"
import smoke_dark from "../../public/images/smoke.png"
import React from "react";
import dynamic from "next/dynamic";
const JumbotronModalContent = dynamic(() => import('./modalContent'));

const Jumbotron = ({services = []}) => {
    const bg = useColorModeValue("dark.500", "light.500");
    const variant = useColorModeValue("solid", "outline");
    const modalSize = useBreakpointValue({base: "sm", md: "xl", lg: "3xl"})
    const headingSize = useBreakpointValue({base: "lg", md: "xl"})
    const jumbotronSize = useBreakpointValue({base: "xs", md: "2xl", lg: "4xl"});
    const {onOpen, onClose, isOpen} = useDisclosure();

    return (
        <>
            <Box
                id={"jumbotron"}
                mt={24}
                h={'2xs'}
                bg={'light.400'}
                position={"relative"}
                zIndex={0}
            >
                <Image
                    src={smoke_dark}
                    alt={'background'}
                    placeholder={'blur'}
                    blurDataURL={"https://via.placeholder.com/100"}
                    layout={'fill'}
                    quality={40}
                />
                <Center
                    h={"full"}
                >
                    <Stack
                        direction={'column'}
                        borderRadius={'md'}
                        maxW={jumbotronSize}
                        px={[4, 10]}
                        py={[2, 5]}
                        textAlign={'center'}
                        bg={bg}
                        css={{
                            backdropFilter: 'saturate(180%) blur(5px)',
                        }}
                    >
                        <Heading size={headingSize}>Сервис внедорожников и кроссоверов c гарантией</Heading>
                        <Text fontWeight={'bold'}>Какая услуга вас интересует?</Text>
                        <Button
                            leftIcon={<SearchIcon />}
                            onClick={onOpen}
                            colorScheme={"orange"}
                            variant={variant}
                        >
                            <Box w={"full"} textAlign={"left"}>Найти услугу и записаться</Box>
                        </Button>
                    </Stack>
                </Center>
            </Box>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={modalSize}
                isCentered
            >
                <ModalOverlay />
                <JumbotronModalContent services={services}/>
            </Modal>
        </>

    );
}

export default Jumbotron