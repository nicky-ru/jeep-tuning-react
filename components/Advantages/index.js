import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";
import {useColorModeValue} from "@chakra-ui/react";

const Advantages = ({advantages = []}) => {
    const bg = useColorModeValue("light.100", 'dark.100');

    return(
        <Container
            my={4}
            maxW="container.lg"
        >
            <Heading marginBottom={5}>Почему выбирают нас</Heading>
            <Wrap spacing={[1, 8]} justify="center">

                {advantages.map((advantage) => (
                    <WrapItem key={advantage.id}>
                        <Center
                            w={["90vw", "2xs"]}
                            h={[20, 40]}
                            p={4}
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