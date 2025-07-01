
import { getAccountWithTransactions } from '@/actions/accounts'
import React from 'react'

const AccountsPage = ({params}) => {

    const accountData = await getAccountWithTransactions

  return (
    <div>
      {params.id}
    </div>
  )
}

export default AccountsPage
