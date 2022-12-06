const axios = require("axios");

exports.getEntitiesInRange = async (startId, endId) => {
  let entities = [];
  for (let index = startId; index <= endId; index++) {
    let entity = await axios.get(
      `${process.env.ENTITIES_SERVICE}${index}`
    );
    if (entity?.data?.code === "F132") entities.push(entity.data.data);
  }
  return entities;
};

exports.sortEntitiesByName = async (entities) => {
  entities.sort((entityA, entityB) => entityA.name.localeCompare(entityB.name));
  return entities;
};
