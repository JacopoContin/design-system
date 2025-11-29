import { Button } from '../components/button';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../components/tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

// Basic tooltip
export const Basic = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// With custom content
export const CustomContent = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover for tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip with custom styling</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Different sides
export const DifferentSides = {
  render: () => (
    <div className="flex flex-col items-center gap-24">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Top (default)</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <div className="flex gap-24">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Multiple tooltips
export const MultipleTooltips = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Save</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save your changes (Cmd+S)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Edit</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit this item (Cmd+E)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Share</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Share with others</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete permanently (cannot be undone)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Rich content tooltip
export const RichContent = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>User Info</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">John Doe</p>
          <p className="text-xs">john.doe@example.com</p>
          <p className="text-xs mt-1">Last active: 2 hours ago</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

// Icon with tooltip
export const IconButton = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="h-10 w-10 rounded-md border-2 border-border hover:bg-muted flex items-center justify-center transition-colors">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="h-10 w-10 rounded-md border-2 border-border hover:bg-muted flex items-center justify-center transition-colors">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
