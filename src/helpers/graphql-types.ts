/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum Audience {
  am = "am",
  bo = "bo",
  en = "en",
  enus = "enus",
  es = "es",
  fa = "fa",
  ko = "ko",
  om = "om",
  prs = "prs",
  pus = "pus",
  ru = "ru",
  tg = "tg",
  ur = "ur",
  vi = "vi",
  zhcn = "zhcn",
}


export enum ContentType {
  Article = "Article",
  Video = "Video",
  PhotoGallery = "PhotoGallery",
  Clip = "Clip",
}


export type ArticleRouteQueryVariables = {
  source: Audience,
  id?: number | null,
};

export type ArticleRouteQuery = {
  content:  Array< {
    id: number,
    title: string,
    pubDate: string,
    lastUpdated: string | null,
    url: string | null,
    content: string | null,
    authors:  Array< {
      name:  {
        first: string,
        last: string | null,
      },
    } | null > | null,
    image:  {
      tiny: string,
      hero: string,
    } | null,
    video:  {
      url: string | null,
      thumbnailTiny: string | null,
      videoDescription: string | null,
    } | null,
    audio:  {
      url: string | null,
      audioTitle: string | null,
      audioDescription: string | null,
    } | null,
    photoGallery:  Array< {
      id: number,
      photoGalleryTitle: string | null,
      photoGalleryDescription: string | null,
      photo:  Array< {
        id: number | null,
        photoTitle: string | null,
        photoDescription: string | null,
        tiny: string,
        hero: string,
        order: number | null,
      } | null > | null,
    } | null > | null,
    relatedStories:  Array< {
      id: number,
      storyTitle: string,
      thumbnailTiny: string | null,
      thumbnailHero: string | null,
      pubDate: string,
    } | null > | null,
    type: ContentType | null,
  } | null > | null,
};

export type CategoryRouteQueryVariables = {
  source: Audience,
  category?: number | null,
};

export type CategoryRouteQuery = {
  content:  Array< {
    id: number,
    title: string,
    introduction: string,
    pubDate: string,
    image:  {
      tiny: string,
      thumb: string,
      hero: string,
    } | null,
    video:  {
      url: string | null,
    } | null,
    audio:  {
      url: string | null,
    } | null,
    photoGallery:  Array< {
      photo:  Array< {
        id: number | null,
      } | null > | null,
    } | null > | null,
  } | null > | null,
};

export type CategorySettingsQueryVariables = {
  source: Audience,
};

export type CategorySettingsQuery = {
  zones:  Array< {
    id: number,
    name: string,
  } | null > | null,
};

export type EditorsChoiceRouteQueryVariables = {
  source: Audience,
};

export type EditorsChoiceRouteQuery = {
  content:  Array< {
    id: number,
    title: string,
    introduction: string,
    pubDate: string,
    image:  {
      tiny: string,
      thumb: string,
      hero: string,
    } | null,
    video:  {
      url: string | null,
    } | null,
    audio:  {
      url: string | null,
    } | null,
    photoGallery:  Array< {
      photo:  Array< {
        id: number | null,
      } | null > | null,
    } | null > | null,
  } | null > | null,
};

export type HomeRouteQueryVariables = {
  source: Audience,
};

export type HomeRouteQuery = {
  content:  Array< {
    id: number,
    title: string,
    introduction: string,
    pubDate: string,
    image:  {
      tiny: string,
      thumb: string,
      hero: string,
    } | null,
    video:  {
      url: string | null,
    } | null,
    audio:  {
      url: string | null,
    } | null,
    photoGallery:  Array< {
      photo:  Array< {
        id: number | null,
      } | null > | null,
    } | null > | null,
  } | null > | null,
};

export type ProgramAudioQueryVariables = {
  source: Audience,
  category?: number | null,
};

export type ProgramAudioQuery = {
  audioProgram:  Array< {
    id: number,
    date: string | null,
    zone: number | null,
    image:  {
      tiny: string,
      hero: string,
    } | null,
    url: string | null,
    programTitle: string | null,
    programDescription: string | null,
  } | null > | null,
};

export type ProgramLiveVideoQueryVariables = {
  source: Audience,
};

export type ProgramLiveVideoQuery = {
  live:  Array< {
    date: string | null,
    timeLeft: number | null,
    programTitle: string | null,
    programDescription: string | null,
    image:  {
      tiny: string,
      hero: string,
    } | null,
    url: string | null,
  } | null > | null,
  audio:  Array< {
    url: string | null,
  } | null > | null,
};

export type ProgramVideosQueryVariables = {
  source: Audience,
  zone?: number | null,
};

export type ProgramVideosQuery = {
  program:  Array< {
    id: number,
    date: string | null,
    timeLeft: number | null,
    programTitle: string | null,
    programDescription: string | null,
    image:  {
      tiny: string,
    } | null,
    url: string | null,
  } | null > | null,
};

export type SearchQueryVariables = {
  source: Audience,
  query: string,
  zoneId?: number | null,
};

export type SearchQuery = {
  search:  Array< {
    id: number,
    title: string,
    introduction: string,
    pubDate: string,
    image:  {
      tiny: string,
    } | null,
    video:  {
      url: string | null,
    } | null,
    audio:  {
      url: string | null,
    } | null,
    photoGallery:  Array< {
      photo:  Array< {
        id: number | null,
      } | null > | null,
    } | null > | null,
  } | null > | null,
};
