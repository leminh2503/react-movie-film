import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState}                       from "react";
import {useHistory}                            from "react-router-dom";
import {requestOptions}                        from "../../api/config";
import apiConfig                               from "../../api/apiConfig";
import axios                                   from 'axios';
import tmdbApi                                 from "../../api/tmdbApi";
import "./login.scss";

const Login = () => {
    const history = useHistory();

    const [userName, setUserName] = useState("");

    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const params = {username: userName, password: password};
            const response = await tmdbApi.login(params);
            console.log('Fetch products successfully: ', response.accessToken);
            localStorage.setItem("access_token", response.accessToken);
            history.push("/")
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    };

    const handleSubmit = () => {
        login();
    };
    return (
        <div className="login">
            <Form inline>
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Username
                    </Label>
                    <Input
                        value={userName}
                        id="exampleEmail"
                        name="email"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Password
                    </Label>
                    <Input
                        value={password}
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                {' '}
                <Button onClick={handleSubmit} type="button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;