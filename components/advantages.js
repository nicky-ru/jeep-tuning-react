import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";
import {useColorModeValue} from "@chakra-ui/react";

const Advantages = ({advantages = []}) => {
    const bg = useColorModeValue("light.100", 'dark.100');

    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>Почему выбирают нас</Heading>
            <Wrap spacing={{base: "5px", md: "30px"}} justify="center">

                {advantages.map((advantage) => (
                    <WrapItem key={advantage.id}>
                        <Center
                            w={{base: '90vw', md: '250px'}}
                            h={{base: '5rem', md: '150px'}}
                            p={'1rem'}
                            bg={bg}
                            borderRadius={'md'}
                        >
                            <Text align={'center'}>{advantage.name}</Text>
                        </Center>
                    </WrapItem>
                ))}
            </Wrap>
        </Container>
    );
}

export default Advantages;