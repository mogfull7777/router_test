import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [chackBox, setChackBox] = useState(false);

    const signUpSubmithendle = async (e) => {
        e.preventDefault()

        try {

            const signUpList = {
                username : username,
                email : email,
                password : password,
                confirm : confirm,
                phone : phoneNumber
            }

            const signUpInfo = await axios.post('http://localhost:3000/api/auth/signup', signUpList)

            console.log("###########", signUpInfo)

            if (signUpInfo.status === 201) {

                alert(' signup success ')

                navigate('/login')

            }

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}className={'mt-5'}>
                    
                    <Form onSubmit={signUpSubmithendle}>

                        <h1>Sign Up</h1>

                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="phonenumber"
                                value={phoneNumber}
                                onChange={e =>setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="ConfirmPassword"
                                value={confirm}
                                onChange={e =>setConfirm(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >

                            <Form.Text className="text-muted">
                                가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                            </Form.Text>
                            <Form.Text className="text-muted">
                                통합 계정 및 서비스 이용약관, 개인정보처리방침에 동의합니다.
                            </Form.Text>

                            <Form.Check
                                type="checkbox"
                                label="Agree"
                                value={chackBox}
                                onChange={e => setChackBox(e.target.checked)}
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>

                        <Form.Text className="text-muted mt-3">
                            <Link to={'/login'}>
                                아이디가 있으십니까?
                            </Link>
                        </Form.Text>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;