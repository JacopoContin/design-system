import { Heading, Text, Label, Code } from '../components/Typography';
import { Input } from '../components/Input';

export default {
  title: 'Components/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

// Heading component stories
export const Headings = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Heading as="h1">Heading 1</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-4xl lg:text-5xl
        </p>
      </div>
      <div>
        <Heading as="h2">Heading 2</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-3xl lg:text-4xl
        </p>
      </div>
      <div>
        <Heading as="h3">Heading 3</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-2xl lg:text-3xl
        </p>
      </div>
      <div>
        <Heading as="h4">Heading 4</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-xl lg:text-2xl
        </p>
      </div>
      <div>
        <Heading as="h5">Heading 5</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-lg lg:text-xl
        </p>
      </div>
      <div>
        <Heading as="h6">Heading 6</Heading>
        <p className="text-sm text-muted-foreground mt-1">
          text-base lg:text-lg
        </p>
      </div>
    </div>
  ),
};

// Text size variants
export const TextSizes = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Text size="xs">Extra small text (xs)</Text>
        <p className="text-xs text-muted-foreground mt-1">text-xs</p>
      </div>
      <div>
        <Text size="sm">Small text (sm)</Text>
        <p className="text-xs text-muted-foreground mt-1">text-sm</p>
      </div>
      <div>
        <Text size="base">Base text (default)</Text>
        <p className="text-xs text-muted-foreground mt-1">text-base</p>
      </div>
      <div>
        <Text size="lg">Large text (lg)</Text>
        <p className="text-xs text-muted-foreground mt-1">text-lg</p>
      </div>
      <div>
        <Text size="xl">Extra large text (xl)</Text>
        <p className="text-xs text-muted-foreground mt-1">text-xl</p>
      </div>
    </div>
  ),
};

// Text color variants
export const TextVariants = {
  render: () => (
    <div className="space-y-4">
      <Text variant="default">
        Default text - Uses foreground color
      </Text>
      <Text variant="muted">
        Muted text - Uses muted-foreground color
      </Text>
      <Text variant="error">
        Error text - Uses error color for warnings and errors
      </Text>
      <Text variant="success">
        Success text - Uses success color for positive feedback
      </Text>
      <Text variant="warning">
        Warning text - Uses warning color for cautionary messages
      </Text>
    </div>
  ),
};

// Label component
export const Labels = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="required" required>
          Required Field
        </Label>
        <Input id="required" placeholder="This field is required" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="error" state="error">
          Error Label
        </Label>
        <Input
          id="error"
          state="error"
          defaultValue="Invalid input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="success" state="success">
          Success Label
        </Label>
        <Input
          id="success"
          state="success"
          defaultValue="Valid input"
        />
      </div>
    </div>
  ),
};

// Code component
export const CodeText = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">
        Use the <Code>useState</Code> hook to manage component state.
      </p>
      <p className="text-sm">
        Install dependencies with <Code>npm install</Code> command.
      </p>
      <p className="text-sm">
        The component accepts a <Code>variant</Code> prop which can be{' '}
        <Code>primary</Code>, <Code>secondary</Code>, or <Code>outline</Code>.
      </p>
    </div>
  ),
};

// Combined usage example
export const CombinedExample = {
  render: () => (
    <article className="max-w-2xl space-y-4">
      <Heading as="h1">Design Systems in React</Heading>

      <Text variant="muted" size="lg">
        Building reusable, themeable component libraries for modern web applications.
      </Text>

      <Heading as="h2">Getting Started</Heading>

      <Text>
        A design system is a collection of reusable components, guided by clear standards,
        that can be assembled together to build applications. Using <Code>React</Code> and{' '}
        <Code>Tailwind CSS</Code>, we can create flexible and maintainable design systems.
      </Text>

      <Text>
        The key benefits include:
      </Text>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <Text as="li">Consistent user experience across applications</Text>
        <Text as="li">Faster development with reusable components</Text>
        <Text as="li">Easier maintenance and updates</Text>
        <Text as="li">Better accessibility out of the box</Text>
      </ul>

      <Heading as="h3">Component Composition</Heading>

      <Text>
        Components should be composable and flexible. Use the <Code>asChild</Code> prop
        pattern from Radix UI to allow for better composition without wrapper divs.
      </Text>

      <Text variant="success" size="sm">
        ✓ This approach leads to cleaner, more maintainable code.
      </Text>
    </article>
  ),
};

// Responsive heading example
export const ResponsiveHeadings = {
  render: () => (
    <div className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <Heading as="h1">Responsive by Default</Heading>
        <Text variant="muted" className="mt-2">
          All heading sizes automatically adjust on larger screens using Tailwind's
          responsive utilities (lg: breakpoint).
        </Text>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <Text size="sm" variant="muted" className="mb-4">
          Resize your browser to see the headings scale:
        </Text>
        <Heading as="h2">This heading grows on large screens</Heading>
        <Heading as="h4" className="mt-4">
          Smaller headings also scale proportionally
        </Heading>
      </div>
    </div>
  ),
};
