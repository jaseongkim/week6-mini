import React from "react";
import Card from "react-bootstrap/Card";

const PostCards = ({ product }) => {
  return (
    <Card style={{ width: "12rem", border: "1px solid black" }}>
      <div style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.content}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCards;
