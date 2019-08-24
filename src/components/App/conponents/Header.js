import React, { Component } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const HeaderWrapper = styled.div`
    background-color: #022140;
    font-size: 80%;
    margin: 0;
    padding: 0.25em 1em;
    text-align: center;
    h1 {
        color: white;
    }
`;

class header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Zoom left cascade>
                    <h1> Welcome To Country Code By Mcbobby Madu</h1>
                </Zoom>
            </HeaderWrapper>
        );
    }
}

export default header;
