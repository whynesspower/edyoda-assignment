import "./App.css";
import React from "react";
import NavigationBar from "./component/Navbar/Navbar";
import PaymentSummary from "./component/PaymentModule/PaymentSummary";
import Lockup from "./component/MainLockup/MainLockup";
//   import background from "../public/background.png";
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="App">
        <div className="Main-Lockup">
          <Lockup></Lockup>
        </div>
        <div className="Form">
          <div
            style={{
              display: " flex",
              flexDirection: "column",
              alignItems: " center",
              padding: "32px 24px",
              gap: "28px",
              position: "absolute",
              width: "549px",
              height: " 881.69px",
              left: "1269px",
              top: "72px",
              bordeRadius: " 8px",
              // marginLeft: "800px",
              // marginTop: "150px",
              // maxWidth: "500px",
            }}
          >
            <PaymentSummary />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
