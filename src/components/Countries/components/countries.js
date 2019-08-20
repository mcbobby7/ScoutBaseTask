import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';
import { Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const getCountries=gql`
    {
        countries{
            name
            code
          continent {
            name
          }
          languages {
            name
            native
          }
        }
    }
`

const HeaderWrapper = styled.div`
    
`;

class Countries extends Component {
    displayCountries(){
        var data = this.props.data;
        if(data.loading){
            return(<div>loading</div>);
        }else{
            return data.countries.map(countrey =>{
                return(
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['AD']}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            <Panel header={countrey.name} key={countrey.code}>
                            <h5>{countrey.languages.name}</h5><br />
                            <h5>{countrey.languages.native}</h5><br />
                            <h5>{countrey.continent.name}</h5><br />
                            </Panel>
                        </Collapse>
                );
            })
        }
    }
    render() {
        console.log(this.props);
        return (
            <HeaderWrapper>
                <ul>
                    {this.displayCountries()}
                </ul>
            </HeaderWrapper>
        );
    }
}

export default graphql(getCountries)(Countries);


