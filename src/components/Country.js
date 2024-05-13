import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

const Country = () => {

    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/data_visualization/src/php/country.php"
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
            type: 'bar',
            
          },
          plotOptions: {
            bar: {
              horizontal: true,
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
            
          },
          xaxis: {
            categories: data.map(item => item.country),
            title: {
              text: 'Intensity',
            },
          },
       
      
        },
        series: [{
          name: 'Intensity',
          data: data.map(item => item.intensity),
        }],
      };
  
     

  return (
    <div>
         <h2>Country Bar Chart </h2>
         <Chart
        options={formattedData.options}
        series={formattedData.series}
        type="bar"
        height={500}
      />
    </div>
    
  )
};

export default Country