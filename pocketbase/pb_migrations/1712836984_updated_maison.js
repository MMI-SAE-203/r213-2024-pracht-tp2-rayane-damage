/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wsxzq2gr",
    "name": "favori",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "true",
        "false"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rpp079zfi15pr5i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wsxzq2gr",
    "name": "favori",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "true",
        "false"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
