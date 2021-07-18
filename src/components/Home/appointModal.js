import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Select,
    VStack
} from "@chakra-ui/react"
import {useSelector} from "react-redux";

const AppointModal = observer((props) => {
    const serviceKey = useSelector(state => state.appointment.serviceKey);
    const services = useSelector(state => state.services);
    const uzels = useSelector(state => state.uzels);
    const [uzelName, setUzelName] = useState("");
    const [serviceName, setServiceName] = useState("");

    useEffect(() => {
        try {
            if (serviceKey) {
                const _servciceName = services[serviceKey].name;
                const _uzelId = services[serviceKey].uzelID;
                const _uzelName = uzels[_uzelId];

                setUzelName(_uzelName);
                setServiceName(_servciceName);
            }
        } catch (e) {
            console.log("Error getting data for modal ", e);
        }
    }, [serviceKey])

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
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
                        <Button variant="ghost" onClick={props.onClose}>
                            Закрыть
                        </Button>
                        <Button colorScheme="blue" mr={3}>Записаться</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
})

export default AppointModal;