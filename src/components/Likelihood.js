import React, { useEffect, useState } from 'react'
import "./Css/Likelihood.css";
import axios from 'axios';
import Chart from 'react-apexcharts';

const Likelihood = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/data_visualization/src/php/likelihood.php"
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
            yaxis: {
                labels: {
                  style: {
                    colors: ['#6b6b6b'],
                  },
                },
              },
          chart: {
            type: 'area',
            stacked: false,
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth',
          },
          tooltip: {
            theme: "dark"
          },
          xaxis: {
            categories: data.map(item => item.year),
          },
          
        },
        colors: ["#00BAEC"], // Adjust color
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100],
            },},
            markers: {
                size: 5,
                colors: ["#000524"],
                strokeColor: "#00BAEC",
                strokeWidth: 3
              },
        series: [{
          name: 'Likelihood',
          data: data.map(item => item.likelihood),
        }, {
          name: 'Relevance',
          data: data.map(item => item.relevance),
        }],
      };

    


  return (
    <div className='likelihood'>
        <h2>Likelihood Area Chart</h2>
        <Chart
        options={formattedData.options}
        series={formattedData.series}
        type="area"
        height={400}
      />
    </div>
  )
}

export default Likelihood