import {Heading, Center, useColorModeValue} from "@chakra-ui/react";

const Jumbotron = () => {
    return(
        <Center
            bgImage="url('https://i.ibb.co/HzKWHv8/bl-De7-CFXPZ8-copy.webp')"
            bgRepeat={'round'}
            /*bg={'tomato'}*/
            h={'250px'}
        >
            <Heading
                borderRadius={'md'}
                px={'1rem'}
                py={'0.5rem'}
                display={{ base: 'none', md: 'flex' }}
                css={{
                    backdropFilter: 'saturate(180%) blur(5px)',
                    backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                }}
            >Лучший автосервис в вашем регионе</Heading>
        </Center>
    );
}

export default Jumbotron