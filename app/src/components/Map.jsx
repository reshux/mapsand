import React from 'react';
import PropTypes from 'prop-types';

import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl';

const accessToken = process.env.MAPBOX_TOKEN;

const Map = ({ mapStyle }) => {
	let ReactMap = ReactMapboxGl({
		accessToken,
	});
	return <ReactMap style={mapStyle} className='mapsand-map'></ReactMap>;
};

Map.propTypes = {
	mapStyle: PropTypes.string.isRequired,
};

export default Map;
