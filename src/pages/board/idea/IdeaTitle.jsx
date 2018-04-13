import React from 'react';
import { changeEditMode, updateIdea } from "actions/ideasActions";
import { connect } from "react-redux";

class IdeaTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  handleClick = () => {
    this.props.changeEditMode(this.props.id, true);
  };

  handleBlur = () => {
    this.props.changeEditMode(this.props.id, false);
    this.props.updateIdea({
      id: this.props.id,
      title: this.state.title
    });
  };

  handleChange = (e)=>{
    this.setState({
      title: e.target.value
    })
  };

  render() {
    const { editableID, id } = this.props;
    const { title } = this.state;

    return (
      <div className="card-header" onClick={this.handleClick}>{
        editableID !== id ? title : <input type="text" className="form-control" value={title} onChange={this.handleChange} onBlur={this.handleBlur}/>
      }</div>
    );
  }
}

const mapStateToProps = ({ ideas: { data: { editableID } } }) => ({
  editableID
});

export default connect(mapStateToProps, {
  updateIdea,
  changeEditMode
})(IdeaTitle);