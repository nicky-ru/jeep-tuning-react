import React from 'react';
import './App.css';
import {ErrorBoundary} from "react-error-boundary";
import { Box, Text } from '@chakra-ui/layout';
import { ChakraProvider, Button, Container, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {theme} from "./lib/theme";
import {Service} from "./pages/Service";
import {Services} from "./pages/Service/services";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <Container role="alert">
            <Center h="500px">
                <Box>
                    <p>Something went wrong:</p>
                    <Text color="red.500">{error.message}</Text>
                    <Button onClick={resetErrorBoundary}>Try again</Button>
                </Box>
            </Center>
        </Container>
    );
};

function App() {
  return (
      <ChakraProvider theme={theme}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Router>
                  <Header/>
                  <Switch>
                      <Route path={'/'} exact key={'/'} component={Home}/>
                      <Route path={'/service/:slug'} exact key={'/service/:slug'} component={Service}/>
                      <Route path={'/services'} exact key={'/services'} component={Services}/>
                  </Switch>
                  <Footer/>
              </Router>
          </ErrorBoundary>
      </ChakraProvider>
  );
}

export default App;
