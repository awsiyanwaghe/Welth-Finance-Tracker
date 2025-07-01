import { scanReceipt } from "@/actions/transaction";
import useFetch from "@/hooks/useFetch";
import React, { useRef } from "react";

const ReceiptScanner = ({ onScanComplete }) => {
  const fileInputRef = useRef();

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  return (
    <div>
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e)=>{
          const file = e.target.files[0];
          if(file)
        }}
      />
    </div>
  );
};

export default ReceiptScanner;
