
const control0Start = 0;
const control0End   = 258;

const control1Start = 259;
const control1End   = 516;

const signal0Start  = 517;
const signal0End    = 775;

const signal1Start  = 776;
const signal1End    = 1033;

const signal2Start  = 1034;
const signal2End    = 1291;

const signal3Start  = 1292;
const signal3End    = 1550;

const signal4Start  = 1551;
const signal4End    = 1808;

const signal5Start  = 1809;
const signal5End    = 2067;

const signal6Start  = 2068;
const signal6End    = 2325;

const signal7Start  = 2326;
const signal7End    = 2583;

const signal8Start  = 2584;
const signal8End    = 2842;

const signal9Start  = 2843;
const signal9End    = 3100;

function getLargestBucket(dataArray) {
  return dataArray.indexOf(Math.max(...dataArray));
}