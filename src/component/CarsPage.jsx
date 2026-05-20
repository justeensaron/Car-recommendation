import React from 'react'

function CarsPage() {

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

        flexDirection: "column"
      }}
    >

      <h1
        style={{
          fontSize: "60px"
        }}
      >
        Our Car Collections
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "20px"
        }}
      >
        Explore luxury sports cars and modern vehicles.
      </p>

    </div>
  )
}

export default CarsPage