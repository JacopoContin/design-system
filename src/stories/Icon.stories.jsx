import {
  Icon,
  CheckIcon,
  CloseIcon,
  AlertIcon,
  InfoIcon,
  HeartIcon,
  SettingsIcon,
} from '../components/icon';
import { Button } from '../components/button';

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Icon size',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'muted', 'error', 'success', 'warning'],
      description: 'Icon color variant',
    },
  },
};

// Icon sizes
export const Sizes = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon size="xs">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">xs (12px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">sm (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="md">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">md (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="lg">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">lg (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">xl (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="2xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">2xl (40px)</span>
      </div>
    </div>
  ),
};

// Icon color variants
export const Variants = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center gap-2">
        <Icon variant="default" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="primary" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="secondary" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="muted" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">muted</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="error" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">error</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="success" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon variant="warning" size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">warning</span>
      </div>
    </div>
  ),
};

// All included icons
export const IncludedIcons = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <CheckIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">CheckIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <CloseIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">CloseIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <AlertIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">AlertIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <InfoIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">InfoIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <HeartIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">HeartIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">
          <SettingsIcon />
        </Icon>
        <span className="text-xs text-muted-foreground">SettingsIcon</span>
      </div>
    </div>
  ),
};

// Icons in buttons
export const InButtons = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        <Icon size="sm">
          <CheckIcon />
        </Icon>
        Save Changes
      </Button>

      <Button variant="destructive">
        <Icon size="sm">
          <CloseIcon />
        </Icon>
        Delete
      </Button>

      <Button variant="outline">
        <Icon size="sm">
          <SettingsIcon />
        </Icon>
        Settings
      </Button>

      <Button variant="ghost">
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        Like
      </Button>

      <Button variant="secondary">
        <Icon size="sm">
          <InfoIcon />
        </Icon>
        Learn More
      </Button>
    </div>
  ),
};

// Semantic usage
export const SemanticUsage = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="flex items-center gap-3 p-4 rounded-lg border border-success bg-success/10">
        <Icon variant="success" size="lg">
          <CheckIcon />
        </Icon>
        <div>
          <p className="font-medium text-success">Success!</p>
          <p className="text-sm text-muted-foreground">
            Your changes have been saved successfully.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg border border-error bg-error/10">
        <Icon variant="error" size="lg">
          <AlertIcon />
        </Icon>
        <div>
          <p className="font-medium text-error">Error</p>
          <p className="text-sm text-muted-foreground">
            An error occurred while processing your request.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg border border-warning bg-warning/10">
        <Icon variant="warning" size="lg">
          <AlertIcon />
        </Icon>
        <div>
          <p className="font-medium text-warning">Warning</p>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. Please proceed with caution.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
        <Icon variant="primary" size="lg">
          <InfoIcon />
        </Icon>
        <div>
          <p className="font-medium">Information</p>
          <p className="text-sm text-muted-foreground">
            Did you know you can customize your profile settings?
          </p>
        </div>
      </div>
    </div>
  ),
};

// Icon-only buttons
export const IconButtons = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" className="h-10 w-10 p-0">
        <Icon size="md">
          <HeartIcon />
        </Icon>
      </Button>

      <Button variant="outline" className="h-10 w-10 p-0">
        <Icon size="md">
          <SettingsIcon />
        </Icon>
      </Button>

      <Button variant="outline" className="h-10 w-10 p-0">
        <Icon size="md">
          <CloseIcon />
        </Icon>
      </Button>

      <Button variant="primary" className="h-10 w-10 p-0">
        <Icon size="md">
          <CheckIcon />
        </Icon>
      </Button>

      <Button variant="destructive" className="h-10 w-10 p-0">
        <Icon size="md">
          <AlertIcon />
        </Icon>
      </Button>

      <Button variant="ghost" className="h-10 w-10 p-0">
        <Icon size="md">
          <InfoIcon />
        </Icon>
      </Button>
    </div>
  ),
};

// Custom SVG icon example
export const CustomIcon = {
  render: () => {
    // Example custom SVG icon
    const CustomStarIcon = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );

    return (
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Icon variant="warning" size="xl">
            <CustomStarIcon />
          </Icon>
          <span className="text-xs text-muted-foreground">Custom Star Icon</span>
        </div>
        <div className="text-sm max-w-md">
          <p className="font-medium mb-2">Using Custom Icons:</p>
          <code className="block bg-muted p-3 rounded text-xs">
            {`const CustomIcon = (props) => (
  <svg {...props}>
    {/* SVG path */}
  </svg>
);

<Icon size="xl">
  <CustomIcon />
</Icon>`}
          </code>
        </div>
      </div>
    );
  },
};
