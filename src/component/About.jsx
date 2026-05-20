import React from 'react'

function About() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #141E30, #243B55)",

        color: "white",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "column",

        textAlign: "center",

        padding: "40px"
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px"
        }}
      >
        About Us
      </h1>

      <p
        style={{
          maxWidth: "900px",
          lineHeight: "35px",
          fontSize: "22px"
        }}
      >
        Car World is a luxury car platform
        developed using React JS.
        Explore premium cars with
        live videos and modern UI experience.
      </p>

    </div>
  )
}

export default About