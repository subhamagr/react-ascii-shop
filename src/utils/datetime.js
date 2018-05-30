export function humanize(dateSting) {
  const date = new Date(dateSting);
  const now = Date.now();
  const delta = Math.round((now - date) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  let humanizedDateString;

  if (delta < 0) {
    humanizedDateString = 'comming soon';
  } else if (delta < 30) {
    humanizedDateString = 'just now';
  } else if (delta < minute) {
    humanizedDateString = `${delta} seconds ago`;
  } else if (delta < 2 * minute) {
    humanizedDateString = 'a minute ago';
  } else if (delta < hour) {
    humanizedDateString = `${Math.floor(delta / minute)} minutes ago`;
  } else if (Math.floor(delta / hour) === 1) {
    humanizedDateString = '1 hour ago';
  } else if (delta < day) {
    humanizedDateString = `${Math.floor(delta / hour)} hours ago`;
  } else if (delta < day * 2) {
    humanizedDateString = 'yesterday';
  } else if (delta < week) {
    humanizedDateString = `${Math.floor(delta / day)} days ago`;
  } else {
    humanizedDateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return humanizedDateString;
}