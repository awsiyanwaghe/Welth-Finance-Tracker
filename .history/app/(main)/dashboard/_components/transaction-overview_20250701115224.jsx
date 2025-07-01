import React, { useState } from 'react'

const DashboardOverview = ({accounts, transactions}) => {
    const [selectedAccountId, setSelectedAccountId] = useState(
      accounts.find((a)=> a.isDefault)?.id || accounts[0]?.id
    )

    // Filter transactions for selected account
    const accountTransactions = transactions.filter(
      
    )
  return (
    <div>
      
    </div>
  )
}

export default DashboardOverview