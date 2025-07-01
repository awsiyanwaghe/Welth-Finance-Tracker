
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
    <div className='space-y-8 px-5 flex gap-4 items-end justify-between'>
        <div>
            <h1 className='text-5xl sm:tex'>{account.name}</h1>
            <p>{account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account</p>
        </div>

        <div>
            <div>${parseFloat(account.balance).toFixed(2)}</div>
            <p>{account._count.transactions} Transactions</p>
        </div>

        {/* Chart section */}

        {/* Transaction table */}
    </div>
  )
}

export default AccountsPage
