import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../App.css";

function Charts() {
  const [state] = useState({
    options : {
        chart: {
          height: 350,
          type: "treemap",
        },
        series: [
          {
            data: [
              {
                x: "New Delhi",
                y: 218,
              },
              {
                x: "Kolkata",
                y: 149,
              },
              {
                x: "Mumbai",
                y: 184,
              },
              {
                x: "Ahmedabad",
                y: 55,
              },
              {
                x: "Bangaluru",
                y: 84,
              },
              {
                x: "Pune",
                y: 31,
              },
              {
                x: "Chennai",
                y: 70,
              }
            ],
          },
        ]
      },

    // options: {
    // //   colors: ["#EB8C87", "#C23829"],
    //   chart: {
    //     id: "boxPlot",
    //     stacked: true,
    //     type: "boxPlot"
    //   },
    //   xaxis: {
    //     // type: 'numeric',
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    //   },
    // //   yaxis:{
    // //     reversed: true
    // //   }
    // },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  
      
  });

  return (
    <div className=" App">
      <h1>
        React Charts Demo <i className="fas fa-user"></i>{" "}
      </h1>
      <div className=" grid grid-cols-2 place-items-center">
        {["bar", "line", "area", "radar", "scatter", "heatmap" ,].map((type, index) => (
          <div className="" key={index}>
            <Chart
              options={{
                ...state.options,
                chart: { id: `chart-${type}` },
              }}
              series={state.series}
              type={type}
              width="450"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charts;
