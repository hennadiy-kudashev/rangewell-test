import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas } from 'actions/ideasActions';
import Idea from './Idea';

class Board extends Component {
  render() {
    const { loading, data, error } = this.props;
    if (error) {
      return <div>{error.message}</div>
    }
    if (!data || loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="card-columns">
        {data.map(idea => <Idea {...idea}/>)}
      </div>
    );
  }

  componentDidMount() {
    this.props.getIdeas();
  }
}

const mapStateToProps = ({ ideas }) => ({ ...ideas });

export default connect(mapStateToProps, {
  getIdeas
})(Board);
