import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

const Topic = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/data_visualization/src/php/topic.php"
          );
          setData(response.data);
          console.log(data);
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
        series: [7,5,9,10,15,19,25,6,3,8],
        options: {
          chart: {
            type: 'donut',
          },
          colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
          dataLabels: {
            enabled: true
          },
          fill: {
            type: 'gradient',
          },
          labels: data.map(item => item.topics),
        },
      };

  return (
    <div>
        <h2>Topics Donut</h2>
        <Chart classname="chartt"
        options={formattedData.options}
        series={formattedData.series}
        type="donut"
        width="600"
      />
    </div>
  )
}

export default Topic