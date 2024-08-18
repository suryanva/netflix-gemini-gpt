export const NETFLIX_LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BACKGROUND_URL =
  "https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg";

export const USER_URL = "https://redux-toolkit.js.org/img/redux.svg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};

export const TMDB_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w780/";

export const TMDB_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TMDB_TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const TMDB_UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
