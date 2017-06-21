import React, { Component } from "react";
import VideoListItem from "./video_list_item";

class VideoList extends Component {

  videoItems () {
    return this.props.videos.map(video => {
      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

function mapStateToProps({ videos }) {
  return { videos };
}

export default connect(mapStateToProps)(VideoList);
