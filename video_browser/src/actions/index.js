import axios from "axios";

export const FETCH_VIDEOS = "FETCH_VIDEOS";

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function fetchVideos(term) {
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  axios.get(ROOT_URL, {params})

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}