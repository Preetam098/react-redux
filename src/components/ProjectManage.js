import React, { useEffect, useState } from "react";

function projectDuration(projectData) {
  return projectData.map((item) => {
    console.log("ittt" , item)
    const startDate = new Date(item.Start_Date);
    const endDate = new Date(item.End_Date);
    const Duration = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));
    const totalContribution = item.Team_Members.reduce(
      (sum, member) => sum + member.Contribution,
      0
    );

    return {
      ...projectData,
      Duration,
      totalContribution,
    };
  });
}

function ProjectManage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = [
      {
        Project_ID: 1,
        Project_Name: "Web App Development",
        Start_Date: new Date("2024-01-01"),
        End_Date: new Date("2024-01-15"),
        Team_Members: [
          { Name: "Alice", Role: "Developer", Contribution: 20 },
          { Name: "Bob", Role: "Designer", Contribution: 15 },
        ],
      },
      {
        Project_ID: 2,
        Project_Name: "Mobile App Launch",
        Start_Date: new Date("2024-02-01"),
        End_Date: new Date("2024-02-28"),
        Team_Members: [
          { Name: "Charlie", Role: "Developer", Contribution: 25 },
          { Name: "David", Role: "Tester", Contribution: 18 },
          { Name: "Eve", Role: "Marketing", Contribution: 12 },
        ],
      },
    ];
    setProjects(projectDuration(projectData));
  }, []);

  return (
    <>
      <h1>data</h1>
    <div className="flex container mx-auto  ">
    {projects?.map((data , index) => {
        console.log("ddata", data);
        return (
          <>
            <div className="grid grid-cols-1 place-content-center place-items-center text-3xl text-red-600">
              <div key={index} className="text-center">
                <h1>Project : - {data[index].Project_Name}</h1>
                <h1> Total Duration : {data.Duration}</h1>
                <h1>Total Contribution : {data.totalContribution}</h1>
              </div>
            </div>
          </>
        );
      })}
    </div>
    </>
  );
}

export default ProjectManage;
