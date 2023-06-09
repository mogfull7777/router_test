import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");

    const findPasswordSubmit = async (e) => {
        e.preventDefault()

        try {

            const findEmailList = {email : email};

            const sendEmail = await axios.post('http://localhost:3000/api/auth/find/password', findEmailList)

            console.log('%%%%%%%%%%%%', sendEmail)

            if (sendEmail.status === 201) {
                alert( `Chack your ${email} email` )

                navigate('/change/password:tokenId')
            }



        } catch (err) {

            console.log(err.massage)

        }

    }

    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={12} md={6} className={'mt-5'}>

                    <h1>Forgot Password</h1>

                    <Form onSubmit={findPasswordSubmit}>

                        <Form.Group>
                            <Form.Text className="text-muted mt-3">
                                가입 시 사용한 이메일을 입력해주세요.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="jystore@jystore.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;