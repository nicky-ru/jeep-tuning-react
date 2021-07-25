import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";

const Advantages = ({advantages = []}) => {

    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>Почему мы</Heading>
            <Wrap spacing={{base: "5px", md: "30px"}} justify="center">

                {advantages.map((advantage) => (
                    <WrapItem key={advantage.id}>
                        <Center
                            w={{base: '10rem', md: '200px'}}
                            h={{base: '9rem', md: '100px'}}
                            bg={'dark.100'}
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