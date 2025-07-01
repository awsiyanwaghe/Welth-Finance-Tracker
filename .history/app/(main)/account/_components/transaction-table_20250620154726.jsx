'use client'

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { categoryColors } from "@/data/categories";

const TransactionTable = ({ transactions }) => {

    const filteredAndSortedTransactions = transactions

  const handleSort = () => {};

  return (
    <div className="space-y-4">
      {/* Filters */}

      {/* Transactions */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">Date</div>
              </TableHead>
              <TableHead className="cursor-pointer">Description</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center">Category</div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center">Amount</div>
              </TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead className='w-[50px]'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransactions.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={7} className='text-center text-muted-foreground'>
                        No Transactions Found
                    </TableCell>
                </TableRow>
            ):(
                filteredAndSortedTransactions.map((transaction)=>(
            <TableRow key={transaction.id}>
              <TableCell>
                <Checkbox/>
              </TableCell>
              <TableCell>{format(new Date(transaction.date),"PP")}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className={'capitalize'}>
                <span style={{
                  background: categoryColors[transaction.category]
                }} className="px-2 py-1 rounded text-white text-sm">{transaction.category}</span>
              </TableCell>
              <TableCell
                style={{}} 
              >
                {transaction.type === 'EXPENSE' ? '-' : '+'}
                ${transaction.amount.toFixed(2)}
              </TableCell>
            </TableRow>

                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
