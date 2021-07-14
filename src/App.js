import React from 'react';
import './App.css';
import {ErrorBoundary} from "react-error-boundary";
import { Box, Text } from '@chakra-ui/layout';
import { ChakraProvider, Button, Container, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {theme} from "./lib/theme";

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
                  </Switch>
              </Router>
          </ErrorBoundary>
      </ChakraProvider>
  );
}

export default App;
