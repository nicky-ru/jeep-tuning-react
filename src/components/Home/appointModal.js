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
    const appointment = useSelector(state => state.appointment);
    const services = useSelector(state => state.services);
    const uzels = useSelector(state => state.uzels);
    const [appointmentInfo, setAppointmentInfo] = useState({service: "", uzel: ""});

    useEffect(() => {
        if (appointment.serviceKey && appointment.uzelKey) {
            setAppointmentInfo({
                service: services[appointment.serviceKey].name,
                uzel: uzels[appointment.uzelKey]
            })
        }
    }, [appointment]);

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Запись на услугу</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Select placeholder={appointmentInfo.uzel}>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder={appointmentInfo.service}>
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