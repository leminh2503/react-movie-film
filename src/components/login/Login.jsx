import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState}                                 from "react";
import {useHistory}                            from "react-router-dom";
import "./login.scss";

const Login = () => {
    const history = useHistory();

    const [userName, setUserName] = useState("");

    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log(userName);
        console.log(password);
        localStorage.setItem ('username', userName);
        localStorage.setItem ('password', password);
        history.push("/");
    }
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
    )
}

export default Login