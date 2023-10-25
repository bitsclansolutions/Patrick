import React from "react";
import Start from "./Start";

const StartIndex = () => {
  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-2 navbar-background"></div>
        <div
          className="col-lg-10"
          style={{ background: "#B33759", height: "100uh" }}
        >
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12" style={{ height: "100vh" }}>
                <Start />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartIndex;
