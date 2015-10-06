/* globals greenjobs, listIndustries */

describe("Industry List", function() {

  var testdata = greenjobs.splice(0,10);

  it("should list all the industries in the dataset with no duplicates", function() {
    expect(listIndustries(testdata)).toEqual(['Construction', 'Agriculture, Forestry, Fishing and Hunting ']);
  });

  it("should be able to handle an dataset where a record is missing an industry field", function() {
    var noIndustryField = testdata.concat({foo: "bar"});
    expect(function () {listIndustries(noIndustryField);}).toThrowError("No Industry Field");
  });

  it("should be able to handle a dataset where a record has an empty string in the industry field", function() {
    var emptyString = testdata.concat({Industry: ""});
    expect(function () {listIndustries(emptyString);}).toThrowError("Industry Field Empty");
  });
});
