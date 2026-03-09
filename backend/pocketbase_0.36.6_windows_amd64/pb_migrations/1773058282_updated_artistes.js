/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3346110323",
    "maxSelect": 1,
    "name": "type_de_scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Scène principale",
      "Scène alternative",
      "Scène accoustique"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("select3346110323")

  return app.save(collection)
})
