"use client"

import { transactionSchema } from '@/app/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddTransactionForm = () => {

  useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "EXPENSE",
      amount: '',
      description: '',
      
    }
  })

  return (
    <div>
      AddTransactionForm
    </div>
  )
}

export default AddTransactionForm
