import React from "react";
import "./home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import home_pe from "./home_pe.png";

const Home = (props) => {
  return (
    <main>
      <div className="card">
        {localStorage.getItem("uname") ? (
          <h1>Welcome, {localStorage.getItem("uname")}</h1>
        ) : null}
        <Card style={{ backgroundColor: "" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" class="heading" style={{fontWeight:"bold"}}>
                SPORTIFY EVENTS
              </Typography>
              <Typography variant="body2" color="text.secondary" class="content">
                Welcome to Sportify, the premier event production company for
                outdoor sports enthusiasts. We specialize in creating
                unforgettable experiences for individuals and groups who share a
                passion for sports and adventure. Our team of seasoned
                professionals has years of experience in event planning,
                production, and execution. We work tirelessly to ensure that every
                event we produce meets and exceeds our clients’ expectations. At
                Sportify, we’re dedicated to providing seamless event planning and
                execution, so all you have to do is show up and enjoy the
                experience. So why wait? Join the Sportify community and
                experience the great outdoors like never before.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div class="HomeEvent">
        <div class="pahadImage"><img src={home_pe} alt="Tasveer Loading....." width="100%"></img></div>
        <div class="pahadImageContent"><h3>Experience the great outdoors like never
          before.</h3>

          Unforgettable experiences, every time.

          At Sportify, we're dedicated to creating unforgettable
          experiences for our clients. Whether you're an
          individual or a group, we'll work with you to create an
          event that meets your unique needs and exceeds your
          expectations. From outdoor sports to adventure
          activities, we'll help you experience the great outdoors
          like never before. Our commitment to excellence and
          attention to detail ensure that every event we produce
          is flawlessly executed, leaving you with memories that
          will last a lifetime.</div>
      </div>
    </main>
  );
};

export default Home;
