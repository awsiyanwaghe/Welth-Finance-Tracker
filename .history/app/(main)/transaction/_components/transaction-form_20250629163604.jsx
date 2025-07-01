"use client"

import { createTransaction } from '@/actions/transaction'
import { transactionSchema } from '@/app/lib/schema'
import useFetch from '@/hooks/useFetch'
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

  const {
    
  } = useFetch(createTransaction)

  return (
    <div>
      AddTransactionForm
    </div>
  )
}

export default AddTransactionForm
