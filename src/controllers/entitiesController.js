const entitiesProvider = require("../providers/entitiesProvider");

// Retrieve all Permissions from the database.
exports.filterEntities = async (req, res) => {
  const startId = req?.body?.startId;
  const endId = req?.body?.endId;
  if (
    !startId ||
    !endId ||
    startId < 1 ||
    endId < 1 ||
    startId > 20 ||
    endId > 20 ||
    startId > endId
  ){
    return res.status(400).json({
      message: "Error en validación datos de entrada.",
    });}
  await entitiesProvider.sortEntitiesByName(
    await entitiesProvider.getEntitiesInRange(startId, endId)
  ).then(entities=>{
    if (entities.length < 1) {
      return res.status(404).json({
        message: "Error, no se encuentraron datos para el rango especificado.",
      });
    }
    return res.status(200).json({
      description: "OK.",
      data: entities,
    });
  });
  
};
