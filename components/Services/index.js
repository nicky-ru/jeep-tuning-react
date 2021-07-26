import {Container, Heading, Box} from "@chakra-ui/layout";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button, useColorMode
} from '@chakra-ui/react';
import ServiceList from "./serviceList";
import Link from 'next/link'

const ServiceAccordion = ({uzels = [], services = []}) => {
    const { colorMode } = useColorMode();

    return(
        <Container
            maxW="container.lg"
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наши услуги</Heading>


            <Accordion allowToggle reduceMotion>
                {uzels.map((uzel) => (
                    <AccordionItem key={uzel.id} >
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {uzel.name}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            py={4}
                            bg={colorMode === 'light' ? 'light.100' : 'dark.100'}
                        >
                            <ServiceList services={services} uzelId={uzel.id}/>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <Link
                href={`/serviceList`}
            >
                <a>
                    <Button mt={'0.5rem'} w={'100%'}>Все услуги</Button>
                </a>

            </Link>
        </Container>
    );
}

export default ServiceAccordion;