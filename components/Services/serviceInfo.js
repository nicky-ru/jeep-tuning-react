import {Badge, Box, Center, Heading, Text} from "@chakra-ui/layout";
import {Tabs, TabList, Tab, TabPanels, TabPanel, Tooltip, List, ListIcon, ListItem} from '@chakra-ui/react'
import {useColorModeValue} from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons"

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
                                <List>
                                    {service?.description?.[2]?.split('.')
                                        .filter(todo => {
                                            return todo.length > 0
                                        })
                                        .map((todo, i) => (
                                            <ListItem key={i}>
                                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                                {todo}
                                            </ListItem>
                                            )
                                        )}
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Text>Цена:
                    <Tooltip textTransform={'capitalize'} label={service?.pricesInfo?.[0]} aria-label="A tooltip">
                        <Badge ml={1} colorScheme="green">{service?.prices?.[0]} руб.</Badge>
                    </Tooltip>
                    <Tooltip textTransform={'capitalize'} label={service?.pricesInfo?.[1]} aria-label="A tooltip">
                        <Badge ml={1} colorScheme="yellow">{service?.prices?.[1]} руб.</Badge>
                    </Tooltip>
                    <Tooltip textTransform={'capitalize'} label={service?.pricesInfo?.[2]} aria-label="A tooltip">
                        <Badge ml={1} colorScheme="pink">{service?.prices?.[2]} руб.</Badge>
                    </Tooltip>
                </Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo