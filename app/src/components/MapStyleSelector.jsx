import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const MapStyleSelector = ({ stylesList, onStyleSelect, siderCollapsed }) => {
	const getStyleOptions = () => {
		let selectOptions = Object.keys(stylesList).map(
			(styleKey, keyIndex) => {
				return (
					<Select.Option value={stylesList[styleKey]} key={keyIndex}>
						{styleKey}
					</Select.Option>
				);
			}
		);
		return selectOptions;
	};

	if (!siderCollapsed) {
        return (
			<Select
				className={'mapsand-style-selector'}
				onSelect={onStyleSelect}
			>
				{getStyleOptions()}
			</Select>
		);
    } else return null;
};

MapStyleSelector.propTypes = {
    stylesList: PropTypes.object.isRequired,
    siderCollapsed: PropTypes.bool.isRequired,
    onStyleSelect: PropTypes.func.isRequired,
};

export default MapStyleSelector;
