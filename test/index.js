const school = require('../dist')

school.search({
  SCHUL_NM: '하나고등학교'
})
  .then(async res => {
    console.log('SEARCH:', res[0])
    await school.meal(res[0])
      .then(res => {
        console.log('MEAL:', res[0])
      })
    await school.schedule(res[0])
      .then(res => {
        console.log('SCHEDULE:', res[0])
      })
    await school.major(res[0])
      .then(res => {
        console.log('MAJOR:', res[0])
      })
    await school.classroom(res[0])
      .then(res => {
        console.log('CLASSROOM:', res[0])
      })
    await school.hTimetable(res[0])
      .then(res => {
        console.log('H_TIMETABLE:', res[0])
      })
  })
