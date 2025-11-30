import { Badge } from '../components/badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'positive', 'negative', 'neutral'],
      description: 'Badge visual variant',
    },
  },
};

// Default badge
export const Default = {
  args: {
    children: 'Badge',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// Variance use cases
export const Positive = {
  args: {
    variant: 'positive',
    children: '+20.1%',
  },
};

export const Negative = {
  args: {
    variant: 'negative',
    children: '-5.3%',
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
    children: '0%',
  },
};

// Use case: Revenue card with variance
export const RevenueVariance = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
          <Badge variant="positive">+20.1%</Badge>
        </div>
        <p className="mt-2 text-3xl font-bold">$45,231</p>
        <p className="text-xs text-muted-foreground mt-1">from last month</p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
          <Badge variant="negative">-3.2%</Badge>
        </div>
        <p className="mt-2 text-3xl font-bold">2,350</p>
        <p className="text-xs text-muted-foreground mt-1">from last week</p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">Conversion Rate</h3>
          <Badge variant="neutral">0%</Badge>
        </div>
        <p className="mt-2 text-3xl font-bold">3.2%</p>
        <p className="text-xs text-muted-foreground mt-1">no change</p>
      </div>
    </div>
  ),
};

// Use case: Status badges
export const StatusBadges = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="positive">Active</Badge>
        <Badge variant="positive">Published</Badge>
        <Badge variant="positive">Completed</Badge>
        <Badge variant="positive">Success</Badge>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Badge variant="negative">Inactive</Badge>
        <Badge variant="negative">Rejected</Badge>
        <Badge variant="negative">Failed</Badge>
        <Badge variant="negative">Error</Badge>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Badge variant="neutral">Pending</Badge>
        <Badge variant="neutral">Draft</Badge>
        <Badge variant="neutral">Processing</Badge>
        <Badge variant="neutral">Queued</Badge>
      </div>
    </div>
  ),
};

// Use case: With icons
export const WithIcons = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="positive" className="gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7-7 7 7" />
        </svg>
        +12.5%
      </Badge>
      <Badge variant="negative" className="gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        -8.2%
      </Badge>
    </div>
  ),
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Default:</span>
        <Badge>Badge</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Secondary:</span>
        <Badge variant="secondary">Badge</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Destructive:</span>
        <Badge variant="destructive">Badge</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Outline:</span>
        <Badge variant="outline">Badge</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Positive:</span>
        <Badge variant="positive">+15.3%</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Negative:</span>
        <Badge variant="negative">-7.1%</Badge>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm w-24">Neutral:</span>
        <Badge variant="neutral">0%</Badge>
      </div>
    </div>
  ),
};
