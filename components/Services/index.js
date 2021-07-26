import {Container, Heading, Box} from "@chakra-ui/layout";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button, Text,
    useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import ServiceList from "./serviceList";
import Link from 'next/link'
import styles from "../../styles/Home.module.css";

// import AppointModal from "./appointModal";
const ServiceAccordion = ({uzels = [], services = []}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                            css={{
                                backdropFilter: 'saturate(180%) blur(5px)',
                                backgroundColor: useColorModeValue('lightgray', 'dark.300')
                            }}
                        >
                            <ServiceList services={services} uzelId={uzel.id}/>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <Link
                href={`/serviceList`}
                // maxW={"70%"}
            >
                <a>
                    <Button mt={'0.5rem'} w={'100%'}>Все услуги</Button>
                </a>

            </Link>

            {/*<AppointModal isOpen={isOpen} onClose={onClose}/>*/}

        </Container>
    );
}

export default ServiceAccordion;