import { ApiBootcamp, Bootcamp } from "../interfaces/bootcamp.interface";
import { Languages } from "../interfaces/languages-flags.interface";

export const adaptBootcamp = (data: ApiBootcamp, i: number): Bootcamp => {
  return {
    id: i,
    bookmark: false,
    name: data.Name,
    organization: data.Organization,
    tech: data.Tech.split(','),
    tags: data.Tags.split(','),
    hours: data["Duration (hours)"],
    weeks: data["Duration (weeks)"],
    location: data.Location,
    price: data.Price || 0,
    type: data.type,
    languages: data.language.split(',') as Languages[],
    notes: data.Notes,
    url: data.URL,
    attachments: data.Attachments,
    attachmentsUrl: data["Attachments url"],
    contact: data.Contact,
    courseType: data["Course-type"],
  }
}


export const adaptBootcampList = (data: ApiBootcamp[]): Bootcamp[] => {
  return data.map((bootcamp, i) => adaptBootcamp(bootcamp, i));
}