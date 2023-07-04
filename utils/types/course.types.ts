interface ILink {
  name: string;
  url: string;
  logo?: string;
}

export interface ICourse {
  name: string;
  image: string;
  learnedList: string[];
  links: ILink[];
  date?: Date;
}

export interface ICourseWithTranslate extends ICourse {
  learned: {
    translatorName: string;
    itemLength: number;
  };
}
