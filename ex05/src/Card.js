import React, { Component } from "react";
import "./Card.css";
import { ButtonVote,ButtonUnvote,} from "./Button";
import Score from "./Score";

class Card extends Component {
  state = {
    score: "MIN",
  }
  handleVote = () => {
    let temp = ""
    if (this.state.score === "MIN") {
      temp = "1";
    }else if (this.state.score === "MAX"){
      temp = "MAX";
      alert("Can not Vote!");
    }else if(this.state.score === "9"){
      temp = "MAX";
    }else{
      temp = (parseInt(this.state.score)+1).toString(); 
    }
    this.setState({
      score : temp,
    });
  }
  handleUnvote = () => {
    let temp = ""
    if (this.state.score === "MIN") {
      temp = "MIN";
      alert("Can not Unvote!")
    }else if (this.state.score === "MAX"){
      temp = "9";
    }else if(this.state.score === "1"){
      temp = "MIN";
    }else{
      temp = (parseInt(this.state.score)-1).toString(); 
    }
    this.setState({
      score : temp,
    });
  }
  render() {
    return (
      <div className="Card-container">
        <section className="Card-section">
          <h3>{this.props.head}</h3>
          <h4>{this.props.subhead}</h4>
          <p>{this.props.article}</p>
        </section>
        <img className="Card-img" src={this.props.image}></img>
        <div className="Vote-container">
          <ButtonVote parentCallback={this.handleVote}/>
          <Score score={this.state.score}/>
          <ButtonUnvote  parentCallback={this.handleUnvote} />
        </div>
      </div>
    );
  }
}

export default Card;
