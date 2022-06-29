// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const newList = drivers.slice(0,2);
    return newList;
}
console.log(returnFirstTwoDrivers(["Cocoa Puffs", "Cream Puffs", "Honey Puffs"]));

const returnLastTwoDrivers = function (drivers) {
    const newList = drivers.slice(-2);
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