import {Container, Heading, Wrap, WrapItem, Center} from "@chakra-ui/layout";
import Image from 'next/image'

const Brands = ({brands = []}) => {
    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>
                Марки, с которыми мы работаем
            </Heading>
            <Wrap spacing="30px" justify="center">
                {brands.map((brand) => (
                        <WrapItem key={brand.name}>
                            <Center
                                h={{base: '25px', md: '75px'}}
                                w={{base: '25px', md: '75px'}}
                                position={'relative'}
                            >
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    placeholder={'blur'}
                                    blurDataURL={"https://via.placeholder.com/100"}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                />
                            </Center>
                        </WrapItem>
                    )
                )}
            </Wrap>
        </Container>
    );
}

export default Brands;