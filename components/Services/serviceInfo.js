import {Badge, Box, Center, Heading, Text} from "@chakra-ui/layout";
import {useColorModeValue} from "@chakra-ui/react";

const ServiceInfo = ({service={}, uzel={}}) => {
    const bg = useColorModeValue("light.100", 'dark.100');

    return (
        <Center h={"full"}>
            <Box
                mb={4}
                bg={bg}
                p={5}
                borderRadius={"md"}
            >
                <Heading mb={2} textTransform={'capitalize'}>{service.name}</Heading>
                <Heading mb={4} size={'sm'}><Badge p={1} colorScheme="purple">{uzel.name}</Badge></Heading>
                <Text
                    mb={4}
                    bg={bg}
                    p={5}
                    borderRadius={"md"}
                >
                    {service.description}
                </Text>
                <Text>Цена от: <Badge ml={1} colorScheme="green">{service.price} руб.</Badge></Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo