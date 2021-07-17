import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Box} from "@chakra-ui/layout";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from '@chakra-ui/react';
import {useSelector} from "react-redux";
import {ServiceList} from "../Service/serviceList";

export const Services = observer(() => {
    const uzels = useSelector(state => state.uzels);

    return(
        <Container
            maxW="container.lg"
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наши услуги</Heading>

            <Accordion allowToggle>
                {Object.keys(uzels).length > 0 && Object.keys(uzels).map((uzel) => (
                    <AccordionItem key={uzel}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {uzels[uzel]}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ServiceList uzel={uzel}/>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            {/*<VStack*/}
            {/*    spacing={4}*/}
            {/*    align="stretch"*/}
            {/*>*/}
            {/*    <Box key={'first'}*/}
            {/*         border={"1px"}*/}
            {/*         borderColor={"dark.100"}*/}
            {/*         borderRadius={16}*/}
            {/*         display="flex"*/}
            {/*         alignItems="center"*/}
            {/*         justifyContent="space-between">*/}
            {/*        <Text marginLeft={"10px"} isTruncated>{'first'}</Text>*/}
            {/*        <Link*/}
            {/*            as={ReachLink}*/}
            {/*            to={`/service/${'first'}`}*/}
            {/*            params={{ service: 'first' }}>*/}
            {/*            <Button type={"button"}>Записаться</Button>*/}
            {/*        </Link>*/}
            {/*    </Box>*/}
            {/*    <Box key={'sec'}*/}
            {/*         border={"1px"}*/}
            {/*         borderColor={"dark.100"}*/}
            {/*         borderRadius={16}*/}
            {/*         display="flex"*/}
            {/*         alignItems="center"*/}
            {/*         justifyContent="space-between">*/}
            {/*        <Text marginLeft={"10px"} isTruncated>{'first'}</Text>*/}
            {/*        <Link*/}
            {/*            as={ReachLink}*/}
            {/*            to={`/service/${'first'}`}*/}
            {/*            params={{ service: 'first' }}>*/}
            {/*            <Button type={"button"}>Записаться</Button>*/}
            {/*        </Link>*/}
            {/*    </Box>*/}
            {/*    <Link*/}
            {/*        as={ReachLink}*/}
            {/*        to={'/services'}>*/}
            {/*        <Button w={'100%'} type={"button"}>Все услуги</Button>*/}
            {/*    </Link>*/}
            {/*</VStack>*/}

        </Container>
    );
})