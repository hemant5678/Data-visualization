import React, { useEffect, useState } from 'react'
import "./Css/Relevance.css";
import axios from 'axios';
import Chart from 'react-apexcharts';
import { color } from 'chart.js/helpers';

const Relevance = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/data_visualization/src/php/relevance.php"
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

    const chartData = {
      options: {
        
        chart: {
          type: 'scatter',
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          title: {
            text: 'Year',
            style: {
              fontSize: "1em", // Adjust label font size
              fontWeight: 800, // Adjust label font weight
              color:"#f08205",
              fontFamily: "Arial, sans-serif", // Adjust label font family
            },
          }
        },
        yaxis: {
          max:7,
          title: {
            text: 'Relevance',
            style: {
              fontSize: "1em", // Adjust label font size
              color:"#f08205",
    
              fontWeight: 900, // Adjust label font weight
              fontFamily: "Arial, sans-serif", // Adjust label font family
            },
            
          }
        },
        
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
        },
        colors: ["#f005e4"],
        tooltip: {
          x: {
            formatter: (val) => val.toFixed(0)
          }
        }
      },
  
      series: [{
        name: 'Scatter Chart',
        data: data.map(item => ({ x: item.year, y: item.relevance }))
      }]
    };


  return (
    <div className='relevance'>
        <h2>Relevance (Year)</h2>
        <Chart
        className="chart"
        options={chartData.options}
        series={chartData.series}
        type="scatter"
        width="900"
        height="400"
      />
    </div>
  )
}

export default Relevance