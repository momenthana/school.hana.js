import axios from 'axios'

const meal = (object: object) => {
  const date = new Date()

  return axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo', {
    params: Object.assign({
      Type: 'json',
      MLSV_YMD: date.getFullYear().toString() + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
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
