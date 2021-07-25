import {VStack, Box, Text, Button, useDisclosure} from '@chakra-ui/react';
import Link from "next/link"
import {useState, useEffect} from "react";

const ServiceList = ({services = [], uzelId = ""}) => {
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(() => {
        if (uzelId.toUpperCase() === 'ALL') {
            setFilteredServices(services);
        } else {
            const _servicesFiltered = services
                .filter(function (service) {
                    return service.uzelID === uzelId;
                })
                .map(function (service) {return service});
            setFilteredServices(_servicesFiltered);
        }
    }, [services, uzelId]);

    return(
        <VStack
            spacing={4}
            align="stretch"
        >
            {filteredServices.map((service) => (
                <Box key={service.id}
                    // border={"1px"}
                    // borderColor={"#A0AEC0"}
                    // borderRadius={16}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                >
                    <Link
                        href={`/service/${service.id}`}
                    >
                        <a>
                            <Text
                                maxWidth={{base: "20rem", md: "100%"}}
                                marginLeft={"10px"}
                                isTruncated
                                textTransform={'capitalize'}
                            >
                                {service.name}
                            </Text>
                        </a>
                    </Link>
                    <Button
                        display={{ base: 'none', md: 'flex' }}
                        borderRadius={16}
                        type={"button"}
                        // onClick={() => {
                        //     dispatch(setAppointmentService(serviceKey));
                        //     props.onOpen();
                        // }}
                        key={service.id}
                    >
                        Записаться
                    </Button>
                </Box>
            ))}

        </VStack>
    );
}

export default ServiceList