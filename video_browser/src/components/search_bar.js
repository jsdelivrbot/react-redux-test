import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVideos } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.props.fetchVideos("surfboard");

    this.onInputChange = this.onInputChange.bind(this);
  }

  videoSearch = _.debounce(term => {
    this.props.fetchVideos(term);
  }, 300);

  onInputChange(event) {
    let term = event.target.value;
    this.setState({ term });
    this.videoSearch(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
