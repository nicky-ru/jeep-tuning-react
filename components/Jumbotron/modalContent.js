import {Box, Input, ModalBody, ModalContent, Stack, useControllableState, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import ServiceList from "../Services/serviceList";
import React from "react";

const JumbotronModalContent = ({services = []}) => {
    const [value, setValue] = useControllableState({ defaultValue: "" })

    return(
        <ModalContent>
            <ModalBody size={"md"}>
                <Stack isInline align={"center"} mb={2}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input
                            minHeight={10}
                            w={"full"}
                            variant={"flushed"}
                            placeholder={"Поиск по услугам"}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    </InputGroup>
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
    )
}

export default JumbotronModalContent;