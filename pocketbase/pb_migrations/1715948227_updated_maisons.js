/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v21qeedt",
    "name": "agent",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "16oit2hc8w7rveo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  // remove
  collection.schema.removeField("v21qeedt")

  return dao.saveCollection(collection)
})
