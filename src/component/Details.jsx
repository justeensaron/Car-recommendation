import React from 'react'

import {
  useLocation,
  useNavigate
} from 'react-router-dom'

function Details() {

  const location = useLocation()

  const navigate = useNavigate()

  const car = location.state

  if (!car) {
    return <h1>No Car Data Found</h1>
  }

  return (

    <div
      style={{
        minHeight: "100vh",

        background:
          "linear-gradient(to right, #141E30, #243B55)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "40px"
      }}
    >

      {/* Main Container */}

      <div
        style={{
          width: "1000px",

          background: "rgba(255,255,255,0.1)",

          backdropFilter: "blur(10px)",

          borderRadius: "25px",

          overflow: "hidden",

          display: "flex",

          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}
      >

        {/* Left Side Video */}

        <div style={{ flex: 1 }}>

          <video

            src={car.video}

            autoPlay
            loop
            muted
            controls

            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

        </div>

        {/* Right Side */}

        <div
          style={{
            flex: 1,
            padding: "40px",
            color: "white"
          }}
        >

          <h1
            style={{
              fontSize: "55px"
            }}
          >
            {car.name}
          </h1>

          <h2
            style={{
              color: "#00c6ff",
              marginBottom: "20px"
            }}
          >
            Luxury Sports Car
          </h2>

          <p
            style={{
              lineHeight: "35px",
              color: "#dcdcdc",
              fontSize: "18px"
            }}
          >
            Experience premium luxury with advanced
            technology and world-class performance.
          </p>

          {/* Specs */}

          <div
            style={{
              marginTop: "30px",

              display: "grid",

              gridTemplateColumns: "1fr 1fr",

              gap: "20px"
            }}
          >

            <div>
              <h3>Color</h3>
              <p>{car.color}</p>
            </div>

            <div>
              <h3>Speed</h3>
              <p>{car.speed}</p>
            </div>

            <div>
              <h3>Engine</h3>
              <p>{car.engine}</p>
            </div>

            <div>
              <h3>Price</h3>
              <p>{car.price}</p>
            </div>

          </div>

          {/* Buttons */}

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px"
            }}
          >

            <button

              onClick={() => {
                alert("Successfully Purchased 🚗")
              }}

              style={{
                padding: "12px 25px",

                border: "none",

                borderRadius: "10px",

                background: "#00c6ff",

                color: "white",

                cursor: "pointer"
              }}
            >
              Buy Now
            </button>

            <button

              onClick={() => navigate('/')}

              style={{
                padding: "12px 25px",

                borderRadius: "10px",

                border: "1px solid white",

                background: "transparent",

                color: "white",

                cursor: "pointer"
              }}
            >
              Back
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Details