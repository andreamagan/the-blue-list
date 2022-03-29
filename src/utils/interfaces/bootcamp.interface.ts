import { Languages } from "./languages-flags.interface";

export interface Bootcamp {
  id: number;
  bookmark: boolean;
  name: string;
  organization: string;
  tech: string[];
  tags: string[];
  hours: number;
  weeks: number;
  location: string;
  price: number;
  type: string;
  languages: Languages[];
  notes: string;
  url: string;
  attachments: string;
  attachmentsUrl: string;
  contact: string;
  courseType: string;
}

export interface ApiBootcamp {
  Name: string;
  Organization: string;
  Tech: string;
  Tags: string;
  "Duration (hours)": number;
  "Duration (weeks)": number;
  Location: string;
  Price: number;
  type: string;
  language: string;
  Notes: string;
  URL: string;
  Attachments: string;
  "Attachments url": string;
  Contact: string;
  "Course-type": string;
}

