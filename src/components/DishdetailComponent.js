import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem,ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

function RenderDish({dish}) {
  if(dish==null){
    return <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
    </div>
}
return(
    <div className="col-12 col-md-3">
        <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>                    
        </Card>
    </div>
);
}

function RenderComments({comments, addComment, dishId}) {
  if (comments == null) {
    return(<div></div>);
}
const showComments = comments.map((cmnt) => {
    return(
        <li key={cmnt.id}>
            <p>{cmnt.comment}</p>
            <p>--{cmnt.author},
            &nbsp;
            {new Intl.DateTimeFormat('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: '2-digit'
            }).format(new Date(Date.parse(cmnt.date)))}
            </p>
        </li>
    );
});

const commentList = comments.map((comment) => (
    <ListGroupItem key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
    </ListGroupItem>
    ));


return (
    <div className="col-12 col-md-8 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{showComments}</ul>
    </div>
);

}



function DishDetail({ dish, comments, addComment }) {
    if (!dish) {
        return <div></div>;
    }
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            {/* <RenderComments comments={props.comments} /> */}
            <RenderComments comments={comments} />
                    <CommentForm />
        </div>
    </div>
    </div>
);
}
       

    

export default DishDetail;