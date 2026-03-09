/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("bool2638798251")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2638798251",
    "maxSelect": 1,
    "name": "genre_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Reggae",
      "Rock",
      "Pop",
      "Electro",
      "Hip-Hop"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select4219329697",
    "maxSelect": 1,
    "name": "moment_journee",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Après-midi",
      "Soirée",
      "Nuit"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool2638798251",
    "name": "genre_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("select2638798251")

  // remove field
  collection.fields.removeById("select4219329697")

  return app.save(collection)
})
