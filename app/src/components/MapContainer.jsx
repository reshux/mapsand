import React from 'react';
import PropTypes from 'prop-types';
// Child components
import Map from './Map.jsx';

const MapContainer = ({ mapStyle }) => {
	return (
		<div className='mapsand-map-container'>
			<Map mapStyle={mapStyle} />
		</div>
	);
};

MapContainer.propTypes = {
	mapStyle: PropTypes.string.isRequired,
};

export default MapContainer;
