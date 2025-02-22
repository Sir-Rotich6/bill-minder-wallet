
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const BillScheduleForm = () => {
  const [amount, setAmount] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const amountNum = parseFloat(amount);
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid payment amount",
        variant: "destructive",
      });
      return;
    }
    
    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      toast({
        title: "Invalid day",
        description: "Please enter a valid day (1-31)",
        variant: "destructive",
      });
      return;
    }
    
    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      toast({
        title: "Invalid month",
        description: "Please enter a valid month (1-12)",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bill scheduled",
      description: `Payment of $${amount} scheduled for day ${day} of month ${month}`,
    });

    // Reset form
    setAmount("");
    setDay("");
    setMonth("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium mb-1">
          Payment Amount ($)
        </label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="day" className="block text-sm font-medium mb-1">
            Day of Month
          </label>
          <Input
            id="day"
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="1-31"
            required
          />
        </div>
        
        <div>
          <label htmlFor="month" className="block text-sm font-medium mb-1">
            Month
          </label>
          <Input
            id="month"
            type="number"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="1-12"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Schedule Bill Payment
      </Button>
    </form>
  );
};

export default BillScheduleForm;
