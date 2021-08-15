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
                    // p={5}
                    borderRadius={"md"}
                >
                    <Tabs isFitted>
                        <TabList>
                            {service?.description ? <></> : <Tab>В работе</Tab>}
                            {service?.description?.[0] ? <Tab>Что?</Tab> : <></>}
                            {service?.description?.[1] ? <Tab>Зачем?</Tab> : <></>}
                            {service?.description?.[2] ? <Tab>Как?</Tab> : <></>}
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>{service?.description? service.description[0] : "Здесь будет описание данной услуги"}</p>
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
                <Text>Цена от:
                    {service?.prices?.map((price, i) => (
                        <Tooltip
                            key={price}
                            textTransform={'capitalize'}
                            label={service?.pricesInfo?.[i]}
                            aria-label="A tooltip"
                        >
                            <Badge ml={1} colorScheme="green">{price} руб.</Badge>
                        </Tooltip>
                    ))}
                </Text>
            </Box>
        </Center>
    )
}

export default ServiceInfo