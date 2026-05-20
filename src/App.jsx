import React from 'react'
import Cars from './component/Cars'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #141E30, #243B55, #0F2027)",
        backgroundSize: "400% 400%",
        padding: "40px",
        animation: "gradient 10s ease infinite",
        overflowX: "hidden"
      }}
    >

      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px"
        }}
      >

        <h1
          style={{
            color: "white",
            fontSize: "45px",
            letterSpacing: "3px",
            cursor: "pointer"
          }}

          onClick={() => navigate('/')}
        >
          CAR WORLD
        </h1>

        {/* Menu */}

        <div
          style={{
            display: "flex",
            gap: "25px",
            color: "white",
            fontSize: "18px"
          }}
        >

          <p
            style={{
              cursor: "pointer",
              transition: "0.3s"
            }}

            onClick={() => navigate('/')}

            onMouseOver={(e) => {
              e.target.style.color = "#00c6ff"
            }}

            onMouseOut={(e) => {
              e.target.style.color = "white"
            }}
          >
            Home
          </p>

          <p
            style={{
              cursor: "pointer",
              transition: "0.3s"
            }}

            onClick={() => navigate('/cars')}

            onMouseOver={(e) => {
              e.target.style.color = "#00c6ff"
            }}

            onMouseOut={(e) => {
              e.target.style.color = "white"
            }}
          >
            Cars
          </p>

          <p
            style={{
              cursor: "pointer",
              transition: "0.3s"
            }}

            onClick={() => navigate('/about')}

            onMouseOver={(e) => {
              e.target.style.color = "#00c6ff"
            }}

            onMouseOut={(e) => {
              e.target.style.color = "white"
            }}
          >
            About
          </p>

          <p
            style={{
              cursor: "pointer",
              transition: "0.3s"
            }}

            onClick={() => navigate('/contact')}

            onMouseOver={(e) => {
              e.target.style.color = "#00c6ff"
            }}

            onMouseOut={(e) => {
              e.target.style.color = "white"
            }}
          >
            Contact
          </p>

        </div>

      </div>

      {/* Hero Section */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >

        <h1
          style={{
            color: "white",
            fontSize: "80px",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "5px"
          }}
        >
          Luxury Car Collection
        </h1>

        <p
          style={{
            color: "#dcdcdc",
            fontSize: "24px"
          }}
        >
          Explore Premium Cars With Live Experience
        </p>

      </div>

      {/* Cars Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "35px"
        }}
      >

        {Cars.map((car, index) => (

          <article
            key={index}

            style={{
              width: "320px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(15px)",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              transition: "0.5s",
              border: "1px solid rgba(255,255,255,0.2)"
            }}

            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-15px) scale(1.03)"
            }}

            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)"
            }}
          >

            {/* Video */}

            <video

              src={car.video}

              autoPlay
              loop
              muted

              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                filter: "grayscale(100%)",
                transition: "0.7s",
                cursor: "pointer",
                animation: "float 3s ease-in-out infinite"
              }}

              onMouseOver={(e) => {

                e.target.style.filter = "grayscale(0%)"

                e.target.style.transform = "scale(1.05)"

                e.target.style.boxShadow =
                  "0px 0px 40px rgba(255,255,255,0.9)"
              }}

              onMouseOut={(e) => {

                e.target.style.filter = "grayscale(100%)"

                e.target.style.transform = "scale(1)"

                e.target.style.boxShadow = "none"
              }}
            />

            {/* Content */}

            <div
              style={{
                padding: "25px",
                color: "white"
              }}
            >

              <h2
                style={{
                  marginBottom: "10px",
                  fontSize: "35px"
                }}
              >
                {car.name}
              </h2>

              <p
                style={{
                  color: "#dcdcdc",
                  marginBottom: "20px",
                  fontSize: "18px"
                }}
              >
                {car.color}
              </p>

              {/* Explore Button */}

              <button

                onClick={() =>
                  navigate('/details', {
                    state: car
                  })
                }

                style={{
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(to right, #00c6ff, #0072ff)",
                  color: "white",
                  cursor: "pointer",
                  transition: "0.3s",
                  fontWeight: "bold",
                  width: "100%",
                  fontSize: "16px"
                }}

                onMouseOver={(e) => {

                  e.target.style.transform = "scale(1.05)"

                  e.target.style.background =
                    "linear-gradient(to right, #ff4b2b, #ff416c)"
                }}

                onMouseOut={(e) => {

                  e.target.style.transform = "scale(1)"

                  e.target.style.background =
                    "linear-gradient(to right, #00c6ff, #0072ff)"
                }}
              >
                Explore
              </button>

            </div>

          </article>

        ))}

      </div>

      {/* Footer */}

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#dcdcdc"
        }}
      >
        <p>
          © 2026 Car World | Live Car Experience 🚗
        </p>
      </div>

      {/* Animations */}

      <style>
        {`

          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            overflow-x:hidden;
          }

          @keyframes float {

            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-15px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @keyframes gradient {

            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

        `}
      </style>

    </div>
  )
}

export default App