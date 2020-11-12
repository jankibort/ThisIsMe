import React from "react";
import { Card, Container } from "react-bootstrap";
import me from "../../img/me.jpg";

const Intro = () => {
  return (
    <Container id="intro">
      <Card className="special-card shadow-lg">
        <Card.Body>
          <img
            className="float-left rounded-circle mr-3 mb-1 text-justify"
            src={me}
            alt=""
          />
          <div className="text-justify">
            There are multiple ways I could describe myself: adventure lover, a
            social creature, nature junkie and even a party animal. Each of
            these builds an image of who I am. While you’re reading this
            section, you see the Matterhorn peak in the background. Back in the
            days of my childhood I dreamt of climbing this mountain and it was
            way beyond my abilities at that time. Climbing Matterhorn still
            remains one of my life goals, but it also has become a symbol for my
            attitude towards life. One might say, that I keep chasing adventure
            in every dimension of life: professional, social and personal. I am
            more worried of being bored than of being overthrown by a challenge
            or difficulty. One of the rules I praise is that trying and failing
            is better than no trying at all because it gives more perspectives
            and opportunities for the future. My name is Jan and this is a page
            about myself.
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Intro;
