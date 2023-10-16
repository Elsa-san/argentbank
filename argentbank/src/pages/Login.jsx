import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import userCircle from "../designs/img/circle-user-solid.png"


function Home() {
  return (
    <>
    <Header />
    <main className="main bg-dark">
        <section className="sign-in-content">
            <img src={userCircle} className="user-icon" alt="icone de profil utilisateur" />
            <h1>Sign In</h1>
                <Form />
        </section>
    </main>
    <Footer />
    </>
  );
}

export default Home;