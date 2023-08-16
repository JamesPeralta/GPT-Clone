import React from 'react';
import { AppBar as MuiAppBar, Typography, SvgIcon, Toolbar, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// @ts-ignore
import { ReactComponent as NovaLogo } from '../images/logo.svg';

import './AppBar.css';

type AppBarProps = {
	openSettings: () => void;
};

const AppBar: React.FC<AppBarProps> = ({ openSettings }) => (
	<MuiAppBar position="relative">
		<Toolbar>
			<Typography className="nova-gpt-header" variant="h6">
				CPT-5
			</Typography>
			<IconButton
				className="settings-icon-button"
				aria-label="settings"
				onClick={() => openSettings()}
			>
				<SettingsIcon className="settings-icon" />
			</IconButton>
		</Toolbar>
	</MuiAppBar>
);

export default AppBar;
