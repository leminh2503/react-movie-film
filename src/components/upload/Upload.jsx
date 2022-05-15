import {Button, Form, FormGroup, Input, Label, Row, Col} from "reactstrap";
import React, {useState}                                 from "react";
import "./upload.scss"

const Upload = () => {
    return (
        <div  className="upload">
            <Form>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                title
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Tên phim"
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
                                name="password"
                                placeholder="Mô tả placeholder"
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
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup check>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Is Series
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button style={{marginTop: "8px"}}>
                    Upload Film
                </Button>
            </Form>
        </div>
    )
}

export default Upload;