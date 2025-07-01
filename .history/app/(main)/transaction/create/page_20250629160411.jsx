import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'

const AddTransactionPage = async() => {

    const accounts = await getUserAccounts()


  return (
    <div>
      Add
    </div>
  )
}

export default AddTransactionPage
