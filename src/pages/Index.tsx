
import { AuthForm } from "@/components/AuthForm";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-4xl font-bold">Bill Minder Wallet</h1>
        <p className="text-lg text-muted-foreground">
          Manage your bills with ease
        </p>
      </div>
      <AuthForm />
    </div>
  );
};

export default Index;
