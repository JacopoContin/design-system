import React from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../components/select';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../components/dialog';
import { Switch } from '../components/switch';
import {
  CheckIcon,
  SettingsIcon,
  SearchIcon,
  BellIcon,
  UserIcon,
  TrendingUpIcon,
} from 'lucide-react';

export default {
  title: 'Examples/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

const StatCard = ({ title, value, change, trend }) => (
  <div className="bg-card border-border rounded-lg border p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground text-sm font-medium">{title}</p>
      {trend && <TrendingUpIcon className="text-success size-4" />}
    </div>
    <div className="mt-2">
      <p className="text-foreground text-3xl font-bold">{value}</p>
      {change && (
        <p className="text-success mt-1 text-xs font-medium">
          +{change}% from last month
        </p>
      )}
    </div>
  </div>
);

const TableRow = ({ name, status, date, amount }) => (
  <tr className="border-border hover:bg-muted/50 border-b transition-colors">
    <td className="px-4 py-3 text-sm font-medium">{name}</td>
    <td className="px-4 py-3">
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
          status === 'Complete'
            ? 'bg-success/10 text-success'
            : 'bg-warning/10 text-warning'
        }`}
      >
        {status}
      </span>
    </td>
    <td className="text-muted-foreground px-4 py-3 text-sm">{date}</td>
    <td className="px-4 py-3 text-sm font-semibold">{amount}</td>
  </tr>
);

export const DashboardExample = () => {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-border bg-card sticky top-0 z-10 border-b shadow-sm">
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Design System Dashboard</h1>
            <nav className="hidden gap-6 md:flex">
              <button className="text-foreground hover:text-primary text-sm font-medium transition-colors">
                Overview
              </button>
              <button className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                Analytics
              </button>
              <button className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                Reports
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <SearchIcon className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search..."
                className="w-64 pl-10"
              />
            </div>

            <Button variant="ghost" size="sm">
              <BellIcon className="size-5" />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <SettingsIcon className="size-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Manage your dashboard preferences
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Enable Notifications
                    </label>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Default View
                    </label>
                    <Select defaultValue="overview">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overview">Overview</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                        <SelectItem value="reports">Reports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="ghost" size="sm">
              <UserIcon className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$45,231"
            change="20.1"
            trend
          />
          <StatCard
            title="Active Users"
            value="2,350"
            change="15.3"
            trend
          />
          <StatCard title="New Projects" value="12" change="8.2" trend />
          <StatCard title="Completion Rate" value="98.5%" change="2.1" trend />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activity Table */}
          <div className="bg-card border-border rounded-lg border shadow-sm lg:col-span-2">
            <div className="border-border flex items-center justify-between border-b p-6">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-muted-foreground px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Project
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    name="Website Redesign"
                    status="Complete"
                    date="Jan 15, 2024"
                    amount="$12,500"
                  />
                  <TableRow
                    name="Mobile App"
                    status="In Progress"
                    date="Jan 14, 2024"
                    amount="$8,200"
                  />
                  <TableRow
                    name="Brand Identity"
                    status="Complete"
                    date="Jan 12, 2024"
                    amount="$15,000"
                  />
                  <TableRow
                    name="Marketing Campaign"
                    status="In Progress"
                    date="Jan 10, 2024"
                    amount="$6,750"
                  />
                  <TableRow
                    name="E-commerce Platform"
                    status="Complete"
                    date="Jan 8, 2024"
                    amount="$22,000"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card border-border space-y-6 rounded-lg border p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Common tasks and shortcuts
              </p>
            </div>

            <div className="space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full justify-start" variant="outline">
                    <CheckIcon className="mr-2 size-4" />
                    Create New Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>
                      Add a new project to your dashboard
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Project Name
                      </label>
                      <Input placeholder="Enter project name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Category
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button>Create Project</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button className="w-full justify-start" variant="outline">
                <UserIcon className="mr-2 size-4" />
                Invite Team Member
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <SettingsIcon className="mr-2 size-4" />
                Manage Settings
              </Button>
            </div>

            <div className="border-border rounded-lg border bg-gradient-to-br from-primary/5 to-transparent p-4">
              <h4 className="font-semibold">Need Help?</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                Check our documentation or contact support
              </p>
              <Button className="mt-3 w-full" variant="secondary" size="sm">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
