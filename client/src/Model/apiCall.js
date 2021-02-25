import axios from "axios";
  export default class ApiCall{
        constructor(){

        }
        
        apiAxios() {
          return axios.create({
            baseURL: "https://react-express-applicationapp.herokuapp.com/",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        }


      }
      