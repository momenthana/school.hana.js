import axios from 'axios'

const hTimetable = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/hisTimetable', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.hisTimetable[1].row
    })
    .catch(err => {
      return err
    })
}

export default hTimetable
