import {VStack, HStack, Box, Text, Button, StackDivider, useColorModeValue} from '@chakra-ui/react';
import {CalendarIcon} from "@chakra-ui/icons";
import Link from "next/link"
import {useState, useEffect} from "react";
import {Badge} from "@chakra-ui/layout";

const ServiceList = ({services = [], uzelId = "", serviceName = "", withPrice = false}) => {
    const [filteredServices, setFilteredServices] = useState([]);
    const border = useColorModeValue("light.100", "dark.100");

    useEffect(() => {
        const _servicesFiltered = services
            .filter(service => {
                return uzelId.toUpperCase() === 'ALL' ? true : service.uzelID === uzelId;
            })
            .filter(service => {
                return serviceName ? service.name.toUpperCase().includes(serviceName.toUpperCase()) : true
            })
            .map(service => service);

        setFilteredServices(_servicesFiltered);
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
                    <HStack divider={<StackDivider borderColor={border} />}>
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
                        {withPrice && <Badge ml={1} colorScheme="green">{">"} {service.price} руб.</Badge>}
                    </HStack>
                    <Link href={{
                        pathname: "/appointment",
                        query: {serviceId: service.id}
                    }}>
                        <a>
                            <Button
                                rightIcon={<CalendarIcon/>}
                                display={["none", "flex"]}
                                colorScheme={"orange"}
                                variant={"outline"}
                                key={service.id}
                            >
                                Записаться
                            </Button>
                        </a>
                    </Link>
                </Box>
            ))}

        </VStack>
    );
}

export default ServiceList