import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { ImEye } from "react-icons/im";

const PostCards = ({ product }) => {
  let navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/detail/${product.id}`);
      }}
      style={{ width: "12rem", border: "1px solid black" }}
    >
      <div style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          style={{ width: "100%", height: "200px" }}
        />
      </div>

      <Card.Body
        style={{
          textAlign: "center",
        }}
      >
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.content}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card.Text style={{ marginRight: "10px" }}>
            <ImEye onClick={() => {}} style={{ marginRight: "5px" }} />
            {product.view}
          </Card.Text>
          <Card.Text>
            <VscHeart onClick={() => {}} style={{ marginRight: "5px" }} />
            {product.dibCount}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCards;
