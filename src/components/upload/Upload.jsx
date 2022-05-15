import {Button, Form, FormGroup, Input, Label, Row, Col} from "reactstrap";
import React, {useState}                                 from "react";
import tmdbApi                                 from "../../api/tmdbApi";
import "./upload.scss";

const Upload = () => {
    const initValue = {
        title: "",
        description: "",
        img: "",
        imgTitle: "",
        imgSm: "",
        trailer: "",
        video: "",
        year: "",
        limit: "",
        genre: "",
        isSeries: ""
    };

    const [value, setValue] = useState(initValue);
    const handleOnChange = (e, type) => {
        setValue(prev => ({
            ...prev,
            [type]: e.target.value
        }));
    };

    const handleSubmit = () => {
        const createMovies = async () => {
            try {
                const response = await tmdbApi.createMovies({
                    ...value,
                    year: "2",
                    isSeries: true,
                });
                console.log('Fetch products successfully: ', response);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        };
        createMovies();
    }

    return (
        <div className="upload">
            <Form>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                title
                            </Label>
                            <Input
                                id="exampleEmail"
                                placeholder="Tên phim"
                                value={value.title}
                                onChange={(e) => handleOnChange(e, "title")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="examplePassword">
                                Mô tả
                            </Label>
                            <Input
                                id="examplePassword"
                                placeholder="Mô tả placeholder"
                                value={value.description}
                                onChange={(e) => handleOnChange(e, "description")}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">
                        Link ảnh
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="link ảnh"
                        value={value.img}
                        onChange={(e) => handleOnChange(e, "img")}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">
                        imgTitle
                    </Label>
                    <Input
                        id="exampleAddress2"
                        name="address2"
                        placeholder="imgTitle"
                        value={value.imgTitle}
                        onChange={(e) => handleOnChange(e, "imgTitle")}
                    />
                </FormGroup>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleCity">
                                imgSm
                            </Label>
                            <Input
                                id="exampleCity"
                                name="city"
                                value={value.imgSm}
                                onChange={(e) => handleOnChange(e, "imgSm")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleState">
                                trailer
                            </Label>
                            <Input
                                id="exampleState"
                                name="state"
                                value={value.trailer}
                                onChange={(e) => handleOnChange(e, "trailer")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleZip">
                                video
                            </Label>
                            <Input
                                id="exampleZip"
                                name="zip"
                                value={value.video}
                                onChange={(e) => handleOnChange(e, "video")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleZip">
                                limit
                            </Label>
                            <Input
                                id="exampleZip"
                                name="limit"
                                type="number"
                                value={value.limit}
                                onChange={(e) => handleOnChange(e, "limit")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleZip">
                                genre
                            </Label>
                            <Input
                                id="exampleZip"
                                name="genre"
                                value={value.genre}
                                onChange={(e) => handleOnChange(e, "genre")}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup check>
                            <Input
                                value={value.isSeries}
                                id="checkbox2"
                                type="switch"
                            />
                            {' '}
                            <Label check>
                                Is Series
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button style={{marginTop: "8px"}} onClick={handleSubmit}>
                    Upload Film
                </Button>
            </Form>
        </div>
    );
};

export default Upload;