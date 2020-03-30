const school = require('../dist')

school.search({
  SCHUL_NM: '하나고등학교'
})
  .then(res => {
    console.log(res)
    school.meal(res)
      .then(res => {
        console.log(res)
      })
  })
