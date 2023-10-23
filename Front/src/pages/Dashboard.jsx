import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Account from "../Components/Account"

function Dashboard() {
  return (
<>
    <Header />
    <main className="main bg-dark">
   <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div> 
      <Account 
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
      />   
      <Account 
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
      />   
      <Account 
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
      />   
      </main>
    <Footer />
    </>
  );
}

export default Dashboard;