import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Stack, Box, Heading, Text, Badge, Center, StackDivider} from "@chakra-ui/layout";
import {Link} from 'react-router-dom';
import {
    Button, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select,
    useDisclosure, VStack
} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {setAppointmentServiceKey} from "../../redux/actions/appointment";

export const ServiceInfo = observer(() => {
    const service = useSelector(state => state.service);
    const uzels = useSelector(state => state.uzels);
    const { isOpen, onOpen, onClose } = useDisclosure();


    return(
        <Container maxW="container.lg" h={'90vh'}>
            <Stack
                direction={["column", "row"]}
                spacing="24px"
                h={'100%'}
                divider={<StackDivider borderColor="gray.200" />}
            >

                <Center h={'100%'}>
                    <Box>
                        {service &&
                        <>
                            <Heading mb={'0.5rem'} textTransform={'capitalize'}>{service.name}</Heading>
                            <Heading mb={'1rem'} size={'sm'}>{uzels[service.uzelID]}</Heading>
                            <Text mb={'1rem'}>{service.description}</Text>
                            <Text>Цена от: <Badge ml="1" colorScheme="green">{service.price} руб.</Badge></Text>
                        </>
                        }
                    </Box>
                </Center>

                <Center h={'100%'}>
                    <Button
                        onClick={() => {
                            onOpen();
                        }}
                    >
                        Записаться
                    </Button>
                </Center>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Запись на услугу</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Select placeholder="Узел">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="Услуга">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="Марка авто">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="Модель авто">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="Год">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="VIN">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Закрыть
                        </Button>
                        <Button colorScheme="blue" mr={3}>Записаться</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
})