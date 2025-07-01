
import { getAccountWithTransactions } from '@/actions/accounts'
import React from 'react'

const AccountsPage = ({params}) => {

    const accountData = await getAccountWithTransactions(params.id)
    

  return (
    <div>
      {params.id}
    </div>
  )
}

export default AccountsPage
