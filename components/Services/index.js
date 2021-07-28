import {Container, Heading, Box} from "@chakra-ui/layout";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import ServiceList from "./serviceList";
import Link from 'next/link'

const ServiceAccordion = ({uzels = [], services = []}) => {
    const bg = useColorModeValue('light.100', 'dark.100');

    return(
        <Container
            maxW="container.lg"
            my={4}
        >
            <Heading marginBottom={5}>Наши услуги</Heading>


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
                            bg={bg}
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
                    <Button mt={2} w={"full"}>Все услуги</Button>
                </a>

            </Link>
        </Container>
    );
}

export default ServiceAccordion;