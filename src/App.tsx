import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./root";

interface ISessionProps {
  userSetting?: any;
}
class App extends React.Component<ISessionProps> {

  componentDidMount() {
    // this.props.getmultiSetting();
    //this.getteacafe();
  }

  render() {
    return (
      <Router>
        <Root {...this.props} />
      </Router>
    );
  }
}


// const mapStateToProps = (state: any) => ({
// caffeDetail: state.cafedetail
// });



const mapStateToProps = (state: any) => ({
  userSetting: state.UserSetting
});
export default connect(mapStateToProps, null)(App);
