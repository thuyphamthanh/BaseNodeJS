const _ = require('lodash');

const students = [
     {
       name: 'Nam',
       age: 24,
       gender: 'male',
     },
     {
       name: 'Mai',
       age: 22,
       gender: 'female',
     },
     {
       name: 'Trang',
       age: 23,
       gender: 'female',
     },
     {
       name: 'Thuy',
       age: 20,
       gender: 'male',
     },
     {
       name: 'Thien',
       age: 27,
       gender: 'male',
     },
     {
      name: 'Thuy',
      age: 27,
      gender: '',
    },
    {
      name: 'An',
      age: 27,
      gender: 'female',
    },
   ];

function countByType(type){
  return _.reduce(students, (count, student) => {
    count[student[type]] = count[student[type]] ? count[student[type]]+1 : 1;
    return count;
  }, {});
}

console.log(countByType('gender'));

const stundenNames = _.map(students, 'name');
console.log(stundenNames);