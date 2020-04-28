import React from "react";

function Heading() {
  const firstName = "Andre";
  const lastName = "Miller";
  const currentDate = new Date();
  // const year = currentDate.getFullYear();
  const currentTime = currentDate.getHours();
  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "#FD862A";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "#FDCB67";
  } else if (currentTime < 20) {
    greeting = "Good Evening";
    customStyle.color = "#88878D";
  } else {
    greeting = "Good Night";
    customStyle.color = "#2A2B2F";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting} {firstName + " " + lastName}
    </h1>
  );
}

export default Heading;
