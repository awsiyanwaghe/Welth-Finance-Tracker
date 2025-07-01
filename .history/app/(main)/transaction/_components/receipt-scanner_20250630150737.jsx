import React from 'react'

const ReceiptScanner = ({onScanComplete}) => {

  
  return (
    <div>
      <input type="file" ref={fileInputRef} />
    </div>
  )
}

export default ReceiptScanner
