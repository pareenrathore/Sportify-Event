// Body.js
import React from 'react';
import './AboutUs.css';
import card1 from './card1.png'
import card2 from './card2.png'
import card3 from './card3.png'

const AboutUs = () => {
  return (
    <div class="cards">
        <div class="card" id='1'>
            <img src={card1} alt="" />
            <h6>Outdoor Events</h6>
            <p>We specialize in creating outdoor events that are tailored to your unique needs and preferences. Our team of skilled professionals will work with you to design, plan, and execute your event, ensuring that every detail is taken care of, from venue selection to catering, entertainment, and more. Whether you’re looking to host a corporate retreat, team-building event, or a family gathering, we have the expertise and experience to make it happen.</p>
        </div>
        <div class="card" id='2'><img src={card2} alt="" />
            <h6>Sports Gatherings</h6>
            <p>We specialize in organizing sports gatherings that bring together sports enthusiasts of all levels. Our events are designed to be inclusive and fun, with a focus on fostering a sense of community and camaraderie. From casual pick-up games to competitive tournaments, we offer a wide range of sports activities that cater to your interests and skill level. Our team of experienced organizers will ensure that your sports gathering runs smoothly, from registration to equipment rental and on-field management.</p>
        </div>
        <div class="card" id='3'>
            <img src={card3} alt="" />
            <h6>Event Production</h6>
            <p>We specialize in event production, offering end-to-end services that encompass everything from concept development to execution. Our team of creative professionals will work with you to develop a unique and innovative event concept that aligns with your goals and objectives. We have the resources and expertise to handle all aspects of event production, from logistics and operations to marketing and promotion. Our focus is on delivering a seamless and hassle-free event experience, leaving you free to focus on your guests and enjoy the event.</p>
        </div>
    </div>
  );
};

export default AboutUs;
