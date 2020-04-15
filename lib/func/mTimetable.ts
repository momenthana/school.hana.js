import axios from 'axios'

const mTimetable = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/misTimetable', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.misTimetable[1].row
    })
    .catch(err => {
      return err
    })
}

export default mTimetable
