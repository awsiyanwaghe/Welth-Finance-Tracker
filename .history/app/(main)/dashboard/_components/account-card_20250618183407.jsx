import { Switch } from "@/components/ui/switch";
import React from "react";

const AccountCard = ({account}) => {

    const {name, type, balance, id, isDefault} = account
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Switch/
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
