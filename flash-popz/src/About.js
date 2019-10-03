import React, { Component } from 'react';
import './About.css';
import { Figure, OverlayTrigger, Tooltip } from 'react-bootstrap';

class About extends Component{

  render(props){
      let testimonies = [{image: "shanti.jpg", caption: "Shanti Shoji, cofounder of Kizuna Across Cultures", tooltip: "left",
    quote: "I have met so many people who love anime but don't have an outlet to practically study Japanese."},
      {image: "omori2.jpg", caption: "Motoko Omori, Professor of Japanese at Georgetown", tooltip: "bottom",
    quote: "I would love to use this with my students in my Japanese class!"},
      {image: "sato2.jpg", caption: "Kumi Sato, Professor of Japanese at Georgetown", tooltip: "bottom",
    quote: "Not only would my students be delighted, but their language skills would increase after being able to interact with authentic material!"},
    {image: "ulie.jpg", caption: "Ulie Xu, Linguistics Major and Polyglot", tooltip: "bottom",
    quote: "I started self-studying Korean because of my interest in Korean pop culture, so I can really see the value of Flashpopz!"},
    {image: "sonya.jpg", caption: "Sonya Hu, GU Japan Network Board Member", tooltip: "right",
    quote: "The best way to learn a foreign language is by doing something we find fun and useful in our daily lives."}]
      return(
        <div className="about">
          <div className="section">
            <h1 className="about-title">Language and Media</h1>
            <p>
              Why do people learn foreign languages? To the best of my knowledge, there are two main reasons.
              One, to communicate with people who speak that language.
              Two, to consume media in that in that language, whether it be books, songs or movies.
            </p>
            <p>
              Today many language-learning solutions address communication, but few focus on what inspired a large portion
              of language-learners in the first place: media and pop-culture.This is where Flashpopz, or “Flashcards for
              popular culture,” comes in. Flashpopz is a web application that teaches English-speakers Japanese vocabulary
              using a popular form of Japanese media: anime.
            </p>
          </div>
          <div className="testimony-wrapper">
            {testimonies.map((testimony) =>
              {
                  return(
                    <OverlayTrigger
                      key={testimony.tooltip}
                      placement={testimony.tooltip}
                      overlay={
                        <Tooltip>
                          {testimony.quote}
                        </Tooltip>
                      }
                    >
                      <div className="figure-wrapper">
                        <Figure>
                          <Figure.Image
                            width={150}
                            src={testimony.image}
                            rounded
                          />
                          <Figure.Caption>
                            {testimony.caption}
                          </Figure.Caption>
                        </Figure>
                      </div>
                    </OverlayTrigger>
                  );
              }
            )}
          </div>
          <div className="section">
            <h1 className="about-title">Flashcards for Pop Culture</h1>
            <p>
            This is how Flashpopz works:
            </p>
            <div>
              First, select a vocabulary pack for an anime episode on our website, and learn the words through our online quizzes.
            </div>
            <div>
              Then, reward yourself by watching the episode on Netflix or other preferred third party sources.
            </div>
            <p>
              Lastly, review the vocabulary to solidify your knowledge.
            </p>
            <p>
              With Flashpopz, if you’re passionate about a certain type of media, you’re able to learn context-specific vocabulary and
              motivate yourself to keep crunching through those flashcards.
            </p>
          </div>
        </div>
      )
  }
}

export default About;
