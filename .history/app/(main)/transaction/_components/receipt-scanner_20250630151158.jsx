import { scanReceipt } from "@/actions/transaction";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { Camera } from "lucide-react";
import React, { useRef } from "react";

const ReceiptScanner = ({ onScanComplete }) => {
  const fileInputRef = useRef();

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = () => {}

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
          if(file) handleReceiptScan(file)
        }}
      />
      <Button>{scanReceiptLoading ? (<>
      </>) : (<>
        <Camera className="mr-2" />
        <span>Scan Receipt with AI</span>
      </>)}</Button>
    </div>
  );
};

export default ReceiptScanner;
