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
       name: 'An',
       age: 20,
       gender: 'male',
     },
     {
       name: 'Thien',
       age: 27,
       gender: 'male',
     },
   ];

const countMale = _.reduce(students, function(acc, curr) {
     if (curr.gender === 'male')
          acc += 1;
     return acc;
}, 0);

const countFemale = _.reduce(students, (acc, curr) => {
     if (curr.gender === 'female')
          acc += 1;
     return acc;
},0);

console.log(`number of male: ${countMale}`);
console.log(`number of female: ${countFemale}`);

const studenNames = _.map(students, 'name');
console.log(studenNames);
