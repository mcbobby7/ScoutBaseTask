import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

client.query({
    query: gql`
        {
            rates(currency: "USD") {
                currency
            }
        }
    `,
});
