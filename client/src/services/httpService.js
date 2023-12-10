import axios from 'axios';


export class HttpService  {
  axios;
  constructor() {
    this.axios = axios;
    this.axios.defaults.baseURL = 'http://localhost:3000';
  }}






