import { combineReducers } from "redux";
import videosreducer from "./reducer_videos";
import videoreducer from "./reducer_video";

const rootReducer = combineReducers({
  videos: videosreducer,
  video: videoreducer
});

export default rootReducer;
