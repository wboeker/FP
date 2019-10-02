import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EpisodeList.css';
import { Card } from 'react-bootstrap';

class EpisodeList extends Component{

  render(props){
    let showImages = ["deathnote1.jpg", "deathnote2.jpg", "deathnote3.jpg", "deathnote4.jpg", "deathnote5.jpg", "deathnote6.jpg"];
      return(
        <div className="episode-list">
          {showImages.map((image, index) =>
            {
                return(
                  <a href="/about" style={{textDecoration: "none", color: "inherit"}}>
                    <Card className="text">
                      <Card.Img variant="top" src={image} alt={`slide ${index}`}/>
                      <Card.Body>
                        <Card.Text>
                          {`Episode ${index + 1}`}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                );
            }
          )}
        </div>
      )
  }
}

export default EpisodeList;
