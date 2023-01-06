import React from "react";
import BodyTitle from "../Components/BodyTitle/BodyTitle";

import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Users from "../Components/Users/Users";

function UsersManagementPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <BodyTitle data={"User management"} />
        <section className="section dashboard">
          <Users />
        </section>
      </main>

    </div>
  );
}

export default UsersManagementPage;