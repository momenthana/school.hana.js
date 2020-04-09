import axios from 'axios'

const schedule = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/SchoolSchedule', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.SchoolSchedule[1].row
    })
    .catch(err => {
      return err
    })
}

export default schedule
