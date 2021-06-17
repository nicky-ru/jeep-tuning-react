import React from 'react';
import {Container, Header} from "semantic-ui-react";


const HeaderComponent = () => {
    return (
        <Container>
            <Header
                as={'h1'}
                content={'Jeepservice'}
                textAlign='right'
            />
        </Container>
    );
}

export default HeaderComponent;