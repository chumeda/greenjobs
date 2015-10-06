# Overview

Provides three function with computing analytics over the [Hawaii Directory of Green Employers] (https://data.hawaii.gov/Employment/Hawaii-Directory-Of-Green-Employers/mq86-5ta6).

# Installation
Provide the following scripts in your html file:

```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/uhdata.js"></script>
<script src="uhdatafunctions.js"></script>
```

# Usage
Here are example calls to the analytic functions.

```
<script>
  console.log(listIndustries(greenjobs));
  console.log(countyGreenJobs(greenjobs));
  console.log(jobswithKeyword(greenjobs, 'PV'))
</script>
```

Consult the greenjobs.js file for more details on these functions.

# Credits
Uses the [Underscore] (http://underscorejs.org/) library.