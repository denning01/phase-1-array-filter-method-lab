// Code your solution here
// Example declarations in index.js

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  

  function fuzzyMatch(drivers, partial) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(partial.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
