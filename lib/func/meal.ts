import axios from 'axios'

const meal = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.mealServiceDietInfo[1].row
    })
    .catch(err => {
      return err
    })
}

export default meal
