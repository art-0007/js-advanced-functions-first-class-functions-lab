// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    const drivers = array.slice(0, 2)
    return drivers;
};

function returnLastTwoDrivers(array) {
    const drivers = array.slice(-2)
    return drivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg) {
  return  function(fare) {return arg * fare};
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

