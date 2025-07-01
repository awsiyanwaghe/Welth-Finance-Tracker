import { Card, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";

const AccountCard = ({account}) => {

    const {name, type, balance, id, isDefault} = account
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Switch/>
      </CardHeader>
      <CardComp>
        <p>Card Content</p>
      </CardComp>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
