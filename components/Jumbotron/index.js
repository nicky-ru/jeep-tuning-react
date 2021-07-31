import {
    Heading,
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
import React from "react";
import JumbotronModalContent from "./modalContent";

const Jumbotron = ({services = []}) => {
    const bg = useColorModeValue("dark.500", "light.500");
    const textCol = useColorModeValue("light.400", "dark.400");
    const modalSize = useBreakpointValue({base: "xs", md: "xl", lg: "3xl"})
    const {onOpen, onClose, isOpen} = useDisclosure();

    return (
        <>
            <Box
                mt={16}
                h={["2xs", "md"]}
                bg={'dark.100'}
                position={"relative"}
                zIndex={0}
            >
                <Image
                    src={'/images/bkg.webp'}
                    alt={'background'}
                    placeholder={'blur'}
                    blurDataURL={"https://via.placeholder.com/100"}
                    layout={'fill'}
                />
                <Center
                    h={"full"}
                >
                    <Stack
                        direction={'column'}
                        borderRadius={'md'}
                        px={[4, 10]}
                        py={[2, 5]}
                        mx={[4, 0]}
                        textAlign={'center'}
                        bg={bg}
                        css={{
                            backdropFilter: 'saturate(180%) blur(5px)',
                        }}
                    >
                        <Heading>Лучший сервис по внедорожникам и кроссоверам</Heading>
                        <Heading size={'md'}>Какая услуга вас интересует?</Heading>
                        <Button
                            leftIcon={<SearchIcon color={textCol}/>}
                            onClick={onOpen}
                            textColor={textCol}
                        >
                            <Box w={"full"} textAlign={"left"}>Поиск по услугам</Box>
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