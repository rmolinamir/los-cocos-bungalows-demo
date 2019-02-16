import React, { useMemo } from 'react';
// Worker function
import { parseDiscountedPrice } from '../../../shared/parsePrice'
// CSS
import classes from './Room.module.css';
// JSX
import ImageFadeIn from '../../UI/ImageFadeIn/ImageFadeIn';
import Button from '../../UI/Button/Button';
import SVG from '../../SVG/SVG';

const room = (props) => {
  const onClickHandler = () => {
    if (props.onClick) {
      const data = { ...props.data };
      if (props.discount) {
        data['discount'] = props.discount;
        data['oldPrice'] = props.price;
        data['price'] = parseDiscountedPrice(props.price, props.discount);
      }
      props.onClick(data);
    }
  }

  let price = props.price;
  if (props.discount) {
    price = parseDiscountedPrice(props.price, props.discount);
  }

  return (
    useMemo(() => {
      return (
        <div className={classes.Wrapper}>
          <div className={classes.Thumbnail}>
            <div className={classes.Image}>
              <ImageFadeIn src={props.image} draggable='false' />
            </div>
          </div>
          <div className={classes.Container}>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Description}>{props.description}</div>
            {/* Randomized size value... forgot to add it to the seeded database. */}
            <div className={classes.Size}>Size: {Math.floor(Math.random()*10)}m<sup>2</sup></div>
            <div className={classes.Details}>
              <div className={classes.Beds}>
                <i><SVG svg='bed'/></i>
                <span>Beds: {props.beds}</span>
              </div>
              <div className={classes.People}>People: {props.people}</div>
              {props.discount ? 
                <div className={classes.Discount}>
                  <div className={classes.OldPrice}>{props.price}</div>
                  <div className={classes.Price}>{price}</div>
                </div>
                : <div className={classes.Price}>{price}</div>}
            </div>
            <div className={classes.Spacing} />
            <Button clicked={onClickHandler} blockButton type='danger'>Select</Button>
          </div>
        </div>  
      )
    }, [props.id])
  );
}

export default room;
