import React from 'react';
import { Dialog, DialogTitle, Slider, Typography, DialogContent } from '@mui/material';
import { calculateModelTemperature } from '../utils/calculateModelTemperature';

type ModelSliderProps = {
	label: string;
	min: number;
	max: number;
	currentValue: number;
	onChange: (maxTokens: number) => void;
};

const ModelSlider: React.FC<ModelSliderProps> = ({ label, min, max, currentValue, onChange }) => (
	<>
		<Typography gutterBottom>{`${label}: ${currentValue}`}</Typography>
		<Slider
			value={currentValue}
			size="small"
			min={min}
			max={max}
			onChange={(_, newValue: number | number[]) => {
				onChange(newValue as number);
			}}
		/>
	</>
);

type SettingsProps = {
	isSettingsOpen: boolean;
	onClose: () => void;
	context: number;
	temperature: number;
	maxTokens: number;
	setContext: (context: number) => void;
	setTemperature: (temperature: number) => void;
	setMaxTokens: (maxTokens: number) => void;
};

const Settings: React.FC<SettingsProps> = ({
	isSettingsOpen,
	onClose,
	context,
	temperature,
	maxTokens,
	setContext,
	setTemperature,
	setMaxTokens,
}) => (
	<Dialog open={isSettingsOpen} fullWidth={true} maxWidth="sm" onClose={onClose}>
		<DialogTitle>Model settings</DialogTitle>
		<DialogContent>
			<ModelSlider
				label="Context"
				min={0}
				max={50}
				currentValue={context}
				onChange={setContext}
			/>
			<ModelSlider
				label="Temperature"
				min={0}
				max={200}
				currentValue={temperature}
				onChange={setTemperature}
			/>
			<ModelSlider
				label="Max tokens"
				min={1}
				max={4000}
				currentValue={maxTokens}
				onChange={setMaxTokens}
			/>
		</DialogContent>
	</Dialog>
);

export default Settings;
