import React, { useRef } from 'react'

const ReceiptScanner = ({onScanComplete}) => {

  const fileInputRef = useRef()

  return (
    <div>
      <input type="file" ref={fileInputRef} />
    </div>
  )
}

export default ReceiptScanner
