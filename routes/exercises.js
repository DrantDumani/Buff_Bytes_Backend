const express = require("express")
const router = express.Router()
const client = require("../prisma/client")

router.get("/", async (req, res) => {
  const primaryEx = await client.exercise.findMany({
    where: {
      type: "primary"
    }
  })

  return res.json(primaryEx)
})

router.get("", async (req, res) => {

})

router.get("/:category_Id", async (req, res, next) => {
  const cat_id = req.params.category_Id

  const exercise = await client.exercise.findMany({
    where: {
      cat_id: Number(cat_id),
      type: "substitute"
    }
  })

  return res.json(exercise)
})

module.exports = router