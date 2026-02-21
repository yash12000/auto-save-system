const dayjs = require('dayjs');

exports.isInRange = (date, start, end) => {
  return dayjs(date).isAfter(dayjs(start).subtract(1, 'second')) &&
         dayjs(date).isBefore(dayjs(end).add(1, 'second'));
};