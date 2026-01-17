import React from "react";

function Hero() {
  return (
    <div className="border-top" style={{ backgroundColor: "#f0f0f0" }}>
      <div
        className="container mt-5 mb-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h1>Support Portal</h1>
        <button class="btn btn-primary" type="submit">
          My tickets
        </button>
      </div>

      <div className="container mb-5">
        <nav className="navbar">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Icon inside a wrapper */}
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                position: "absolute",
                left: "15px",
                color: "#888",
                pointerEvents: "none", // so it doesn't block typing
              }}
            ></i>

            {/* Search input */}
            <input
              type="search"
              placeholder="Eg: How do I open my account"
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                paddingLeft: "45px", // leave space for icon
              }}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Hero;
