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
        initialBudget?.amount.
    )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
