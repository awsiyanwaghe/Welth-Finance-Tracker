import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const AccountCard = ({account}) => {

    const {name, type, balance, id, isDefault} = account
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Switch/>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
            ${parseFloat(balance).toFixed(2)}
        </div>
        <p className="text-xs text-muted-foreground capitalize">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
        </p>
      </CardContent>
      <CardFooter>
        <div>
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
