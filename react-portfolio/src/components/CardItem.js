import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
  return (
    <>
      <li className='cards--item'>
        <Link className='cards--item-link' to={props.path}>
          <figure className='cards--item-pic-wrap' data-category={props.label}>
            <img
              className='cards--item-img'
              alt={props.alt}
              src={props.src}
            />
          </figure>
          <div className='cards--item-info'>
            <h3 className='cards--item-text'>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;