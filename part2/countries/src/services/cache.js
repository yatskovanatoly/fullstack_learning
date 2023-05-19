import axios from "axios";

const update = (newObject) => {
    const request = axios.put(`cache.json`, newObject)
    return request.then(response => response.data)
  }

export default update;
