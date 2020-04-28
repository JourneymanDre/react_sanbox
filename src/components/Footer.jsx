import React from "react";

function Footer() {
  const firstName = "Andre";
  const lastName = "Miller";
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
      <p>Created by {firstName + " " + lastName}</p>
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
