import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedVideo } from "../actions";

class VideoListItem extends Component {

  constructor(props) {
    super(props);

    this.imageUrl = this.props.video.snippet.thumbnails.default.url;
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo = () => {
    this.props.setSelectedVideo(this.props.video);
  }

  render() {
    return (
    <li onClick={this.selectVideo} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={this.imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{this.props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoListItem);