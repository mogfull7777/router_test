import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom";

const SandCode = () => {

    // const params =  useParams()

    // const [phoneNumber, setPhoneNumber] = useState("")
    const [codeNumber, setCodeNumber] = useState("")

    const codeNumberSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            const getPhoneNumber = await localStorage.getItem('phone')

            const codeList = {
                phone : `${getPhoneNumber}`,
                code : codeNumber
            }

            const codeInfo = await axios.post('http://localhost:3000/api/auth/phone/check', codeList)

            console.log(codeInfo)

        } catch (err) {
            console.log(err.message)
        }

    };

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}className={'mt-5'}>
                    <Form onSubmit={codeNumberSubmitHendle}>

                        {/*<Form.Group className="mb-3" controlId="phone">*/}
                        {/*    <Form.Label>*/}
                        {/*        Phone Number*/}
                        {/*    </Form.Label>*/}
                        {/*    <Form.Control*/}
                        {/*        type="phone"*/}
                        {/*        placeholder="Phone Number"*/}
                        {/*        value={phoneNumber}*/}
                        {/*        onChange={e => setPhoneNumber(e.target.value)}*/}
                        {/*    >*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>
                                Code Number
                            </Form.Label>
                            <Form.Control
                                type="codenumber"
                                placeholder="Code Number"
                                value={codeNumber}
                                onChange={e => setCodeNumber(e.target.value)}
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

export default SandCode;