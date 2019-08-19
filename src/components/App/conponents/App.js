import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';

const { Content } = Layout;

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header />
                <h1>App is there</h1>
                <Content>{children}</Content>
            </Layout>
        );
    }
}

export default App;
