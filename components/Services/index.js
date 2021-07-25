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
import Link from 'next/link'
import styles from "../../styles/Home.module.css";


// import AppointModal from "./appointModal";
function Services(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Container
            maxW="container.lg"
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наши услуги</Heading>


            <Accordion allowToggle reduceMotion>
                {props.uzels.map((uzel) => (
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
                                // backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                            }}
                        >
                            {/*<ServiceList onOpen={onOpen} uzel={uzel}/>*/}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            {/*<Link*/}
            {/*    href={`/services/${serviceId}`}*/}
            {/*    // maxW={"70%"}*/}
            {/*>*/}
            {/*    <a>*/}
            {/*        <Button mt={'0.5rem'} w={'100%'}>Все услуги</Button>*/}
            {/*    </a>*/}
            {/*    */}
            {/*</Link>*/}

            {/*<AppointModal isOpen={isOpen} onClose={onClose}/>*/}

        </Container>
    );
}

export default Services;