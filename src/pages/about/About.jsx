import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import myimg from "../../imagii/prme.png";
import "fa-icons";

const About = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Me</h1>
            </div>
            <div className="content">
              <h3>
                Hey!, I am Ankit Gupta & I am a Full Stack Developer
                <br /> <br />
                About This Blog Web..{" "}
              </h3>
              {/* <p> quos animi natus beatae deleniti asperiores alias numquam porro
                corporis incidunt architecto sit itaque eos, reiciendis iste
                dolore amet vitae tempora fuga voluptatem facere quibusdam
                consequuntur blanditiis et. Maiores expedita consequuntur
                obcaecati nobis laudantium! Sunt ratione aliquid expedita, amet
                qui facilis voluptatibus labore adipisci maiores enim
                repudiandae eius cum. Sequi excepturi autem in architecto error
                explicabo quasi sunt minus eos ducimus saepe recusandae pariatur
                labore veniam doloribus quam voluptates, ipsum, illum iste atque
                laborum quisquam cumque voluptatum beatae. Consectetur, facere
                atque! */}
              <p>
                This MERN blog web app is a modern and dynamic platform designed
                to provide users with an exceptional blogging experience. Built
                on the popular MERN stack, which comprises MongoDB, Express.js,
                React.js, and Node.js, this web application seamlessly combines
                the power of these technologies to deliver a feature-rich and
                interactive blogging platform.
                <br />
                <br/>
                this MERN blog web app is a powerful and well-rounded platform
                that brings together the best of modern web technologies. It
                empowers bloggers to express their thoughts, engage with their
                readers, and cultivate a thriving online community of writers
                and enthusiasts. Its user-friendly interface, efficient backend,
                and innovative features make it a standout choice for
                individuals or businesses looking to establish an impactful
                online presence through blogging.
              </p>
              <div className="button">Follow Me</div>
            </div>
            <div className="social">
              <Link to="#">
                <i className="topIcon fab fa-facebook-square"></i>
              </Link>
              <Link to="https://twitter.com/ankitgupta15143" target="/">
                <i className="topIcon fab fa-twitter-square"></i>
              </Link>
              {/* <Link to="#"><i className="topIcon fab fa-pinterest-square"></i></Link> */}
              <Link
                to="https://www.instagram.com/ankit_08_20_/?hl=en"
                target="/"
              >
                <i className="topIcon fab fa-instagram-square"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/ankit-gupta-87248a20a/"
                target="/"
              >
                <i className="topIcon fab fa-linkedin"></i>
              </Link>
              <Link to="https://github.com/Redux18" target="/">
                <i className="topIcon fab fa-github"></i>
              </Link>
            </div>
          </div>
          <div className="image-section">
            <img src={myimg} alt="myimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
