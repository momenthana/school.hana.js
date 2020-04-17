import axios from 'axios'

const sTimetable = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/spsTimetable', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.spsTimetable[1].row
    })
    .catch(err => {
      return err
    })
}

export default sTimetable
