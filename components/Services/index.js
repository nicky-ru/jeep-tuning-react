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
import {useRouter} from "next/router";

const ServiceAccordion = ({uzels = [], services = []}) => {
    const router = useRouter();
    const bg = useColorModeValue('light.100', 'dark.100');
    const variant = useColorModeValue("solid", "outline");

    return (
        <Container
            maxW="container.lg"
            my={4}
        >
            <Heading marginBottom={5}>Наши услуги</Heading>


            <Accordion allowToggle reduceMotion>
                {uzels.map((uzel) => (
                    <AccordionItem key={uzel.id}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {uzel.name}
                                </Box>
                                <AccordionIcon/>
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
            <Button
                mt={2}
                w={"full"}
                colorScheme={"orange"}
                variant={variant}
                onClick={() => {
                    router.push("/serviceSearch")
                }}
            >
                Все услуги
            </Button>
            {/*<Link*/}
            {/*    href={`/serviceSearch`}*/}
            {/*>*/}
            {/*    <a>*/}
            {/*        <Button mt={2} w={"full"}>Все услуги</Button>*/}
            {/*    </a>*/}

            {/*</Link>*/}
        </Container>
    );
}

export default ServiceAccordion;