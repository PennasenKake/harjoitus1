import React, { Component } from "react";
import { InfoConsumer } from "../context";
import { Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";
import Reviews from "../Reviews";

class Details extends Component {
  render() {
    return (
    <InfoConsumer>
      {value => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          img,
          title,
          maps,
          description
        } = value.detailInfo;

        return (
          <React.Fragment>
            <HeaderDetails className="container-fluid align-items-center">
              <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
              <h4 className="display-1 font-weight-bold">{headerSubTitle}</h4>
              <p className="lead">{headerText}</p>

              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height=" 20" fill="currentColor" className="bi bi-facebook"
                        viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-2">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16" >
                        <path d="M15.556 3.648c-.204-.761-.812-1.35-1.594-1.5C12.922 1 7.988 1 7.988 1c0 0-4.934 0-5.974.648-.782.15-1.39.739-1.594 1.5-.21.785-.21 2.092-.21 2.092s0 1.307.21 2.092c.204.761.812 1.35 1.594 1.5C3.054 15 8 15 8 15s4.934 0 5.974-.648c.782-.15 1.39-.739 1.594-1.5.21-.785.21-2.092.21-2.092s0-1.307-.21-2.092zm-9.11 6.764V5.588L12.045 8l-5.6 2.412z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="col-2">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M15.442 2.167a6.212 6.212 0 0 1-1.796.492 3.157 3.157 0 0 0 1.387-1.74 6.227 6.227 0 0 1-1.976.756 3.092 3.092 0 0 0-5.274 2.814 8.777 8.777 0 0 1-6.374-3.224 3.092 3.092 0 0 0 .96 4.12 3.117 3.117 0 0 1-1.41-.39v.04c0 1.722 1.23 3.16 2.858 3.492a3.173 3.173 0 0 1-1.404.053 3.092 3.092 0 0 0 2.88 2.15 6.21 6.21 0 0 1-4.844 1.44A8.8 8.8 0 0 0 5.93 14c5.966 0 9.241-4.936 9.241-9.241 0-.141-.004-.282-.01-.422a6.544 6.544 0 0 0 1.608-1.67c-.58.26-1.2.43-1.827.508a3.281 3.281 0 0 0 1.419-1.88z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <br /> {/* Extra line break */}
              </div>
              </HeaderDetails>

              <div className="container">
                {/** About, Reviews, and Map links */}
                <Tabs defaultActiveKey="aboutPlace" id="uncontrolled-tab-example">
                  <Tab eventKey="aboutPlace" title="About">
                    <div className="text-center mt-5">
                      <h2 className="mb-3">{title}</h2>
                      <p>{description}</p>
                      <img src={img} alt={title} className="img-thumbnail img-fluid" />
                    </div>
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    <div className="text-center mt-5">
                      <Reviews />
                    </div>
                  </Tab>
                  <Tab eventKey="map" title="Map">
                    <div className="text-center mt-5">
                      <h2 className="mb-3">Map</h2>
                      <iframe src={maps} title="Map" style={{ border: '0', height: '28.124rem', width: '100%' }} allowFullScreen></iframe>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            
          </React.Fragment>
        );
      }}
    </InfoConsumer>
  );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
  height: 100vh;
  text-align: center;
  text-transform: uppercase;
  color: var(--mainWhite);

  h1 {
    color: var(--mainDark);
    padding: 10%;
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    color: var(--mainDark);
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
  }

  a:hover{
    color: var(--mainYellow);
    cursor: pointer;
  }

  @media(max-width: 760px){
    h1,h4{
      color: var(--mainWhite);
    }
  }
`;


