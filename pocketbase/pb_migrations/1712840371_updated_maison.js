/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  collection.name = "maisons"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  collection.name = "maison"

  return dao.saveCollection(collection)
})
