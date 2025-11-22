import { useState } from 'react';
import { Switch } from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

// Basic switch
export const Basic = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <label className="text-sm">
          {checked ? 'Enabled' : 'Disabled'}
        </label>
      </div>
    );
  },
};

// Default checked
export const DefaultChecked = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <label className="text-sm">
          Default enabled
        </label>
      </div>
    );
  },
};

// Disabled
export const Disabled = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch disabled />
        <label className="text-sm text-muted-foreground">
          Disabled (unchecked)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch disabled checked />
        <label className="text-sm text-muted-foreground">
          Disabled (checked)
        </label>
      </div>
    </div>
  ),
};

// Form example with labels
export const FormExample = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);
    const [analytics, setAnalytics] = useState(true);

    return (
      <div className="flex flex-col gap-4 w-[400px]">
        <div className="flex items-center justify-between p-4 border-2 border-border rounded-lg">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Email Notifications
            </label>
            <span className="text-sm text-muted-foreground">
              Receive emails about your account activity
            </span>
          </div>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </div>

        <div className="flex items-center justify-between p-4 border-2 border-border rounded-lg">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Marketing Emails
            </label>
            <span className="text-sm text-muted-foreground">
              Receive emails about new features and offers
            </span>
          </div>
          <Switch checked={marketing} onCheckedChange={setMarketing} />
        </div>

        <div className="flex items-center justify-between p-4 border-2 border-border rounded-lg">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Analytics Tracking
            </label>
            <span className="text-sm text-muted-foreground">
              Help us improve by sharing anonymous usage data
            </span>
          </div>
          <Switch checked={analytics} onCheckedChange={setAnalytics} />
        </div>
      </div>
    );
  },
};

// Multiple switches
export const MultipleSwitches = {
  render: () => {
    const [switches, setSwitches] = useState({
      wifi: true,
      bluetooth: false,
      airplane: false,
      location: true,
    });

    const handleChange = (key) => (checked) => {
      setSwitches(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div className="flex flex-col gap-3 w-[300px]">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Wi-Fi</label>
          <Switch checked={switches.wifi} onCheckedChange={handleChange('wifi')} />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Bluetooth</label>
          <Switch checked={switches.bluetooth} onCheckedChange={handleChange('bluetooth')} />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Airplane Mode</label>
          <Switch checked={switches.airplane} onCheckedChange={handleChange('airplane')} />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Location</label>
          <Switch checked={switches.location} onCheckedChange={handleChange('location')} />
        </div>
      </div>
    );
  },
};
