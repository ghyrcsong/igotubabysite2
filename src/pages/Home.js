import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';


const Home = () => {

    const [title, setTitle] = useState(['Developmental', 'Check List', 'Encouraging']);

    return (
        <>
            <div className='list'>
                <Row>
                    <Col>
                        <img src={require('../images/Img1.jpg')} />
                    </Col>
                    <Col>
                        <h3> {title[0]} </h3>
                        <p><strong>Milestones for Baby:</strong><br />When do you expect to see his/her first rolling over, sitting up, standing/walking and first words.</p>
                    </Col>
                </Row>
            </div>
            <div className='list'>
                <Row>
                    <Col >
                        <img src={require('../images/Img2.jpg')} />
                    </Col>
                    <Col>
                        <h3> {title[1]} </h3>
                        <p><strong>The Must Have And Nice To Haves:</strong><br />To discover what you'll need during this amazing time a parenthood.</p>
                    </Col>
                </Row>
            </div>

            <div className='list'>
                <Row>
                    <Col>
                        <img src={require('../images/Img3.jpg')} />
                    </Col>
                    <Col>
                        <h3> {title[2]} </h3>
                        <p><strong>Positive And Inspiring Quotes:</strong><br />To build a more peaceful and loving relationship with your child.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;