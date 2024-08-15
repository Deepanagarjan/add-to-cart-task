import React from "react";

function Header() {
  return (
    <header className="bg-dark mb-5 py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
           <img
            src="/image/deepa logo.jpg"
            alt="banner"
            className="text-center"
            style={{ width: "750px", height: "180px" ,borderRadius:"20px" }}
          />
          {/* <h1 style={{ fontFamily: "cursive" }}></h1> */}
          {/* <h6 style={{ fontFamily: "cursive" }}></h6> */}
        </div>
      </div>
    </header>
  );
}

export default Header;