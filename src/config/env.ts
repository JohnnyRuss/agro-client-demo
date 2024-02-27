const env = import.meta.env;

const NODE_MODE = env.VITE_ENV_MODE || "";

const API_ORIGIN = env.VITE_API_ORIGIN || "";
const API_ENDPOINT = env.VITE_API_ENDPOINT || "";

const APP_ORIGIN = env.VITE_ORIGIN;

const ADMINISTRATOR_ROLE = env.VITE_ADMINISTRATOR_ROLE || "";

export { NODE_MODE, API_ORIGIN, API_ENDPOINT, APP_ORIGIN, ADMINISTRATOR_ROLE };