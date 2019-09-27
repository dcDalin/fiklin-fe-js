import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

class HomepageHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation
          enableHeading={false}
          active={this.state.active}
        >
          <img
            src="https://www.kenyabuzz.com/public/uploads/posters/71042d50fa61b7656b4e7090dd851b01.jpg"
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
          <img
            src="https://www.kenyabuzz.com/public//uploads/posters/1568269737.jpg"
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src="https://www.kenyabuzz.com/public/uploads/posters/71042d50fa61b7656b4e7090dd851b01.jpg"
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
          <img
            src="https://www.kenyabuzz.com/public//uploads/posters/1568269737.jpg"
            alt="Album three"
            data-action="https://doce.cc/"
          />
          <img
            src="https://www.kenyabuzz.com/public/uploads/posters/71042d50fa61b7656b4e7090dd851b01.jpg"
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
        </Coverflow>
      </div>
    );
  }
}

export default HomepageHeading;
