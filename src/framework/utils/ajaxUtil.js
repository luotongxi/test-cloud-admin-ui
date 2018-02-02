import axios from 'axios'

import { WEB_API_URL_BASE } from '../config/urls'

function doAjax ($cfg) {
  $cfg.withCredentials = true; // 跨域请求需要用到证书
  $cfg.headers = {
    'X-Requested-With': 'XMLHttpRequest'
  };
  return axios($cfg).then((res) => {
    return res.data;
  }).catch((error) => {
    let res = error.response;
    console.log("error==>" + res);
  })
}

export default {

  doGet(cfg){
    cfg.method = "GET";
    cfg.url = `${WEB_API_URL_BASE}/${cfg.url}`;
    return doAjax(cfg);
  },

  doPut(cfg){
    cfg.method = "PUT";
    cfg.url = `${WEB_API_URL_BASE}/${cfg.url}`;
    return doAjax(cfg);
  },

  doDelete(cfg){
    cfg.method = "DELETE";
    cfg.url = `${WEB_API_URL_BASE}/${cfg.url}`;
    return doAjax(cfg);
  },

  doPost(cfg){
    cfg.method = "POST";
    cfg.url = `${WEB_API_URL_BASE}/${cfg.url}`;
    return doAjax(cfg);
  }
}

