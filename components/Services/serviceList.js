import {VStack, Box, Text, Button, StackDivider, useColorModeValue} from '@chakra-ui/react';
import Link from "next/link"
import {useState, useEffect} from "react";

const ServiceList = ({services = [], uzelId = ""}) => {
    const [filteredServices, setFilteredServices] = useState([]);
    const border = useColorModeValue("light.100", "dark.100");

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
                        href={`/service/${service.id}`}
                    >
                        <a>
                            <Text
                                maxWidth={{base: "80vw", md: "100%"}}
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