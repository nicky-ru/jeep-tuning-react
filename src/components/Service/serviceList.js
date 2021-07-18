import React, {useEffect, useState} from 'react';
import {VStack, Box, Text, Link, Button} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {useSelector} from "react-redux";

export const ServiceList = observer((props) => {
    const services = useSelector(state => state.services);
    const [serviceKeys, setServiceKeys] = useState([]);

    useEffect(() => {
        if (Object.keys(services).length > 0) {
            const _serviceKeysFiltered = Object.keys(services).filter(function (serviceKey) {
                return services[serviceKey].uzelID === props.uzel;
            })
                .map(function (serviceKey) {return serviceKey});

            setServiceKeys(_serviceKeysFiltered);
        }
    }, [services]);

    return(
        <VStack
            spacing={4}
            align="stretch"
        >
            {serviceKeys.length > 0 && serviceKeys.map((serviceKey) => (
                <Box key={serviceKey}
                     border={"1px"}
                     borderColor={"#A0AEC0"}
                     borderRadius={16}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                >
                    <Link
                        as={ReachLink}
                        to={`/service/${serviceKey}`}
                        params={{ service: serviceKey}}
                        maxW={"70%"}
                    >
                        <Text
                            marginLeft={"10px"}
                            isTruncated
                            textTransform={'capitalize'}
                        >
                            {services[serviceKey].name}
                        </Text>
                    </Link>
                    <Button
                        display={{ base: 'none', md: 'flex' }}
                        borderRadius={16}
                        type={"button"}
                    >
                        Записаться
                    </Button>
                </Box>
            ))}

        </VStack>
    );
})