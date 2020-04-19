import React, { Component } from 'react';
import { Layout } from 'antd';
// Child components
import MapContainer from './MapContainer.jsx';
import MapStyleConfigurator from './MapStyleConfigurator.jsx';
// Constants
import mapConstants from '../constants/MapConstants.json';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			siderCollapsed: true,
			mapStyle: mapConstants.styles.light,
		};
	}

	componentDidMount() {}

	onStyleSelect = (newStyle) => {
		this.setState({ mapStyle: newStyle });
	};

	onSiderToggle = () => {
		this.setState({ siderCollapsed: !this.state.siderCollapsed });
	};

	render() {
		const { mapStyle, siderCollapsed } = this.state;
		return (
			<div className={'mapsand-app'}>
				<Layout>
					<Layout.Sider
						className={'mapsand-style-configurator'}
						trigger={null}
						collapsible={true}
						collapsed={siderCollapsed}
					>
						<MapStyleConfigurator
							stylesList={mapConstants.styles}
							onStyleSelect={this.onStyleSelect}
							siderCollapsed={siderCollapsed}
							onSiderToggle={this.onSiderToggle}
						/>
					</Layout.Sider>
					<Layout>
						<Layout.Content className={'mapsand-content-box'}>
							<MapContainer mapStyle={mapStyle} />
						</Layout.Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}
