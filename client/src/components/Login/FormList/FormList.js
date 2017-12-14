import React from "react";
import "./FormList.css";
import Row from "../Row";
import Col from "../Col";

// RecipeList renders a bootstrap list item
export const FormList = props => <Row> <Col size="lg-12"> <form> {props.children} </form> </Col> </Row>;