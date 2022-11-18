// import React, { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// function LineChart() {
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '05b4a1e1d0msh7eefee18e7eb6e6p150558jsn3c0c2db9d4ee',
//       'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//     }
//   };
//   const [chart, setChart] = useState([]);
  

//   const handleSubmit = (props) => {
//     props.preventDefault();
//     fetch(`https://covid-193.p.rapidapi.com/history?country=kenya&day=2020-06-02`, options)
//       .then((res) => res.json())
//       .then((chart) => {
//         console.log(chart.response)
//         setChart(chart.response);
//       });
//   };
//   // const cases = chart.map( (statData) => statData.country)
//   // console.log (cases)
  
//   // // var data = {
//   // //   labels: chart.map(chart => chart.country),
//   // //   datasets: [{
//   // //     label: `${chart.cases.total} Cases Available`,
//   // //     data: chart.map(chart => chart.deaths.total),
//   //     backgroundColor: [
//   //       'rgba(255, 99, 132, 0.2)',
//   //       'rgba(54, 162, 235, 0.2)',
//   //       'rgba(255, 206, 86, 0.2)',
//   //       'rgba(75, 192, 192, 0.2)',
//   //       'rgba(153, 102, 255, 0.2)',
//   //       'rgba(255, 159, 64, 0.2)'
//   //     ],
//   //     borderColor: [
//   //       'rgba(255, 99, 132, 1)',
//   //       'rgba(54, 162, 235, 1)',
//   //       'rgba(255, 206, 86, 1)',
//   //       'rgba(75, 192, 192, 1)',
//   //       'rgba(153, 102, 255, 1)',
//   //       'rgba(255, 159, 64, 1)'
//   //     ],
//   //     borderWidth: 1
//   //   }]
//   // };

  
//   return (
//     <form className="covidForm" onSubmit={handleSubmit}>
//     <button  type="submit"  class="btn btn-outline-success">GRAPH</button>
//     <div>
//       {/* <Line
//         // data={data}
//         height={400}
//       /> */}
//     </div>
//   </form>
  
//     );
// }
// export default LineChart;