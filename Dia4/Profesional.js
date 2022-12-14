class Profesional {
  id
  name
  age
  weight
  height
  isRetired
  nationality
  oscarNumber
  profession
  constructor(
    id,
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarNumber,
    profession
  ) {
    this.id = id
    this.name = name
    this.age = age
    this.weight = weight
    this.height = height
    this.isRetired = isRetired
    this.nationality = nationality
    this.oscarNumber = oscarNumber
    this.profession = profession
  }
}

module.exports = Profesional
