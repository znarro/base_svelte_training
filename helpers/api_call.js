/* Metodo encargado de manejar peticiones a servicios Rest
 *  Modo de uso:
 *  ApiCall.request(url, method, headers, body)
 */

import axios from "axios";

class ApiCall {
  static request(
    url = "",
    method = "get",
    headers = {},
    data = {},
    timeout = 10000
  ) {
    try {
      return axios({
        url: url,
        method: method,
        headers: headers,
        data: data,
        timeout: timeout,
        responseType: "json",
        //validateStatus: (status) => { return status >= 200 && status < 600; }
        // Reject only if the status code isn't between those numbers
      })
        .then((response) => {
          return response;
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log(
              error.response.data,
              error.response.status,
              error.response.headers
            );
            return error.response;
            // if (error.response.status == 400 || error.response.status == 404) { return(error.response.data); }
          } else if (error.request) {
            // The request was made but no response was received `error.request` is an instance of
            // XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
            console.log(error);
            console.log(error.request);
            return error.request;
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error: ", error.message);
            return error.message;
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export default ApiCall;
