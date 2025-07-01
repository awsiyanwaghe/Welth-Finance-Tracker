"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddTransactionForm = () => {

  useForm({
    resolver: zodResolver
  })

  return (
    <div>
      AddTransactionForm
    </div>
  )
}

export default AddTransactionForm
