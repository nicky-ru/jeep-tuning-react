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
                     borderColor={"dark.100"}
                     borderRadius={16}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between">
                    <Text marginLeft={"10px"} isTruncated>{services[serviceKey].name}</Text>
                    <Link
                        as={ReachLink}
                        to={`/service/${serviceKey}`}
                        params={{ service: serviceKey}}>
                        <Button type={"button"}>View</Button>
                    </Link>
                </Box>
            ))}

        </VStack>
    );
})