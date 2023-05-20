import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {

    // 1. 메일로 보내진 url 페이지를 활성화 시킨다.
    // 2. url 파라미터에 해당하는 토큰 값을 불러온다.
    // 3. 토큰 값과 새로운 비밀번호 value를 changePasswordList에 보낸다.

    const params = useParams();

    console.log(params)

    const [newPassword, setNewPassword] = useState("")


    const changePasswordSubmitHendle = async () => {

        try {

            const changePasswordList = {
                token : {params},
                newPassword : newPassword
            }

            const changePasswordParams = await axios.put(`http://localhost:3000/api/auth/change/password${params}`)

            console.log('%%%%%%%%%%%%%' , changePasswordParams)
            console.log('^^^^^^^^^^^^^^' , changePasswordList)




        } catch (err) {

            console.log(err.massage)

        }

    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}className={'mt-5'}>
                    <Form onSubmit={changePasswordSubmitHendle}>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>
                                New Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="new password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            create new password
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;