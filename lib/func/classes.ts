import axios from 'axios'

const classroom = (object: object) => {
  return axios.get('https://open.neis.go.kr/hub/classInfo', {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data.classInfo[1].row
    })
    .catch(err => {
      return err
    })
}

export default classroom
