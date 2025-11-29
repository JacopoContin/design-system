import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/sidebar"
import tableData from "./data.json"

export function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="@container/main flex flex-1 flex-col gap-4 p-0 pt-4">
          <SectionCards />
          <div className="grid auto-rows-min gap-4 px-4 md:grid-cols-3 lg:px-6">
            <div className="bg-muted/50 aspect-video rounded-xl md:col-span-2" >
              <ChartAreaInteractive />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="px-4 lg:px-6">
            <DataTable data={tableData} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
