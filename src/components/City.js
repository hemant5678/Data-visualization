import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';

const City = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/data_visualization/src/php/city.php"
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

  const formattedData = {
    options: {
      chart: {
        type: 'polarArea',
        height: 500,
      },
      labels: data.map(item => item.city),
      stroke: {
        colors: ['#000000']
      },
      fill: {
        opacity: 0.9,
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    series: data.map(item => item.intensity),
  };


  return (
    <div>
      <h2>City Polar Area </h2>
      <Chart
        options={formattedData.options}
        series={formattedData.series}
        type="polarArea"
        height={400}
      />
    </div>
  );
};

export default City;
