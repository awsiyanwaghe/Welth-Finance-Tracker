"use client";

import { endOfDay, format, startOfDay, subDays } from "date-fns";
import React, { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const DATE_RANGES = {
  "7D": { label: "Last 7 Days", days: 7 },
  "1M": { label: "Last Month", days: 30 },
  "3M": { label: "Last 3 Months", days: 90 },
  "6M": { label: "Last 6 Months", days: 180 },
  ALL: { label: "All Time", days: null },
};

const AccountChart = ({ transactions }) => {
  const [dataRange, setDataRange] = useState("1M");

  const filteredData = useMemo(() => {
    const range = DATE_RANGES[dataRange];
    const now = new Date();
    const startDate = range.days
      ? startOfDay(subDays(now, range.days))
      : startOfDay(new Date(0));

    // filter transactions within date range
    const filtered = transactions.filter(
        (t) => new Date(t.date) >= startDate && new Date(t.date) <= endOfDay(now)
    )

    const grouped = filtered.reduce((acc, transaction)=>{
        const date = transaction.date ? format(new Date(transaction.date), 'MM dd') : "N/A"

        if(!acc[date]){
            acc[date] = {date, income: 0, expense: 0}
        }
        if(transaction.type === "INCOME"){
            acc[date] = 
        }
    },{})

  }, [transactions, dataRange]);

  return <div></div>;
};

export default AccountChart;
