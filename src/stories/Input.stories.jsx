import { Input } from '../components/input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Validation state',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

// Default input
export const Default = {
  args: {
    state: 'default',
    placeholder: 'Enter text...',
  },
};

export const WithValue = {
  args: {
    state: 'default',
    defaultValue: 'Sample text',
    placeholder: 'Enter text...',
  },
};

// Validation states
export const ErrorState = {
  args: {
    state: 'error',
    defaultValue: 'Invalid input',
    placeholder: 'Enter text...',
  },
};

export const SuccessState = {
  args: {
    state: 'success',
    defaultValue: 'Valid input',
    placeholder: 'Enter text...',
  },
};

// Input types
export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

export const Number = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};

// Disabled state
export const Disabled = {
  args: {
    disabled: true,
    defaultValue: 'Disabled input',
  },
};

// Form example
export const FormExample = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="you@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="Enter password" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Username (Error)</label>
        <Input
          state="error"
          defaultValue="ab"
          placeholder="Enter username"
        />
        <span className="text-sm text-error">Username must be at least 3 characters</span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Email (Success)</label>
        <Input
          state="success"
          defaultValue="user@example.com"
          type="email"
        />
        <span className="text-sm text-success">Email is valid</span>
      </div>
    </div>
  ),
};
