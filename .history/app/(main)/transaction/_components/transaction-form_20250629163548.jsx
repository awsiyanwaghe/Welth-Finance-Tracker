"use client"

import { transactionSchema } from '@/app/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddTransactionForm = ({accounts, categories}) => {

  useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "EXPENSE",
      amount: '',
      description: '',
      accountId: accounts.find((ac)=>ac.isDefault)?.id,
      date: new Date(),
      isRecurring: false
    }
  })

  const {}

  return (
    <div>
      AddTransactionForm
    </div>
  )
}

export default AddTransactionForm
