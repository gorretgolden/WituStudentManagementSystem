import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  Form,
  Container,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import LandingNavbar from "components/Navbars/landing";
import LandingFooter from "components/footer";

function AboutUs() {
  return (
    <>
      <section>
        <LandingNavbar/>
      </section>

      <section className="text-white" style={{backgroundColor:'#940203'}}>
        <Container>
          <Row>
            <Col md="12" className="py-5">
              <h3 className="text-center font-weight-bold">About us</h3>
              <p style={{fontSize:20}}>
              Know us better by knowing more about our Vision & Mission and the Core Values that we believe in.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
          <h3 className="text-center">Our team</h3>
          <Row className="mt-5">


          <Col lg="1" >
            
            </Col>
            {/* <Col md="2"></Col> */}
            <Col lg="5" className="shadow-lg mb-5 p-4 bg-white rounded mr-5">
            <h3 className="text-center">Our Vision</h3>
            <p  className="mt-5">
            Our primary goal is to create employment opportunities for brilliant young women from underserved communities. We do this by empowering them with digital and entrepreneurial skills training and job connection. We use modern teaching methods like high-speed boot camps where the girls learn by doing and create real-world projects and systems. 
            </p>
            </Col>

            <Col lg="5" className="shadow-lg p-4 mb-5 bg-white rounded ">
            <h3 className="text-center">Our Mission</h3> 
            <p className="mt-5">
            To support young women in local capacity building and skills development for Innovation, technology and leadership in Uganda, offering a collaborative environment for training, mentor-ship and knowledge sharing leading to a sustainable socio-economic development in the region.
            </p>
            </Col>
            <Col lg="1" >
            
            </Col>


             
          </Row>
      
      </section>

      <section>
        <Container>
          <Row>
          <Col lg="3" className="shadow-sm   bg-white rounded ">
          <img
                className="img-thumbnail"
                src="https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?k=20&m=1335941248&s=612x612&w=0&h=EFbntRuzPuxNx_HJ9l8ckhWvT-u5TPJFFxa7NwA86NU="
              ></img>
              <h4 className="text-center">ED</h4>
              <p className="text-center">Birungi Barbra</p>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded ">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
            <h4 className="text-center">ED</h4>
            <p className="text-center">Birungi Barbra</p>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded ">
          <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?k=20&m=1369508766&s=612x612&w=0&h=OhZ276Ou4RkLt5bHoB1BY35yYKlFlrwVcXs_kQrbvgQ=">
            </img>
            <h4 className="text-center">ED</h4>
            <p className="text-center">Birungi Barbra</p>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded ">

          <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/portrait-of-natural-beauty-woman-at-beach-picture-id1369509530?k=20&m=1369509530&s=612x612&w=0&h=eqk_Nd2GfmhfcHVNKYXzgh-LP-SRCAEdiMUzRTU7Qfs=">
            </img>
            <h4 className="text-center">ED</h4>
            <p className="text-center">Birungi Barbra</p>
          </Col>
          
          </Row>
          </Container>
      </section>

      <section>
        
        <Container>
        <h3 className="text-center">Our Core Values</h3>
            <Row>
            
            <Col lg="4" className="shadow-lg mb-5 p-4 bg-white rounded  mt-5">
            <h4 className="text-center">Innovation and Technology Integrity</h4>
            </Col>

            <Col lg="4" className="shadow-lg mb-5 p-4 bg-white rounded  mt-5">
            <h4 className="text-center">Fidelity to the Institution</h4>
            </Col>

            <Col lg="4" className="shadow-lg mb-5 p-4 bg-white rounded mt-5">
            <h4 className="text-center">Professionalism Openness to Diversity</h4>
            </Col>

            
            </Row>
        </Container>
      </section>

      <section>
        <Container>
        <h3 className="text-center">View Our Gallery</h3>
            <Row>
            <Col lg="3" className="shadow-sm   bg-white rounded mt-5 ">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5 ">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>
          <Col lg="3" className="shadow-sm   bg-white rounded mt-5 ">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

          <Col lg="3" className="shadow-sm   bg-white rounded mt-5">
            <img 
            className="img-thumbnail" 
            src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?k=20&m=1364917563&s=612x612&w=0&h=wnOTaxd-dom5O5Y7qEyDJBepZFKPK9LXl7TEze4z6wg=">
            </img>
          </Col>

            </Row>
        </Container>
      </section>

<section>
    <Container>
    <h3 className="text-center">Partners</h3>
    <Row>

    <Col lg="4" className="mt-5">
            <img 
            className="img-thumbnail" 
            src="data:image/png;base64,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">
            </img>
          </Col>
          <Col lg="4" className="mt-5">
          <img 
            className="w-20" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHnwQV9-JedSXukLWwsTM1VGezEp5eOxUmw&usqp=CAU">
            </img>
          </Col>
          
          <Col lg="4" className="mt-5">
          <img 
            className="w-20" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHnwQV9-JedSXukLWwsTM1VGezEp5eOxUmw&usqp=CAU">
            </img>
          </Col>
            
        
        </Row>
    </Container>
    
</section>



<section>
        <Container>
          <Row>
            <Col md="6"></Col>
          </Row>
        </Container>
      </section>
<LandingFooter/>
    </>
  );
}
export default AboutUs;
