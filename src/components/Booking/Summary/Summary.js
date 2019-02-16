import React from 'react';
import { toast } from 'react-toastify';
// Assets
import cocoBg from '../../../assets/images/coco-bg.png';
// CSS
import classes from './Summary.module.css';
import Separator from '../../UI/Separator/Separator';
import Panel from '../../UI/Panel/Panel';
import Button from '../../UI/Button/Button';
import ImageFadeIn from '../../UI/ImageFadeIn/ImageFadeIn';

const summary = (props) => {
  let activeRoom = {};
  if (props.activeRoom) {
    activeRoom = { ...props.activeRoom };
  }

  /**
   * Save the active room so that the user will have 
   * an initial value next time the user loads the page.
   */
  const saveActiveRoom = () => {
    if (!props.activeRoom) { return; } // Redundant, just in case.
    const oldActiveRoom = localStorage.getItem('activeRoom');
    /**
     * Checking if the user has already saved the selected room. If true, then stop the function.
     */
    const bRoomsAreEqual = oldActiveRoom ? JSON.parse(oldActiveRoom).id === props.activeRoom.id : false;
    if (bRoomsAreEqual) { return; }
    /**
     * Normally I would also set an expiration date token using the Date constructor, but since this is a demo 
     * I decided to leave that feature out.
     */
    localStorage.setItem('activeRoom', JSON.stringify(props.activeRoom));
    toast.success('Room saved successfully! It will be loaded the next time you load the website.');
  }

  let price = <div className={classes.Price}>{activeRoom.price}</div>;
  if (activeRoom.discount) {
    price = (
      <div>
        <div className={classes.OldPrice}>{activeRoom.oldPrice}</div>
        <div className={classes.Price}>{activeRoom.price}</div>
      </div>
    )
  }

  const content = (
    <>
      <h3>{activeRoom.title}</h3>
      {/* Check-in and check-out times */}
      <table className={classes.Table}>
        <thead>
          <tr>
            <th>Check-in</th>
            <th>Check-out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>From {activeRoom.checkInHour}</td>
            <td>Before {activeRoom.checkOutHour}</td>
          </tr>
        </tbody>
      </table>
      {/* Reservation Date */}
      <div className={classes.ReservationDate}>
        <strong>Reservation date</strong>
        <div>
          <span><strong>From</strong> {props.fromDate.toLocaleDateString()}</span>
          <span style={{ marginLeft: '1ch'}}><strong>to</strong> {props.toDate.toLocaleDateString()}</span>
        </div>
      </div>
      <Separator />
      {activeRoom.discount ? 
        <div className={classes.Receipt}>
          <div className={classes.Discount}>Discount</div>
          <div className={classes.Percentage}>{Math.ceil((1 - activeRoom.discount) * 100)}%</div>
        </div>
        : null
      }
      <div className={classes.Receipt}>
        <div className={classes.Total}>Total</div>
        {price}
      </div>
    </>
  );

  const placeholder = (
    <div>
      <h3 style={{ textAlign: 'left' }}>You haven't selected anything yet.</h3>
      <Separator />
    </div>
  );

  return (
    <div className={classes.Summary}>
      <div className={classes.Background}><ImageFadeIn noWrapper src={cocoBg} draggable='false' /></div>
      <Panel className={classes.Body}>
        <h1 style={{ margin: '0' }}>Reservation Summary</h1>
        {props.activeRoom ?
          content
          : placeholder}
        <Button clicked={saveActiveRoom} disabled={!props.activeRoom} blockButton type='primary'>Save</Button>
      </Panel>
    </div>
  );
}

export default summary;