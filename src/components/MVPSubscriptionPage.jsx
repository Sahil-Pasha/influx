import React, { useContext } from "react";
import "./MVPSubscriptionPage.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import star1 from "../Assets/teenyicons_star-solid-1.svg";
import star2 from "../Assets/teenyicons_star-solid-2.svg";
import star from "../Assets/teenyicons_star-solid.svg";
import credit from "../Assets/creditPerMonth.svg";
import freeRollOver from "../Assets/rolloverOfUnusedCredits.svg";
import mmrPerks from "../Assets/MMRPerks.svg";
import flexible from "../Assets/100Flexible.svg";
import discount from "../Assets/discountOnFoodAndBeverages.svg";
import convenienceFee from "../Assets/convenienceFee.svg";
import MyContext from "../context/MyContext";

const MVPSubscriptionPage = () => {
  const { isMobile } = useContext(MyContext);

  return (
    <div style={{ backgroundColor: "#1c1c1c" }}>
      {isMobile ? (
        <>
          <Container className="text-light custom-container">
            <Row>
              <Col xs={12} sm={12}>
                <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                  <p>
                    <img src={star1} alt="star" />
                  </p>
                  <p className="reel-heading">Reel Deal Monthly Movies</p>
                  <p>
                    <img src={star} alt="star" />
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center reel-sub-heading">
                  <p>Your flexible monthly membership to the latest movies</p>
                </div>
              </Col>
              <Col>
                <Row>
                  <Col xs={6} sm={6} className="custom-card-gap">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={credit} alt="Credit" />
                        <p className="cards-heading">1 credit per month</p>
                        <Card.Text className="cards-text">
                          One 2D standard movie per month<sup>1</sup>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={freeRollOver} alt="freeRollOver" />
                        <p className="cards-heading">
                          Free rollover of unused credits
                        </p>
                        <Card.Text className="cards-text">
                          Unused credits will be combined the following month
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={flexible} alt="flexible" />
                        <p className="cards-heading">100% Flexible</p>
                        <Card.Text className="cards-text">
                          Cancel anytime<sup>2</sup>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} sm={6} className="custom-card-gap">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={discount} alt="discount" />
                        <p className="cards-heading">
                          20% Discount on all Food and Beverages
                        </p>
                        <Card.Text className="cards-text">
                          Excluding alcohol
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={convenienceFee} alt="convenienceFee" />
                        <p className="cards-heading">0 Convenience Fees</p>
                        <Card.Text className="cards-text">
                          Waived on all days on any tickets purchase
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={mmrPerks} alt="mmrPerks" />
                        <p className="cards-heading">All MMR perks included</p>
                        <Card.Text className="cards-text">+ benefits</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div>
              <p className="list-items">
                <sup>1</sup>Excludes IMAX and DBOX formats. No fee apply to
                Passport Credit only. Other fee apply to full-priced tickets.
              </p>
              <p className="list-items">
                <sup>2</sup>Excludes Acoholic beverages.
              </p>
            </div>
            <p className="subscription-heading">What is MVP Subscription?</p>
            <ul className="list-unstyled numbered-list">
              <li className="mb-3">
                MVP Subscription provides the member 1 movie credit per month
              </li>
              <li className="mb-3">
                They can avail it at any Marcus theatre or Movie Tavern
              </li>
              <li className="mb-3">
                Members earn 100 points and get a $5 reward redeemable on food &
                beverages + many more benefits
              </li>
            </ul>
          </Container>
        </>
      ) : (
        <>
          <Container className="text-light custom-container">
            <Row>
              <Col md={5}>
                <div>
                  <img className="big-star" src={star2} alt="big-star" />
                </div>
                <div className="d-flex justify-content-start gap-4 mt-0 px-4">
                  <img src={star} alt="" />
                  <img src={star1} alt="" />
                </div>
                <p className="reel-heading">Reel Deal Monthly Movies</p>
                <p className="reel-sub-heading">
                  Your flexible monthly membership to the latest movies
                </p>
                <hr className="bg-light" />
                <p className="subscription-heading">
                  What is MVP Subscription?
                </p>
                <ul className="list-unstyled numbered-list">
                  <li className="mb-3">
                    MVP Subscription provides the member 1 movie credit per
                    month
                  </li>
                  <li className="mb-3">
                    They can avail it at any Marcus theatre or Movie Tavern
                  </li>
                  <li className="mb-3">
                    Members earn 100 points and get a $5 reward redeemable on
                    food & beverages + many more benefits
                  </li>
                </ul>
                <br />
                <div>
                  <Button
                    variant="danger"
                    className="me-2 get-started-btn rounded-3"
                  >
                    Get started
                  </Button>
                  <Button variant="link" className="learn-more-btn">
                    Learn more
                  </Button>
                </div>
              </Col>
              <Col md={7}>
                <Row>
                  <Col md={4} lg={5} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={credit} alt="Credit" />
                        <p className="cards-heading">1 credit per month</p>
                        <Card.Text className="cards-text">
                          One 2D standard movie per month<sup>1</sup>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={freeRollOver} alt="freeRollOver" />
                        <p className="cards-heading">
                          Free rollover of unused credits
                        </p>
                        <Card.Text className="cards-text">
                          Unused credits will be combined the following month
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={3} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={mmrPerks} alt="mmrPerks" />
                        <p className="cards-heading">All MMR perks included</p>
                        <Card.Text className="cards-text">+ benefits</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={3} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={flexible} alt="flexible" />
                        <p className="cards-heading">100% Flexible</p>
                        <Card.Text className="cards-text">
                          Cancel anytime<sup>2</sup>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={discount} alt="discount" />
                        <p className="cards-heading">
                          20% Discount on all Food and Beverages
                        </p>
                        <Card.Text className="cards-text">
                          Excluding alcohol
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={5} className="mb-4">
                    <Card className="bg-black p-1 rounded-4 custom-height">
                      <Card.Body>
                        <img src={convenienceFee} alt="convenienceFee" />
                        <p className="cards-heading">0 Convenience Fees</p>
                        <Card.Text className="cards-text">
                          Waived on all days on any tickets purchase
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <div>
                    <p className="list-items">
                      <sup>1</sup>Excludes IMAX and DBOX formats. No fee apply
                      to Passport Credit only. Other fee apply to full-priced
                      tickets.
                    </p>
                    <p className="list-items">
                      <sup>2</sup>Excludes Acoholic beverages.
                    </p>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default MVPSubscriptionPage;
