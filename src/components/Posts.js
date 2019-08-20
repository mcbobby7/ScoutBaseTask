import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const getCountries = gql`
  query country($code: String!) {
    country(code: $code) {
      name
    }
  }
`;

const HeaderWrapper = styled.div`
    
`;

class Posts extends Component {
 displayCountries({ code }) {
        const { loading, error, data } = useQuery(getCountries, {
          variables: { code },
        });
      
        if (loading) return null;
        if (error) return `Error! ${error}`;
      
        return (
            <h1>{data.country.name}</h1>
        );
      }
    render() {
        return (
            <HeaderWrapper>
                <ul>
                    {this.displayCountries()}
                </ul>
            </HeaderWrapper>
        );
    }
}

export default graphql(getCountries)(Posts);


