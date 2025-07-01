import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const BudgetProgress = ({initialBudget, currentExpenses}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newBudget, setNewBudget] = useState(
        initialBudget?.amount?.toString() || ''
    )

    const percentageUsed = initialBudget ? (currentExpenses/initialBudget.amount) * 100 : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Budget (Default Account)</CardTitle>
        
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
