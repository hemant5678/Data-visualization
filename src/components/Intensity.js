import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Css/intensity.css";
import Chart from "react-apexcharts";

const Intensity = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/data_visualization/src/php/intensity.php"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  // Generate an array of colors based on the years

  // Chart options
  const options = {
    chart: {
      type: "bar",
      height: 250,
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    xaxis: {
      categories: data.map((item) => item.year),
      labels: {
        style: {
          fontSize: "0.7em", // Adjust label font size
          fontWeight: 800, // Adjust label font weight
          fontFamily: "Arial, sans-serif", // Adjust label font family
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Intensity % (In year)",
      align: "center",
      style: {
        fontSize: "20px", // Adjust title font size
        fontWeight: 700, // Adjust title font weight
        fontFamily: "Arial, sans-serif", // Adjust title font family
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px", // Adjust label font size
          fontWeight: 600, // Adjust label font weight
          fontFamily: "Arial, sans-serif", // Adjust label font family
        },
      },
    },
  };

  // Chart series
  const series = [
    {
      name: "Intensity",
      data: data.map((item) => item.intensity),
    },
  ];

  return (
    <div className="intensity">
      <h2>Distributed Column Chart Of Intensity (Year)</h2>
      <Chart
        className="chart"
        options={options}
        series={series}
        type="bar"
        height={430}
      />
    </div>
  );
};

export default Intensity;
