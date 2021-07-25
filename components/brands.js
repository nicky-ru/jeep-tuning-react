import {Container, Heading, Wrap, WrapItem, Center} from "@chakra-ui/layout";
import Image from 'next/image'

const Brands = ({brands = []}) => {
    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>
                Марки, которые мы обслуживаем
            </Heading>
            <Wrap spacing="30px" justify="center">
                {brands.map((brand) => (
                        <WrapItem key={brand.name}>
                            <Center h={'100px'} w={'100px'} position={'relative'}>
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    // width={'100px'}
                                    // height={'100px'}
                                    placeholder={'blur'}
                                    blurDataURL={"https://via.placeholder.com/100"}
                                    // layout={'responsive'}
                                    // borderRadius="full"
                                    // fallbackSrc=
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