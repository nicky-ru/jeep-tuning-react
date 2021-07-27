import {Badge, Box, Center, Heading, Text} from "@chakra-ui/layout";
import {useColorMode} from "@chakra-ui/react";

const ServiceInfo = ({service={}, uzel={}}) => {
    const {colorMode} = useColorMode();

    return (
        <Center h={'100%'}>
            <Box
                mb={'1rem'}
                bg={colorMode === "light" ? "light.100" : "dark.100"}
                p={5}
                borderRadius={"md"}
            >
                <Heading mb={'0.5rem'} textTransform={'capitalize'}>{service.name}</Heading>
                <Heading mb={'1rem'} size={'sm'}>{uzel.name}</Heading>
                <Text
                    mb={'1rem'}
                    bg={colorMode === "light" ? "light.100" : "dark.100"}
                    p={5}
                    borderRadius={"md"}
                >
                    {service.description}
                </Text>
                <Text>Цена от: <Badge ml="1" colorScheme="green">{service.price} руб.</Badge></Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo