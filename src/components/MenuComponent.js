import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';    


class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDish: null
      }
    }
  
    onDishSelect(dish) {
      this.setState({ selectedDish: dish });
    }
  
    render() {
      const menu = this.props.dishes.map((dish) => {
        return (
          <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardTitle>{dish.name}</CardTitle>
            </Card>
          </div>
        );
      });
  
      return (
        <div className="container">
          <div className="row">
            {menu}
          </div>
          <div className="row">
            <DishdetailComponent dish={this.state.selectedDish} />
          </div>
        </div>
      );
    }
  }
    

export default Menu;
