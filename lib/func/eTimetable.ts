import axios from 'axios'

const eTimetable = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/elsTimetable', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.elsTimetable[1].row
    })
    .catch(err => {
      return err
    })
}

export default eTimetable
