import {VStack, Box, Text, Button, StackDivider, useColorModeValue} from '@chakra-ui/react';
import {CalendarIcon} from "@chakra-ui/icons";
import Link from "next/link"
import {useState, useEffect} from "react";

const ServiceList = ({services = [], uzelId = "", serviceName = ""}) => {
    const [filteredServices, setFilteredServices] = useState([]);
    const border = useColorModeValue("light.100", "dark.100");

    useEffect(() => {
        if (uzelId.toUpperCase() === 'ALL') {
            if (!serviceName) {
                setFilteredServices(services);
            }
            const _servicesFiltered = services
                .filter(function (service) {
                    return service.name.includes(serviceName);
                })
                .map(function (service) {return service});
            setFilteredServices(_servicesFiltered);
        } else {
            const _servicesFiltered = services
                .filter(function (service) {
                    return service.uzelID === uzelId;
                })
                .map(function (service) {return service});
            setFilteredServices(_servicesFiltered);
        }
    }, [services, uzelId, serviceName]);

    return(
        <VStack
            align="stretch"
            divider={<StackDivider borderColor={border} />}
        >
            {filteredServices.map((service) => (
                <Box key={service.id}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                >
                    <Link
                        href={`/service/${encodeURIComponent(service.id)}`}
                    >
                        <a>
                            <Text
                                maxWidth={["80vw", "full"]}
                                marginLeft={3}
                                isTruncated
                                textTransform={'capitalize'}
                            >
                                {service.name}
                            </Text>
                        </a>
                    </Link>
                    <Button
                        rightIcon={<CalendarIcon/>}
                        display={["none", "flex"]}
                        colorScheme={"orange"}
                        variant={"outline"}
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