import React, { PropTypes as toBe } from 'react';
import FbApi from 'utils/FbApi';

export default class Home extends React.Component {
  render () {
    const {id, name } = FbApi.me;

    return (
      <div>
        <img src={`https://graph.facebook.com/${id}/picture`} /> <br />
        ID: {id}<br />
        Name: {name}<br />
      </div>
    )
  }
}



