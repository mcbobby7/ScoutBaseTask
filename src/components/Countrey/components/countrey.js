import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';
import { Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const getCountries=gql`
    {
        country(code: "CA"){
            name
            code
          	emoji
          languages {
            name
            native
          }
          continent {
            name
          }
        }
    }
`

const HeaderWrapper = styled.div`
    
`;

class Countries extends Component {
    displayCountries(){
        var data = this.props.data;
        console.log(data);
        if(data.loading){
            return(<div>loading</div>);
        }else{
            return (
                <div>
                    {data.country.code}
                    {data.country.name}
                    {data.country.continent.name}
                    {data.country.code}
                </div>
            );
            // // return data.country.map(singleCountry =>{
            //     return(
            //             // <Collapse
            //             //     bordered={false}
            //             //     defaultActiveKey={['AD']}
            //             //     expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            //             // >
            //             //     <Panel header={data.Country.name} key={data.Country.code}>
            //             //     <h5>{data.Country.languages.name}</h5><br />
            //             //     <h5>{data.Country.languages.native}</h5><br />
            //             //     <h5>{data.Country.continent.name}</h5><br />
            //             //     </Panel>
            //             // </Collapse>
            //     );
            // // })
        }
    }
    render() {
        // console.log(this.props);
        return (
            <HeaderWrapper>
                <div>
                    {this.displayCountries()}
                </div>
            </HeaderWrapper>
        );
    }
}

export default graphql(getCountries)(Countries);


