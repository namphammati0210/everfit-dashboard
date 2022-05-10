export const getDaysInWeek = () => {
  let curr = new Date;
  let week = []

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i ;
    let day = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 10);
    week.push(day)
  }

  return week;
}

export const getToday = () => {
  const today = new Date().toLocaleDateString();

  return today;
}

export const checkToday = (date1, date2) => {
  const compareDate1 = new Date(date1).getTime();
  const compareDate2 = new Date(date2).getTime();

  return compareDate1 === compareDate2;
}