import userImgDefault from '../../assets/images/userImgDefault.svg';

const API_REST_URL = process.env.REACT_APP_ENV_URL_BACKEND;
const DATASOURCE_ENV = process.env.REACT_APP_DATASOURCE_ENV;
const AUTH_TOKEN = "AUTH_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL;
const MIL_PERU = 5 * 1000 * 60 * 60;
const URL_MAPS = "https://maps.google.com/maps?q=";
const PATH_PAYMENTS = process.env.REACT_APP_PE_PATH_PAYMENTS;
const PATH_RESERVES = process.env.REACT_APP_PE_PATH_RESERVE_RESOURCES;

const MODALITIES = {
  PRESENCIAL: "P",
  VIRTUAL: "V",
};

const SCREEN_SIZE = {
  sm: 640,
  md: 768,
  lg: 992,
  xl: 1280,
};

const BREAKPOINT_SIZE = SCREEN_SIZE.lg;

const roles = ["user", "medic", "superadmin"];

const constants = {
  ROLES: roles,
  API_REST_URL: `${API_REST_URL}`,
  GRAPHQL_URL,
  AUTH_TOKEN,
  REFRESH_TOKEN,
  MIL_PERU,
  DATASOURCE_ENV,
  SCREEN_SIZE,
  BREAKPOINT_SIZE,
  MODALITIES,
  URL_MAPS,
  DEFAULT_PHOTO: userImgDefault,
  PATH_PAYMENTS,
  PATH_RESERVES,
};

export default constants;
