import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'

const AddTransactionPage = async() => {

    const accounts = await getUserAccounts()


  return (
    <div className='max-w-'>
        <h1 className='text-5xl gradient-title mb-8'>Add Transaction</h1>
    </div>
  )
}

export default AddTransactionPage
