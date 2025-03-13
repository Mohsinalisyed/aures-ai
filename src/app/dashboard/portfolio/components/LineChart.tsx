"use client";
import React, { useState } from "react";
import "./style.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker"; // Ensure you have @faker-js/faker installed

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true, // Ensures chart is responsive
  maintainAspectRatio: false, // Disables the fixed aspect ratio to allow responsive resizing
  plugins: {
    legend: {
      display: false, // Hide dataset label (legend)
    },
    title: {
      display: false, // Hide chart title
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adds curve to the line (0 = straight, 1 = max curve)
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // Set the x-axis label text color to white
      },
      grid: {
        color: "white",
        border: "red dashed 1px",
        lineWidth: 1,
      },
    },
    y: {
      ticks: {
        color: "white", // Set the y-axis label text color to white
      },
      grid: {
        display: false,
        color: "white",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateData = (count: number) => {
  return Array.from({ length: count }, () =>
    faker.number.int({ min: 100, max: 1000 })
  );
};

const LineChart = () => {
  const [timePeriod, setTimePeriod] = useState("1 Month");

  // Dynamically update the labels and data based on the time period
  let periodLabels = labels;
  let periodData = generateData(labels.length);

  if (timePeriod === "1 Hour") {
    periodLabels = [
      "5m",
      "10m",
      "15m",
      "20m",
      "25m",
      "30m",
      "35m",
      "40m",
      "45m",
      "50m",
      "55m",
      "60m",
    ];
    periodData = generateData(12);
  } else if (timePeriod === "1 Day") {
    periodLabels = [
      "1h",
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "10h",
      "11h",
      "12h",
      "13h",
      "14h",
      "15h",
      "16h",
      "17h",
      "18h",
      "19h",
      "20h",
      "21h",
      "22h",
      "23h",
      "24h",
    ];
    periodData = generateData(24);
  } else if (timePeriod === "1 Week") {
    periodLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    periodData = generateData(7);
  } else if (timePeriod === "1 Month") {
    periodLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    periodData = generateData(4);
  } else if (timePeriod === "1 Year") {
    periodLabels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    periodData = generateData(12);
  }

  const data = {
    labels: periodLabels,
    datasets: [
      {
        data: periodData,
        borderColor: "white",
        width: 0,
      },
    ],
  };

  return (
    <div className="bg-hover_background_gradient p-2 rounded-[20px] w-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-white text-14 lg:text-24">Portfolio Balance</h2>
        </div>
        <div className="w-[184px] lg:w-[256px] h-[24px] lg:h-[36px] rounded-[24px] flex items-center justify-between bg-sidebar_background px-2  text-white">
          <button
            onClick={() => setTimePeriod("1 Hour")}
            className="duration_button"
          >
            1Hr
          </button>
          <button
            onClick={() => setTimePeriod("1 Day")}
            className="duration_button"
          >
            1D
          </button>
          <button
            onClick={() => setTimePeriod("1 Week")}
            className="duration_button"
          >
            1W
          </button>
          <button
            onClick={() => setTimePeriod("1 Month")}
            className="duration_button"
          >
            1M
          </button>
          <button
            onClick={() => setTimePeriod("1 Year")}
            className="duration_button"
          >
            1Y
          </button>
          <button
            onClick={() => setTimePeriod("1 Year")}
            className="duration_button"
          >
            All
          </button>
        </div>
      </div>
      <h2 className="font-bold text-white mb-4 text-24">$614.76</h2>
      <div className="chart-container w-full h-[164px] ">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
