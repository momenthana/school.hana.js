import axios from 'axios'

const search = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/schoolInfo', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.schoolInfo[1].row
    })
    .catch(err => {
      return err
    })
}

export default search
