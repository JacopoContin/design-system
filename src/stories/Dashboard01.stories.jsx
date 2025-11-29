import React from 'react';
import { Dashboard } from '../app/dashboard/page';

export default {
  title: 'Examples/Dashboard-01',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => <Dashboard />,
};
