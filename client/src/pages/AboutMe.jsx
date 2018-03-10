//Will be stateless component containing about us text
import React from 'react';

const AboutUs = () => (
  <div>
    <div>
      <section className="top-section">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div id='Paragraph' className="col-md-6">
            <h4>
              {`We are a group of students from the program Hola Code, this is a project that shows our desire to help returnees and people in the same situations we were once in.
              A group of 4 students composed by Alejandro 'Smokey' Rodriguez, Eduardo Urrutia, Abimael Hernandez and Gerardo 'Scooby' Nava
              If you are reading this and you consider that you lost something, don't.
              The best advice that I can give you is keep moving forward.
              There is nothing standing in the way between you and your goals, only you.
              So help me out by understanding something, you have already won in this life, because you are the only one who can be you.
              And that's the way it's supposed to be.`}
            </h4>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </section>
    </div>
  </div>
)
export default AboutUs;
