import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';


const Region = () => {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/data_visualization/src/php/region.php"
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

   
    const formatDataForTreemap = () => {
      // Format your fetched data here if needed
      return data.map(item => ({
          x: item.region,
          y: item.intensity
      }));
  };
    
  
    const options = {
      chart: {
          type: 'treemap',
          
      },
      title: {
          text: 'Data Intensity by Region',
          align: 'center',
          style: {
            fontSize: "17px", // Adjust label font size
            fontWeight: 800, // Adjust label font weight
            color:"#f08205",
            fontFamily: "Arial, sans-serif", // Adjust label font family
          },
          
      },
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      },
      
      series: [{
          data: formatDataForTreemap()
      }],
      legend: {
          show: false
      },
      dataLabels: {
        style: {
            fontSize: '40px', // Example font size
            
        }
    },
  };
   


  return (
    <div>
        <h2>Region Distributed Treemap</h2>
        <Chart options={options} series={options.series} type="treemap" height={430}/>
        </div>
  )
}

export default Region