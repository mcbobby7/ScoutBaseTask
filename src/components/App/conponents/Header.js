import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #08105b;
    color: white;
    font-size: 1em;
    margin: 0;
    padding: 0.25em 1em;
    text-align: center;
`;

class header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1> Welcome To Country Code</h1>
            </HeaderWrapper>
        );
    }
}

export default header;
