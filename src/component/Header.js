import React from 'react';
import {Nav} from "react-bootstrap";

const Header = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Main</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/find/email">Find Email</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/forgot/password">Forgot password</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Header;