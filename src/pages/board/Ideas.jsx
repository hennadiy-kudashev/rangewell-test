import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas } from 'actions/ideasActions';
import Loading from 'components/Loading';
import Idea from './idea';
import {getListIdeas} from 'reducers/ideasReducer';

class Ideas extends Component {
  render() {
    const { loading, data, error } = this.props;
    if (error) {
      return <div>{error.message}</div>
    }

    return (
      <Loading loading={loading} fullScreen>
        <div className="card-columns">
          {data && data.map(idea => <Idea key={idea.id} {...idea}/>)}
        </div>
      </Loading>
    );
  }

  componentDidMount() {
    this.props.getIdeas();
  }
}

const mapStateToProps = ({ ideas: {loading, data, error} }) => ({
  loading,
  data: getListIdeas(data),
  error
});

export default connect(mapStateToProps, {
  getIdeas
})(Ideas);