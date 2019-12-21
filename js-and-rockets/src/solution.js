// Please implement your solution in this file



const _ = require('lodash');
const isNasa = (launch) => {
  let isNasa = false
   if ( launch.rocket.second_stage.payloads ){
    launch.rocket.second_stage.payloads.forEach((payload) => {
      if (payload.customers.join().includes("NASA")) isNasa = true
    })
  }
  return isNasa
}
const orderByDate = (launches) =>{
 return launches.sort (launch => launch.launch_date_unix)
}
 const prepareData = (data) => {
  // select 2018 launch by NASA
  let results = data.filter(launch => (launch.launch_year === "2018" && isNasa(launch)));
  // Group them based on the payload count
  results = _.groupBy(results, launch => launch.rocket.second_stage.payloads.length)
  // order every group by date and flat the array of launches
  results = _.map(results, orderByDate).flat()
  // map on the result to clean the output
  results = results.map( launch => ({
    flight_number: launch.flight_number,
    mission_name: launch.mission_name,
    payloads_count: launch.rocket.second_stage.payloads.length
  }) )
  return results.reverse()
 }
const renderData = (data) => {
   const container = document.querySelector("#out")
   container.innerHTML = JSON.stringify(data, undefined, 2);
}

module.exports = {
  prepareData: prepareData,
  renderData: renderData
};
