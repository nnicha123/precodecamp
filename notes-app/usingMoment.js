// const now = moment()
// console.log(now.toString())
// now.add(1,'year').add(1,'minute').subtract(20,'days')
// console.log(now.toString())
// console.log(now.format('dddd Do MMM YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

const birthday = new moment()
birthday.year(1995)
birthday.month(7)
birthday.date(20)
console.log(birthday.toString())

console.log(birthday.format('MMM D, YYYY'));