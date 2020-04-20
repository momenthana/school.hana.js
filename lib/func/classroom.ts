import axios from 'axios'

const timetableClass = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/tiClrminfo', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.tiClrminfo[1].row
    })
    .catch(err => {
      return err
    })
}

export default timetableClass
