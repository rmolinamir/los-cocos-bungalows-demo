import React, { Component } from 'react';
import axios from 'axios';
// Worker functiong
import { isMobile as setIsMobile } from '../../shared/isMobile';
// Assets
import image from '../../assets/images/landing-image.jpg';
import logo from '../../assets/images/logo.png';
// CSS
import classes from './Booking.module.css';
// JSX
import { withRouter } from 'react-router-dom';
import Modal from 'react-png-modal';
import Calendar from 'react-calendar';
import SVG from '../../components/SVG/SVG';
import Button from '../../components/UI/Button/Button';
import NumericInput from '../../components/UI/NumericInput/NumericInput';
import HeaderImage from '../../components/UI/HeaderImage/HeaderImage';
import SearchBox from '../../components/UI/SearchBox/SearchBox';
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import Loading from '../../components/UI/LoadingPage/LoadingPage';
import Room from '../../components/Booking/Room/Room';
import Summary from '../../components/Booking/Summary/Summary';
import ImageFadeIn from '../../components/UI/ImageFadeIn/ImageFadeIn';

class Landing extends Component {
  constructor(props) {
    super(props);
    /**
     * For older browsers use the https://github.com/jerrybendy/url-search-params-polyfill polyfill,
     * which works great with webpack.
     */
    const params = (new URLSearchParams(props.location.search));
    const discount = Clamp(params.get('promo_code'), -1, 101);
    this.isMobile = setIsMobile();
    this.mySummary = React.createRef();
    this.myRooms = React.createRef();
    this.today = new Date();
    this.tomorrow = new Date(this.today.getTime() + (24 * 60 * 60 * 1000))
    const activeRoom = localStorage.getItem('activeRoom');
    this.state = {
      /**
       * Axios initial values.
       */
      data: [],
      loading: true,
      error: false,
      /**
       * Initial checkin/checkout information.
       */
      fromDate: this.today,
      toDate: this.tomorrow,
      isCalendarShown: false,
      adults: 2,
      children: 0,
      discount: discount ? 1 - discount/100 : null, // Discount percentage if it exists.
      /**
       * Breadcrump initial step.
       */
      step: 1,
      // User selected room, if saved in local storage then parse it.
      activeRoom: activeRoom ? JSON.parse(activeRoom) : null
    }
  }

  setIsCalendarShown = (bool) => {
    this.setState({
      isCalendarShown: bool
    });
  }

  setFromDate = (date) => {
    this.setState({
      fromDate: date
    });
  }

  setToDate = (date) => {
    this.setState({
      toDate: date
    });
  }

  setActiveRoom = (room) => {
    this.setState({
      activeRoom: room
    });
    // If on mobile, scroll to the summary after clicking a room.
    if (this.isMobile && this.mySummary) {
      window.scrollTo(0, this.mySummary.current.offsetTop - 48)
    }
  }

  /**
   * Calendar onChange handler.
   */
  onDateChangeHandler = date => {
    this.setFromDate(date[0]);
    this.setToDate(date[1]);
  };

  roomFilter = (room) => {
    return room.people >= (this.state.children + this.state.adults);
  }

  onModifyClickHandler = () => {
    if (this.myRooms) {
      window.scrollTo(0, this.myRooms.current.getBoundingClientRect().top + this.myRooms.current.offsetTop - 128);
    }
  }

  componentDidMount() {
    axios.get('https://los-cocos-bungalows-demo.firebaseio.com/rooms.json', { crossDomain: true })
      .then((res) => {
        const data = shuffleArray(res.data).slice(0, 10);
        this.setState({
          data: data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      })
  }

  render() {
    const calendar = (
      <Modal show={this.state.isCalendarShown} toggleModal closeModal={() => this.setIsCalendarShown(false)}>
        <div className={classes.Calendar}>
          <Calendar
            activeStartDate={new Date(this.state.toDate.toLocaleDateString())}
            onChange={this.onDateChangeHandler}
            selectRange
            value={[this.state.fromDate, this.state.toDate]}
            minDate={this.today}  />
        </div>
        <div className={classes.Confirm}>
          <Button blockButton type='danger' clicked={() => this.setIsCalendarShown(false)}>Confirm</Button>
        </div>
      </Modal>
    );

    /**
     * bRoomsArrayIsNull is a boolean variable that will serve as a hash table
     * to determine if the final is entirely null without having to do another loop.
     */
    let bRoomsArrayIsNull = false;
    const roomsArr = (
      this.state.data.map(room => {
        // Don't map the room if it doesn't match the query.
        if (!this.roomFilter(room)) { return null; }
        // If a single room passes the filter then set bRoomsArrayIsNull as true until next render.
        if (!bRoomsArrayIsNull) { bRoomsArrayIsNull = true }
        return (
          <Room
            key={room.id}
            { ...room }
            data={room}
            discount={this.state.discount}
            image={randomImage(imagesArray)}
            onClick={this.setActiveRoom} />
        );
      })
    );
    const rooms = (
      <div ref={this.myRooms} className={classes.Rooms}>
        {bRoomsArrayIsNull ? 
          roomsArr
          : <h1>Sorry! No rooms match your query.</h1>}
      </div>
    );

    const searchBox = (
      <div className={classes.Query}>
        <div className={classes.Date} onClick={() => this.setIsCalendarShown(true)}>
            {(this.state.fromDate).toLocaleDateString()}
            <i style={{ marginLeft: '6px', display: 'flex' }}><SVG svg='calendar' /></i>
        </div>
        <div className={classes.Date} onClick={() => this.setIsCalendarShown(true)}>
            {(this.state.toDate).toLocaleDateString()}
            <i style={{ marginLeft: '6px', display: 'flex' }}><SVG svg='calendar' /></i>
        </div>
        <NumericInput display='Adults' value={this.state.adults} onChange={(value) => this.setState({adults: value})} />
        <NumericInput display='Children' value={this.state.children} onChange={(value) => this.setState({children: value})} />
        {/* The Modify button will only be disabled if the toDate is higher than the fromDate. */}
        {this.isMobile ?
          <Button clicked={this.onModifyClickHandler} className={classes.Modify} disabled={!(this.state.toDate >= this.state.fromDate)} type='primary'>Modify</Button>
          : null}
      </div>
    );

    return (
      <div className={classes.Wrapper}>
        {calendar}
        {/* Header */}
        <div className={classes.Header}>
            <ul className={classes.Background}>
                <HeaderImage src={image} />
            </ul>
            <div className={classes.HeaderContent}>
              <SearchBox.widescreen className={classes.SearchBox} width='100%'>
                {searchBox}
              </SearchBox.widescreen>
              <ImageFadeIn noWrapper src={logo} className={classes.Logo} />
            </div>
        </div>
        <div className={classes.Container}>
          <SearchBox.mobile className={classes.SearchBox} width='100%'>
            {searchBox}
          </SearchBox.mobile>
          <div className={classes.Breadcrumb}>
            <h1>Rooms & Rates</h1>
            <div style={{ marginBottom: '12px' }}>Plan your perfect stay at our hotel</div>
            <Breadcrumb activeStep={this.state.step} steps={['Choose your room', 'Enhance your stay', 'Enter your information']} />
          </div>
          <div ref={this.mySummary} className={classes.Content}>
            {this.state.loading ? 
              <Loading />
              : (
                <>
                  <div className={classes.Rooms}>
                    {rooms}
                  </div>
                  <Summary
                    discount={this.state.discount}
                    toDate={this.state.toDate} 
                    fromDate={this.state.fromDate}
                    activeRoom={this.state.activeRoom} />
                </>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);

/**
 * Clamps the number, meaning it won't let it go beyond or below the min or max values.
 */
const Clamp = (num, min, max) => {
  return Math.max(min, Math.min(num, max));
}

/**
 * Dummy images from airbnb.
 */
const imagesArray = [
  'https://a0.muscache.com/im/pictures/35836380/a9a49e5f_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/59365499/96d38388_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/9270670/d4cac138_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/9270735/2039a592_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/bde9320b-d1ff-43c0-82e0-2b0588155536.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/25305169/a6b09f17_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/23843469/df2a106f_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/25305187/422900b6_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/25305209/d9ef1f0d_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/23843437/cb7bc24c_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/90472494/03a8f7f3_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/108720105/63b835f1_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/108757381/7c025802_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/31426234/185c1d2f_original.jpg?aki_policy=xx_large',
  'https://a0.muscache.com/im/pictures/109423715/71f54ccc_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/109423742/f25dd422_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/109423780/b73d45ba_original.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/109423875/8b1b72b1_original.jpg?aki_policy=large',
];

const randomImage = array => array[Math.floor(Math.random() * array.length)];

// Shuffle array to simulate randomness.
const shuffleArray = array => array.sort(() => 0.5 - Math.random());