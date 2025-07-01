"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers'

const CreateAccountDrawer = ({children}) => {

    const [open, setOpen] = useState(false)

    useForm({
        resolver: zodResolver(acco)
    })

  return (
    <Drawer open={open} onOpenChange={setOpen} >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Account</DrawerTitle>
        </DrawerHeader>

        <div>
            <form action="">
                
            </form>
        </div>

      </DrawerContent>
    </Drawer>
  );
};

export default CreateAccountDrawer;
