import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";

const Advantages = ({advantages = []}) => {

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