import { combineReducers } from "redux";
import videosreducer from "./reducer_videos";

const rootReducer = combineReducers({
  videos: videosreducer
});

export default rootReducer;
