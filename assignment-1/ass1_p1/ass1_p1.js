setInterval(() => {
    console.clear()
    let d = new Date()
    console.log('Date:'+`${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()} 
    \nTime: ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
  }, 1000)