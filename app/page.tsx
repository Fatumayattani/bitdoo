import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bitcoin, Zap, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Stream Bitcoin payments to freelancers in real-time
                </h1>
                <p className="text-xl text-muted-foreground">
                  Bitdoo enables clients to pay freelancers continuously as work 
                  progresses using the Lightning Network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/auth/register">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl"></div>
                <div className="absolute inset-0 backdrop-blur-3xl rounded-xl border"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
                  <div className="bg-card border shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-lg">Active Payment</h3>
                      <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-500/10 rounded-full">
                        Streaming
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-muted h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-full w-3/4 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Paid so far</span>
                        <span className="font-mono">0.00324 BTC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Rate</span>
                        <span className="font-mono">12,000 sats/hr</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Duration</span>
                        <span>1h 12m</span>
                      </div>
                      <Button className="w-full">Pause Stream</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bitdoo?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform reinvents how freelancers get paid with instant Bitcoin payments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
                <p className="text-muted-foreground">
                  No more waiting for payment clearance. Get paid in real-time as you work.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                  <Bitcoin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bitcoin Native</h3>
                <p className="text-muted-foreground">
                  Built on Lightning Network for negligible fees and instant Bitcoin transfers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Escrow</h3>
                <p className="text-muted-foreground">
                  Funds are securely held and released as milestones are completed.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
                <p className="text-muted-foreground">
                  Built-in time tracking synchronized with payment streams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Bitdoo streamlines the freelance payment process with continuous Bitcoin streaming.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create a Project</h3>
                <p className="text-muted-foreground">
                  Set up your project with details, scope, and payment rate.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallets</h3>
                <p className="text-muted-foreground">
                  Link your Lightning wallet to enable payment streaming.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Working & Earning</h3>
                <p className="text-muted-foreground">
                  Clients stream payments in real-time as work progresses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to revolutionize your freelance payments?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join Bitdoo today and experience the future of freelance work with streaming Bitcoin payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/register">Sign Up Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}