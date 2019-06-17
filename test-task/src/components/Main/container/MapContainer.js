import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../Map';
import { saveLocation } from '../../../store/map/mapActions';



class MapContainer extends Component {
    render() {
        return (
           <Map location={this.props.location}
            saveLocation={this.props.saveLocation} />
            );
        }
    }

const mapStateToProps = state => {
    return {
        location: state.map.location,
    }
}

const mapDispatchToProps = {
    saveLocation
}

export const WrappedMapContainer =  connect(mapStateToProps, mapDispatchToProps)(MapContainer);

