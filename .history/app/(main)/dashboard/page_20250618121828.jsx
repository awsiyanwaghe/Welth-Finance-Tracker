import CreateAccountDrawer from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='px-5'>
        {/* Budget Progress */}

        {/* Overview */}

        {/* Accounts Grid */}
        <div>
          <CreateAccountDrawer>
            <Card>
              <CardContent>
                <Plus className='h-10 ' />
              </CardContent>
            </Card>
          </CreateAccountDrawer>
        </div>
    </div>
  )
}

export default DashboardPage

