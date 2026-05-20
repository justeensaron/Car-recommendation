import React from 'react'

function copy() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      
      <h1
        style={{
          fontSize: "60px",
          margin: "0",
          lineHeight: "1.1",
        }}
      >
        Good Morning!
      </h1>

      <h1
        style={{
          fontSize: "60px",
          margin: "0",
          lineHeight: "1.1",
        }}
      >
        Welcome to your
      </h1>

      <h1
        style={{
          fontSize: "60px",
          marginTop: "0",
          lineHeight: "1.1",
        }}
      >
        Wipro Dashboard.
      </h1>

      {/* Employee Profile Card */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid lightgray",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <h2>Employee Profile</h2>

        <p>Name: James</p>
        <p>Employee ID: WIPRO7839A2</p>
        <p>Department: Global IT Infrastructure</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid lightgray",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <h2>Current Project</h2>
<ul>
        <h4><p><li>Advanced Threat Protection (Wipro Security Operation)</li></p></h4>
      <h4> <p> <li>Legacy Mainframe Optimization (Financial Services Client)</li></p></h4>
      <h4> <p> <li>AI/ML for Predictive Maintain (Industrial Client)</li></p></h4>
       <h4><p> <li>Data Privacy Compilance Audit</li></p></h4>
        </ul>  
      </div>
    <div
        style={{
          backgroundColor: "white",
          border: "1px solid lightgray",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <h2>Team Notices</h2>
                <h3
          style={{
            color: "#8B1E1E",
          }}
        >⚠️Product Strategy Call @ 11:30 AM!</h3>

      </div>
      {/* Footer */}
<div
  style={{
    marginTop: "40px",
    padding: "15px 0",
    borderTop: "1px solid lightgray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <div>
    <h3
      style={{

        fontWeight: "normal",
      }}
    >
      Contact: james.wipro@wipro.com | +91-XXXXXXXXXX
    </h3>

    <h4
    >
      WIPRO TECHNOLOGY | Wipro Ltd. Global Operations
    </h4>
  </div>

  {/* Logo */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
    alt="Wipro Logo"
    style={{
      width: "80px",
      height: "80px",
      objectFit: "contain",
    }}
  />
</div>



    </div>
  )
}

export default copy