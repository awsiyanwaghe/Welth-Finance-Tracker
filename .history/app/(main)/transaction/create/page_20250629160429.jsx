import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'

const AddTransactionPage = async() => {

    const accounts = await getUserAccounts()


  return (
    <div>
        <h1 className=''>Add Transaction</h1>
    </div>
  )
}

export default AddTransactionPage
