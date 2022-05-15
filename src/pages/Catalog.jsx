import React, {useState} from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate }                    from '../api/tmdbApi';
import MovieGrid                               from '../components/movie-grid/MovieGrid';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import {useHistory}                            from "react-router-dom";

const Catalog = () => {

    const { category } = useParams();

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
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'Login'}
            </PageHeader>
            { category === cate.movie &&
                <div className="container">
                    <div className="section mb-3">
                        <MovieGrid category={category}/>
                    </div>
                </div>
            }
            { category !== cate.movie &&
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
            }
        </>
    );
}

export default Catalog;
