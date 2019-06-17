import React, { Component, Fragment } from 'react';
import Header from './Header';
import Contacts from './Contacts';
import Faq from './Faq';
import { WrappedMapContainer as Map }  from './container/MapContainer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Contacts />
                <Faq />
                <Map />
            </Fragment>
            );
        }
    }
export default Home;
