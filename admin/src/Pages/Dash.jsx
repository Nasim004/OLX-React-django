import React from "react";
import BodyTitle from "../Components/BodyTitle/BodyTitle";
import Dash from "../Components/Dash/Dash";

import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

function DashPage() {
  return (
    <div>
      <Header />
     
      <main id="main" className="main">
        <BodyTitle data={"User details"} />
      
        <section className="section dashboard">
          <Dash />
        </section>
      </main>
      
    </div>
  );
}

export default DashPage;
