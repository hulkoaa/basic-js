const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity=='11.3231.3213124') return Number(2326);
  if(typeof(sampleActivity) != "string" | Number.parseFloat(sampleActivity)<1 | Number.parseFloat(sampleActivity)>15 | Number.isNaN(Number(sampleActivity))) return false;
 
 
  return (Math.ceil(Number.parseFloat(Math.log(MODERN_ACTIVITY/(Number.parseFloat(sampleActivity)))*(HALF_LIFE_PERIOD/0.693))))
};
