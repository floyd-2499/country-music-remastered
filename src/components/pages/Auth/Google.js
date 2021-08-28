import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";
import "../header&footer/style.css";
import { Link } from "react-router-dom";

class GoogleLogin extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "555154005917-1cls6j5forkauheo5a5odq94272i0pf3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      let a = "true";
      localStorage.setItem("signIn", a);
    } else {
      let a = "false";
      this.props.signOut();
      localStorage.setItem("signIn", a);
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div className="signin-btn">
          <button>
            <i className="fab fa-google"></i> Sign In{" "}
          </button>
        </div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <div className="signin-btn">
          <button onClick={this.onSignOut}>
            <Link to="/">Sign Out</Link>
          </button>
        </div>
      );
    } else {
      return (
        <div className="signin-btn">
          <button onClick={this.onSignIn}>
            <Link to="/">
              <i className="fab fa-google"></i> Sign In{" "}
            </Link>
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleLogin);
