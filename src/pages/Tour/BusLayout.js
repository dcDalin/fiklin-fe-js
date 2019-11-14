import React from 'react';
import './BusLayout.css';
import { Image, Popup, Checkbox } from 'semantic-ui-react';
import Wheel from '../../assets/svg/wheel.svg';

const BusLayout = () => {
  return (
    <div className="bus-wrapper">
      <div className="grid-container">
        <Popup content="Driver" trigger={<Checkbox className="seat" />} />
        <div className="seat">2</div>
        <div className="seat">3</div>
        <div className="seat">4</div>
        <div className="seat">5</div>
        <div className="seat">6</div>
        <div className="seat">7</div>
        <div className="seat">8</div>
        <div className="seat">9</div>
        <div className="seat">10</div>
        <div className="seat">11</div>
        <div className="seat">12</div>
        <div className="seat">13</div>
        <div className="seat">14</div>
        <div className="seat">15</div>
        <div className="seat">16</div>
        <div className="seat">17</div>
        <div className="seat">18</div>
        <div className="seat">19</div>
        <div className="seat">20</div>
        <div className="seat">21</div>
        <div className="seat">22</div>
        <div className="seat">23</div>
        <div className="seat">24</div>
        <div className="seat">25</div>
        <div className="seat">26</div>
        <div className="seat">27</div>
        <div className="seat">28</div>
        <div className="seat">
          <Popup
            content="Driver"
            trigger={<Image className="custom-mobile-logo" size="mini" src={Wheel} />}
          />
        </div>
        <div className="seat">30</div>
        <div className="seat">31</div>
        <div className="seat">32</div>
      </div>
    </div>
  );
};

export default BusLayout;
