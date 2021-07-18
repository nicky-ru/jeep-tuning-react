import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Box} from "@chakra-ui/layout";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button,
    useColorModeValue
} from '@chakra-ui/react';
import {useSelector} from "react-redux";
import {ServiceList} from "../Service/serviceList";

const Services = observer(() => {
    const uzels = useSelector(state => state.uzels);

    return(
        <Container
            maxW="container.lg"
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наши услуги</Heading>

            <Accordion allowToggle reduceMotion>
                {Object.keys(uzels).length > 0 && Object.keys(uzels).map((uzel) => (
                    <AccordionItem key={uzel} >
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {uzels[uzel]}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            py={4}
                            css={{
                                // backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                            }}
                        >
                            <ServiceList uzel={uzel}/>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <Button mt={'0.5rem'} w={'100%'}>Все услуги</Button>

        </Container>
    );
})

export default Services;