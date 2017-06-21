import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import VideoListItem from "./video_list_item";
import { setSelectedVideo } from "../actions";

class VideoList extends Component {

  renderVideoListItem(video) {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
      />
    ); 
  }

  componentDidUpdate() {
    this.props.setSelectedVideo(this.props.videos[0]);
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map(this.renderVideoListItem)}
      </ul>
    );
  }
}

function mapStateToProps({ videos }) {
  return { videos };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
