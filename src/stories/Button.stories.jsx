import { Button } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child using Radix Slot',
    },
  },
};

// Default button
export const Primary = {
  args: {
    variant: 'default',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Link = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Size variations
export const Small = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium = {
  args: {
    children: 'Medium Button',
  },
};

export const Large = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: '🔍',
  },
};

// States
export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button variant="outline" size="icon">🔍</Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
