// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
// import Toast from '@/components/Toast'

const SER_REQUEST = "http://192.30.255.92:80";
const BASE_URL = process.env.NODE_ENV === 'development' ? window.location.origin : window.location.origin + '/gjj';


// 超时时间
axios.defaults.timeout = 100000

// 基础路径
axios.defaults.baseURL = BASE_URL

axios.interceptors.transformResponse = [function (data) {
  return data;
}],

axios.interceptors.request.use(config => {
  if (config.baseURL !== BASE_URL) { return; }
  const defParams = {};
  if (config.method === 'get') {
    if (config.params && Object.prototype.toString(config.params) === '[object Object]') {
      config.params = Object.assign(defParams,config.params);
    } else {
      config.params = defParams
    }
  } else if (config.method === 'post') {
    let data = Object.assign(defParams,config.data) ;
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    config.data = formData;
  }
  return config
}, error => {
  // Toast("加载超时");
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  data = data.data;
  if (data.code !== '1') {
    // Toast(data.msg)
  }
  return data
}, error => {
  // Toast("加载失败")
  return Promise.reject(error)
})

export default axios
