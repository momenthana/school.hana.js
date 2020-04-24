import axios from 'axios'

const schedule = (object: object) => {
  const date = new Date()
  const FROM_YM = date.getFullYear().toString() + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)

  return axios.get('https://open.neis.go.kr/hub/SchoolSchedule', {
    params: Object.assign({
      Type: 'json',
      AA_FROM_YMD: FROM_YM + '01',
      AA_TO_YMD: FROM_YM + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
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
