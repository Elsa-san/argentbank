import React from 'react';
import Footer from "../Components/Footer"
import Header from '../Components/Header';
import Banner from "../Components/Banner"
import Chat from "../designs/img/icon-chat.png";
import Money from "../designs/img/icon-money.png";
import Security from "../designs/img/icon-security.png";
import Benefit from "../Components/Benefits";

function Home() {
    const cardsData = [
    {
      title: "You are our #1 priority",
      content: `Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.`,
      image: Chat,
    },
    {
      title: "More savings means higher rates",
      content: `The more you save with us, the higher your interest rate will be!`,
      image: Money,
    },
    {
      title: "Security you can trust",
      content: `We use top of the line encryption to make sure your data and money
        is always safe.`,
      image: Security,
    },
  ];
  return (
    <div>
    <Header />
    <Banner />
    <section className="features">
        {cardsData.map(({ title, content, image }) => (
          <Benefit key={title} title={title} content={content} image={image} />
        ))}
      </section>
    <Footer />
    </div>
  );
}

export default Home;