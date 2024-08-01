
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>01798013019</span>
              </div>
              <div>
                <p>Email</p>
                <span>sheikhabdulbasit1998@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>akhalia suma House No.9821 Sector b-6</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <FaFacebookSquare className="" />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <FaInstagram />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <FaSquareXTwitter />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
