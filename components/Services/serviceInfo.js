import {Badge, Box, Center, Heading, Text} from "@chakra-ui/layout";
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
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
                <Box
                    mb={4}
                    bg={bg}
                    p={5}
                    borderRadius={"md"}
                >
                    <Tabs>
                        <TabList>
                            <Tab>Что?</Tab>
                            <Tab>Зачем?</Tab>
                            <Tab>Как?</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>{service?.description?.[0]}</p>
                            </TabPanel>
                            <TabPanel>
                                <p>{service?.description?.[1]}</p>
                            </TabPanel>
                            <TabPanel>
                                <p>{service?.description?.[2]}</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Text>Цена от: <Badge ml={1} colorScheme="green">{service.price} руб.</Badge></Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo