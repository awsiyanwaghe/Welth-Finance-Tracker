
import { getAccountWithTransactions } from '@/actions/accounts'
import { notFound } from 'next/navigation'
import React from 'react'

const AccountsPage = async({params}) => {

    const accountData = await getAccountWithTransactions(params.id)

    if(!accountData){
        notFound()
    }

    const {transactions, ...account} = accountData

  return (
    <div>
        <div></div>
    </div>
  )
}

export default AccountsPage
