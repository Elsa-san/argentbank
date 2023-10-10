import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
    <Header />
    <main className="main bg-dark">
        <section className="sign-in-content"></section>
    </main>
    <Footer />
    </>
  );
}

export default Home;