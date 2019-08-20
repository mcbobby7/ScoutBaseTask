import React, { Component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import Modal from './modal';

const BodyWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 700px;
    img {
        padding-top: 30px;
    }
    b {
        color: red;
    }
    i {
        color: red;
    }
    ol {
        text-align: left;
    }
    .primary {
        padding: 30px;
    }
    .flag {
        width: 200px;
        height: 200px;
    }
`;

class Body extends Component {
    render() {
        return (
            <BodyWrapper>
                <img src="/scoutbase-logo.png" alt="logo" />
                <div>
                    <h3>
                        This is my first project for <b> Scout Base </b> and i hope to be called for
                        interview
                    </h3>
                    <h2>
                        <b>Guide</b>
                    </h2>
                    <ol>
                        <li>
                            <p>To view all countries click the button countries</p>
                        </li>
                        <li>
                            <p>
                                To view a single country click the button country and choose a flag
                            </p>
                        </li>
                        <li>
                            <p>you can view result by the right hand side of the page</p>
                        </li>
                        <li>
                            <p>
                                you can navigate to contact us and about the developer from the
                                result section.
                            </p>
                        </li>
                    </ol>
                </div>
                <Link to="/countries"><Button className="button" type="primary">
                        Countriea
                    </Button>
                </Link>
                <hr />
                <Modal />
            </BodyWrapper>
        );
    }
}

export default Body;
