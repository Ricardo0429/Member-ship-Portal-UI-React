import { Progress } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.less';

const EventCard = (props) => {
  return (
    <div className="event-card">
      <img className="image" src={props.cover} alt={props.title}/>
      <div className="info">
        <h2 className="title">{props.title}</h2>
        <p className="date">{props.date}</p>
        <p className="location">{props.location}</p>
      </div>
      <div className="circle">
        <Progress
          className="progress"
          percent={100}
          showInfo={false}
          strokeColor="#22ACEA"
          strokeWidth={12}
          type="circle"
          width={50}
        />
        <h2 className="points">{props.points}</h2>
      </div>
      <hr className="divider"/>
      <p className="description">{props.description}</p>
    </div>
  );
}

EventCard.propTypes = {
  cover: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default EventCard;