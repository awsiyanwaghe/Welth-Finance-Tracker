import React, { Suspense } from 'react'
import DashboardPage from './layout'
import { BarLoader } from 'react-spinners'

const Dashboard = () => {
  return (
    <div className='px-5 '>
            <h1 className='text-6xl font-bold gradient-title mb-5'>Dashboard</h1>

        {/* Dashboard page */}
        <Suspense fallback={<BarLoader}>
        <DashboardPage/>
            
        </Suspense>

    </div>
  )
}

export default Dashboard
