const {announceDeploymentStart} = require('./announceDeploymentStart');
const {determineDeploymentType} = require('./determineDeploymentType');
const {buildStaticSite} = require('./buildStaticSite');
const {announceDeploymentFinished} = require('./announceDeploymentFinished');
p
module.exports = {
  announceDeploymentStart,
  determineDeploymentType,
  buildStaticSite,
  announceDeploymentFinished,
  cleanUpGoogleCloud,
};
