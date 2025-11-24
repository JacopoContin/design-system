import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/Card';
import { Button } from '../components/Button';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

// Basic card with all sections
export const Default = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card description that provides additional context.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This is the main content area of the card. You can place any content here,
          including text, images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button variant="primary" className="flex-1">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

// Card with only header and content
export const Simple = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A simple card with just a title and content section.
        </p>
      </CardContent>
    </Card>
  ),
};

// Card with interactive content
export const WithForm = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Enter your information to create a new account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  ),
};

// Card with stats
export const Stats = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[200px]">
        <CardHeader className="pb-3">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-4xl">$45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-success">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="pb-3">
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="text-4xl">2,350</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-error">-4.3% from last month</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="pb-3">
          <CardDescription>New Signups</CardDescription>
          <CardTitle className="text-4xl">+573</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-success">+12.5% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Notification card
export const Notification = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">New Update Available</CardTitle>
            <CardDescription className="mt-1">2 hours ago</CardDescription>
          </div>
          <span className="h-2 w-2 rounded-full bg-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Version 2.0.0 is now available. This update includes new features,
          bug fixes, and performance improvements.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button size="sm">Update Now</Button>
      </CardFooter>
    </Card>
  ),
};

// Product card
export const Product = {
  render: () => (
    <Card className="w-[300px]">
      <div className="aspect-video bg-muted rounded-t-lg" />
      <CardHeader>
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>High-quality wireless audio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$299</span>
          <span className="text-sm text-success">In Stock</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};
