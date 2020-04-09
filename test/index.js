const school = require('../dist')

school.search({
  SCHUL_NM: '하나고등학교'
})
  .then(res => {
    console.log(res[0])
    school.meal(res[0])
      .then(res => {
        console.log(res[0])
      })
    school.schedule(res[0])
      .then(res => {
        console.log(res[0])
      })
  })
