import axios from 'axios'

const timetable = (object: any) => {
  let type: string = ''
  object.SCHUL_KND_SC_NM == '초등학교' ? type = 'elsTimetable' :
  object.SCHUL_KND_SC_NM == '중학교' ? type = 'misTimetable' :
  object.SCHUL_KND_SC_NM == '고등학교' ? type = 'hisTimetable' :
  object.SCHUL_KND_SC_NM == '특수학교' ? type = 'spsTimetable' :
  console.log('SCHUL_KND_SC_NM 값은 필수입니다.')
  if (!type) return

  return axios.get('https://open.neis.go.kr/hub/' + type, {
    params: Object.assign({
      Type: 'json',
    }, object)
  })
    .then(req => {
      return req.data[type][1].row
    })
    .catch(err => {
      return err
    })
}

export default timetable
