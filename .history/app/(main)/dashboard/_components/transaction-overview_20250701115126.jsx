import React, { useState } from 'react'

const DashboardOverview = ({accounts, transactions}) => {
    const [selectedAccountId, setSelectedAccountId] = useState(
      accounts.find((a)=> a.isDefault)
    )
  return (
    <div>
      
    </div>
  )
}

export default DashboardOverview