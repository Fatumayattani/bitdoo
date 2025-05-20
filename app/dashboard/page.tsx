"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentStreamCard } from "@/components/payments/PaymentStreamCard";
import {
  Activity,
  Bitcoin,
  Clock,
  DollarSign,
  Zap,
  Briefcase,
  BarChart2,
} from "lucide-react";
import { MOCK_USERS } from "@/lib/types";

export default function Dashboard() {
  const [user] = useState(MOCK_USERS[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {user.name}
              </p>
            </div>
            <div className="mt-4 md:mt-0 space-x-2">
              <Button>New Project</Button>
              <Button variant="outline">View Reports</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
                <Bitcoin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.0432 BTC</div>
                <p className="text-xs text-muted-foreground">
                  $2,154.84 USD
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Streams
                </CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  16,000 sats/hr rate
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  2 in progress
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  This Week
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">162,400 sats</div>
                <p className="text-xs text-muted-foreground">
                  +23% from last week
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="streams" className="mb-8">
            <TabsList>
              <TabsTrigger value="streams">Active Streams</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="streams" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PaymentStreamCard streamId="1" />
                <Card>
                  <CardHeader>
                    <CardTitle>Start a New Stream</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Create a new payment stream to start paying a freelancer in
                      real-time as they work.
                    </p>
                    <Button className="w-full">Create Payment Stream</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Website Redesign</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Status</span>
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 text-xs font-medium rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Freelancer</span>
                      <span>Sarah Johnson</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Budget</span>
                      <span>0.01 BTC</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span className="text-muted-foreground">Deadline</span>
                      <span>June 30, 2025</span>
                    </div>
                    <Button className="w-full">View Project</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile App Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Status</span>
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 text-xs font-medium rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Freelancer</span>
                      <span>Mike Chen</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Budget</span>
                      <span>0.02 BTC</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span className="text-muted-foreground">Deadline</span>
                      <span>August 15, 2025</span>
                    </div>
                    <Button className="w-full">View Project</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Writing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Status</span>
                      <span className="bg-blue-500/10 text-blue-500 px-2 py-1 text-xs font-medium rounded-full">
                        Open
                      </span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Freelancer</span>
                      <span>Not Assigned</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-muted-foreground">Budget</span>
                      <span>0.005 BTC</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span className="text-muted-foreground">Deadline</span>
                      <span>July 10, 2025</span>
                    </div>
                    <Button className="w-full">Find Freelancer</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-500/10 rounded-full">
                          <DollarSign className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Payment to Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">
                            Website Redesign
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">0.0003 BTC</p>
                        <p className="text-sm text-muted-foreground">5 min ago</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-500/10 rounded-full">
                          <DollarSign className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Payment to Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">
                            Website Redesign
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">0.0002 BTC</p>
                        <p className="text-sm text-muted-foreground">15 min ago</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-500/10 rounded-full">
                          <DollarSign className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Payment to Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">
                            Website Redesign
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">0.0001 BTC</p>
                        <p className="text-sm text-muted-foreground">30 min ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border rounded-md">
                      <p className="text-muted-foreground">
                        Payment chart will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Total Hours
                          </span>
                        </div>
                        <span className="font-medium">42h 30m</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Avg. Rate
                          </span>
                        </div>
                        <span className="font-medium">15,000 sats/hr</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Bitcoin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Total Paid
                          </span>
                        </div>
                        <span className="font-medium">0.0102 BTC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <BarChart2 className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Projects</span>
                        </div>
                        <span className="font-medium">4</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}