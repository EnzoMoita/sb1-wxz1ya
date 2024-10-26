import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Pay Rent with Credit Card
                <span className="text-primary"> Hassle-Free</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transform your rent payments into reward points. Simple, secure, and convenient credit card payments for both tenants and landlords.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-12 px-8">Get Started</Button>
              <Button variant="outline" size="lg" className="h-12 px-8">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 space-y-4 border-none bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center space-x-4">
                <CreditCard className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Flexible Payments</h3>
              </div>
              <p className="text-muted-foreground">
                Pay rent using any major credit card and earn rewards while maintaining your cash flow.
              </p>
            </Card>
            <Card className="p-6 space-y-4 border-none bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Secure Platform</h3>
              </div>
              <p className="text-muted-foreground">
                Bank-level encryption and security measures to protect your payment information.
              </p>
            </Card>
            <Card className="p-6 space-y-4 border-none bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Instant Processing</h3>
              </div>
              <p className="text-muted-foreground">
                Payments are processed immediately and your landlord gets notified in real-time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {[
                "Earn credit card rewards on your rent payments",
                "No more writing checks or carrying cash",
                "Set up automatic payments to never miss a due date",
                "24/7 customer support",
                "Clear transaction history and payment receipts",
                "Multiple payment options available"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Modern apartment building"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Simplify Your Rent Payments?</h2>
            <p className="max-w-[600px] text-primary-foreground/90">
              Join thousands of happy tenants who have made rent payments easier with our platform.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}