import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Header from './Header';
import Body from './body';
import Footer from './footer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
});

const { Content } = Layout;

const AppLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const ResultWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 600px;
    height: 550px;
    border: 4px solid #08105b;
`;

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Header />
                    <AppLayout>
                        <Body />
                        <ResultWrapper>
                            <Content>{children}</Content>
                        </ResultWrapper>
                    </AppLayout>
                    <Footer />
                </Layout>
            </ApolloProvider>
        );
    }
}

export default App;
