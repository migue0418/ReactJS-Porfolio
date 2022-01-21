import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
  return (
    <>
      <div className='progress-bar'>
        <span className='progress-bar-name'>{props.name}</span>
        <div className='progress-bar-background'>
          <div className='progress-bar-fill' style={{'--bar-size': props.content}}></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;