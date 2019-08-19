import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
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
