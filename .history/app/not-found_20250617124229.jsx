import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className=''>
      <h1 className='text-6xl font-bold gradient-title mb-4'>404</h1>
      <h1 className='text-2xl font-semibold  mb-4'>Page Not Found</h1>
      <p className='text-gray-600 mb-8'>Oops1 The page you&apos;re looking for deosn&apos;t exist or has been moved.</p>
    <Link href={'/'}>
    <Button>Retun Home</Button>
    </Link>
    </div>
  )
}

export default NotFound
