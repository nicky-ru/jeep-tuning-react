import {Badge, Box, Center, Heading, Text} from "@chakra-ui/layout";
import {useColorModeValue, useControllableState} from "@chakra-ui/react";
import {useEffect} from "react";
import {getServiceDescription} from "../../lib/service_descriptions";
import styles from './serviceInfo.module.css'

const ServiceInfo = ({service={}, uzel={}}) => {
    const bg = useColorModeValue("light.100", 'dark.100');
    const [des, setDes] = useControllableState({defaultValue: ""})


    useEffect(() => {
        const getDes = async () => {
            const desc = await getServiceDescription(service.description);
            setDes(desc);
        }
        getDes();
    }, [service]);

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
                <Box
                    mb={4}
                    bg={bg}
                    p={5}
                    borderRadius={"md"}
                >
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: des }} />
                </Box>
                <Text>Цена от: <Badge ml={1} colorScheme="green">{service.price} руб.</Badge></Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo