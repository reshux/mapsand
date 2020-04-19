import React from 'react';
import PropTypes from 'prop-types';

import { ControlFilled } from '@ant-design/icons';
import MapStyleSelector from './MapStyleSelector.jsx';

const MapStyleConfigurator = ({onSiderToggle, siderCollapsed, stylesList, onStyleSelect}) => {
	return (
		<div className='mapsand-style-configurator-content'>
			<ControlFilled onClick={onSiderToggle} />
			<MapStyleSelector
				siderCollapsed={siderCollapsed}
				stylesList={stylesList}
				onStyleSelect={onStyleSelect}
			/>
		</div>
	);
};

MapStyleConfigurator.propTypes = {
    visible: PropTypes.bool.isRequired, 
    stylesList: PropTypes.object.isRequired,
    onStyleSelect: PropTypes.func.isRequired,
    onSiderToggle: PropTypes.func.isRequired 
};

export default MapStyleConfigurator;
