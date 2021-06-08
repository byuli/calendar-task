import axios from "axios";

export const saveData = (data,success, fail) => {
  axios.post('/api/schedule', data)
  .then(function (response) {
    success(response)
    console.log(response);
  })
  .catch(function (error) {
    success(fail)
    console.log(error);
  });
}
