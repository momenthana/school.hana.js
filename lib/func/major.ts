import axios from 'axios'

const major = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/schoolMajorinfo', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.schoolMajorinfo[1].row
    })
    .catch(err => {
      return err
    })
}

export default major
