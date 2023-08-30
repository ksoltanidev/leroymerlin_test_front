export enum MonsterSize {
  TINY = "Tiny",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  HUGE = "Huge",
  GARGANTUAN = "Gargantuan",
}

export interface MonsterModel {
  slug: string;
  name: string;
  skills: { [key: string]: number };
  actions: {
    name: string;
    [key: string]: string;
  }[];
}

//Extended model
export interface MonsterModelExtended extends MonsterModel {
  desc: string;
  size: MonsterSize;
  type: string;
  subtype: string;
  group: string | null;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: { [key: "walk" | "swim" | "climb" | "fly" | "burrow"]: number };
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
  perception: number;
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  cr: number;
  reactions: string;
  legendary_desc: string;
  legendary_actions: {
    name: string;
    [key: string]: string;
  }[];
  special_abilities: {
    name: string;
    desc: string;
  }[];
  spell_list: [];
  page_no: number;
  environments: string[];
  img_main: string;
  document__slug: string;
  document__title: string;
  document__license_url: string;
  document__url: string;
}
