const contentful = require("contentful-management");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function () {
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return client
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
    .catch(console.error);
};
