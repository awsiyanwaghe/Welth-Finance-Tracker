import { scanReceipt } from '@/actions/transaction'
import useFetch from '@/hooks/useFetch'
import React, { useRef } from 'react'

const ReceiptScanner = ({onScanComplete}) => {

  const fileInputRef = useRef()

  const {

  } = useFetch(scanReceipt)

  return (
    <div>
      <input type="file" ref={fileInputRef} />
    </div>
  )
}

export default ReceiptScanner
