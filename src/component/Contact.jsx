import React from 'react'

function Contact() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f2027, #203a43)",

        color: "white",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "column"
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px"
        }}
      >
        Contact Us
      </h1>

      <p style={{ fontSize: "25px" }}>
        📞 +91 9876543210
      </p>

      <p style={{ fontSize: "25px" }}>
        📧 carworld@gmail.com
      </p>

      <p style={{ fontSize: "25px" }}>
        🌍 www.carworld.com
      </p>

    </div>
  )
}

export default Contact