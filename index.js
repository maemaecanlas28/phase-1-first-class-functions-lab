// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const listOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newList = listOfDrivers.slice(0,2);
    return newList;
}

const returnLastTwoDrivers = function (drivers) {
    const listOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newList = listOfDrivers.slice(-2);
    return newList;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier = function (fareMultiplier) {
    return function(x) {
      return fareMultiplier * x;
    }
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }