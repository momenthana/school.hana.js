import axios from 'axios'

const search = (text: string) => {
  return axios.get('https://open.neis.go.kr/hub/schoolInfo', {
    params: {
      Type: 'json',
      SCHUL_NM: text
    }
  })
    .then(res => {
      return res.data.schoolInfo[1].row[0]
    })
    .catch(err => {
      return err
    })
}

export default search
