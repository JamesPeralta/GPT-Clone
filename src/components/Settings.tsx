import React from 'react';
import {
  Dialog,
  DialogTitle,
  Slider,
  Typography,
  DialogContent,
} from '@mui/material';

type SettingsProps = {
  open: boolean;
  onClose: () => void;
  context: number;
  temperature: number;
  maxTokens: number;
  setContext: React.Dispatch<React.SetStateAction<number>>;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  setMaxTokens: React.Dispatch<React.SetStateAction<number>>;
};

const Settings: React.FC<SettingsProps> = ({
  open,
  onClose,
  context,
  temperature,
  maxTokens,
  setContext,
  setTemperature,
  setMaxTokens,
}) => (
  <Dialog open={open} fullWidth={true} maxWidth="sm" onClose={onClose}>
    <DialogTitle>Model settings</DialogTitle>
    <DialogContent>
      <Typography id="non-linear-slider" gutterBottom>
        Context: {context}
      </Typography>
      <Slider
        value={context}
        size="small"
        min={0}
        max={50}
        onChange={(event: Event, newValue: number | number[]) => {
          setContext(newValue as number);
        }}
      />
      <Typography id="non-linear-slider" gutterBottom>
        Temperature: {temperature / 100}
      </Typography>
      <Slider
        value={temperature}
        size="small"
        min={0}
        max={200}
        onChange={(event: Event, newValue: number | number[]) => {
          setTemperature(newValue as number);
        }}
      />
      <Typography id="non-linear-slider" gutterBottom>
        Max tokens: {maxTokens}
      </Typography>
      <Slider
        value={maxTokens}
        size="small"
        min={1}
        max={4000}
        onChange={(event: Event, newValue: number | number[]) => {
          setMaxTokens(newValue as number);
        }}
      />
    </DialogContent>
  </Dialog>
);

export default Settings;
