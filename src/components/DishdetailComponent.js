import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
  render() {
    const { dish } = this.props;

    if (dish) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    } 
  }
  
}

function renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
  
    const commentItems = comments.map((comment) => (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </div>
    ));
  
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentItems}</ul>
      </div>
    );

    
}       

    

export default DishdetailComponent;