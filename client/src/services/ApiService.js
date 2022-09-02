import axios from "axios";
//const API_URL = "http://awesomebuilder-api.awesomebuilder.local";
const API_URL = "http://awesomebuilder-api";
const apiCall = axios.create({
    baseURL: API_URL
  });

  apiCall.interceptors.request.use(
    config => {
      config.headers["Access-Control-Allow-Origin"] = "*"
      config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS' 
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

export async function getProducts() {

/*     try{
        const response = await fetch('http://awesomebuilder-api.awesomebuilder.local/createCard?count=5', {
            headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": true, 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Access-Control-Allow-Origin' : '*'}
          });
        return await response.json();
    }catch(error) {
        return [];
    }
 */
    //return apiCall.get('/createCard?count=5').then((res) => {
    return axios.get('/createCard?count=5').then((res) => {
        // console.log("getAllEvents response", res)
      //   localStorage.removeItem("user");
      //   localStorage.removeItem("authToken");
      console.log("response", res)
         return res.data;
       }).catch((error) => {
           console.log(error)
          // return "error message"
           return error
         })
    
}
export async function getCustomers() {
/*     try{
        const response = await fetch(`http://awesomebuilder-api.awesomebuilder.local/createCard?count=10`, {
            headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": true, 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Access-Control-Allow-Origin' : '*'}
          })
        return await response.json();
    }catch(error) {
        return [];
    }
 */
    return axios.get(`/createCard?count=10`).then((res) => {
        // console.log("getAllEvents response", res)
      //   localStorage.removeItem("user");
      //   localStorage.removeItem("authToken");
      console.log("response", res)
         return res.data;
       }).catch((error) => {
           console.log(error)
          // return "error message"
           return error
         })
    

}


/* export async function getCustomers() {
    const response = await fetch(`http://awesomebuilder-api.awesomebuilder.local/createCard?count=10`, {
       // method: 'POST',
       // headers: {'Content-Type': 'application/json'},
       // body: JSON.stringify({user: data})
      })
    return await response.json();
} */