const school = require('../dist')

school.search('하나고등학교')
  .then(res => {
    console.log(res)
  })
