import { adaptBootcampList } from "../adapters/bootcamp.adapter"
import { Bootcamp } from "../interfaces/bootcamp.interface"

export const getBootcampList = (): Promise<Bootcamp[]> => {
  return fetch('https://raw.githubusercontent.com/getmanfred/bootcamps/main/bootcamps.json')
    .then(response => response.json())
    .then(data => adaptBootcampList(data))
}
