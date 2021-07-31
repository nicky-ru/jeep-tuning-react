import {
    Heading,
    Center,
    Box,
    Stack,
    Input,
    useControllableState,
    useColorModeValue,
    useDisclosure,
    Button,
    Modal, ModalOverlay, ModalContent, ModalBody
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import Image from "next/image"
import React from "react";
import ServiceList from "../Services/serviceList";

const Jumbotron = ({services = []}) => {
    const border = useColorModeValue("light.300", "dark.100");
    const bg = useColorModeValue("dark.500", "light.500");
    const textCol = useColorModeValue("light.400", "dark.400");
    const {onOpen, onClose, isOpen} = useDisclosure();
    const [value, setValue] = useControllableState({ defaultValue: "" })

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

            <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Stack isInline align={"center"}>
                            <SearchIcon/>
                            <Input
                                minHeight={10}
                                w={"full"}
                                variant={"unstyled"}
                                placeholder={"Поиск по услугам"}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                            />
                        </Stack>

                        {value.length > 1
                            ?
                            <Box maxH={400} overflow={"hidden"} overflowY={"scroll"}>
                                <ServiceList services={services} uzelId={'all'} serviceName={value}/>
                            </Box>
                            : <></>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    );
}

export default Jumbotron