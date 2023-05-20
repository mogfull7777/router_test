import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FindEmail = () => {

    const navigate = useNavigate()



    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneNumberSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            const phoneNumberList = {
                phone: phoneNumber
            }

            const loginInfo = await axios.post('http://localhost:3000/api/auth/phone/verification', phoneNumberList)

            console.log(loginInfo)

            if (loginInfo.status === 201) {

                alert(" please chack your phone massage. ")

                localStorage.setItem('phone', loginInfo.data.to)

                navigate('/sand/code')

            }


        } catch (err) {
            console.log(err.massage)
        }

    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}className={'mt-5'}>
                    <Form onSubmit={phoneNumberSubmitHendle}>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>
                                Phone Number
                            </Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Find Email
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FindEmail;