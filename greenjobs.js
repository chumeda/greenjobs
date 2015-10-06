/**
 * Analytics for Hawaii Directory of Green Employers.
 * Created by Kelsie on 9/29/2015.
 */

/* globals _, greenjobs */
/* exported testdata, listIndustries, countyGreenJobs, jobswithKeyword */

function hasIndustry(record) {
  return record.hasOwnProperty("Industry");
}

function noString(record) {
  return _.isEmpty(record["Industry"]);
}
/**
 * Provides a small set of records from the Hawaii Directory of Green Employers.
 * @type {Array.<T>}
 */
//var testdata = greenjobs.splice(0, 10);

// listIndustries(data). This function can be passed greenjobs and returns an array of strings indicating all the industries in the dataset (no duplicates).

/**
 * Finds all the industries in the data set with no duplicates.
 * @param data Green jobs data set.
 * @returns An array of strings indicating all the industries in the data set with no duplicates.
 */
function listIndustries(data) {
  if(!_.every(data, hasIndustry)) {
    throw new Error("No Industry Field");
  }
  
  return _.uniq(_.pluck(data, "Industry"));
}

// countyGreenJobs(data). This function can be passed greenjobs and returns an object where the keys are County names and the values are the number of Green Jobs listed in that County.
/**
 * Returns an object of key/value keys.  Keys are county names, values are number of Green Jobs in that county
 * @param data Green jobs data set
 * @returns The Green job per county
 */
function countyGreenJobs(data) {
  return _.countBy(data, function (num) {
    return num['County'];
  });
}

// jobswithKeyword(data, keyword). This function can be passed greenjobs and a string and returns a list of Job Titles containing the passed string.

/**
 * Finds list of job titles containing passed in string
 * @param data Green jobs data set.
 * @param keyword Passed in string
 * @returns List of job titles containing the passed string.
 */
function jobswithKeyword(data, keyword) {
  var jobs = _.filter(data, function (num) {
    return num['Job Title'].indexOf(keyword) !== -1;
  });

  return _.pluck(jobs, 'Job Title');
}