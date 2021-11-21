import school from "../dist/index.js"

school
  .search({
    SCHUL_NM: "하나고등학교",
  })
  .then(async (res) => {
    console.log("SEARCH:", res[0])

    await school.meal(res[0]).then((res) => {
      console.log("MEAL:", res[0])
    })

    await school.schedule(res[0]).then((res) => {
      console.log("SCHEDULE:", res[0])
    })

    await school.major(res[0]).then((res) => {
      console.log("MAJOR:", res[0])
    })

    await school.classes(res[0]).then((res) => {
      console.log("CLASSES:", res[0])
    })

    await school.timetable(res[0]).then((res) => {
      console.log("TIMETABLE:", res[0])
    })

    await school.classroom(res[0]).then((res) => {
      console.log("CLASSROOM:", res[0])
    })
  })
