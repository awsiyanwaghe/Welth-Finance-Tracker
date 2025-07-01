import React, { useState } from 'react'

const DashboardOverview = ({accounts, transactions}) => {
    const [selectedAccountId, setSelectedAccountId] = useState(
      accounts.find((a)=> a.isDefa)
    )
  return (
    <div>
      
    </div>
  )
}

export default DashboardOverview