import { buyIcecream } from "../redux";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>buy icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
