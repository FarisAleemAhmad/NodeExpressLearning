const notFound = (req, res) => res.status(404).sned('Route does not exist')


module.exports = notFound
