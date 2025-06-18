export const background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg";

export const logo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const defaultAvatar =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ import.meta.env.VITE_TMDB_KEY,
  },
}; // movie api

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_lANGUAGES = [{
  identifier: 'en', name: 'English',
},
{
  identifier: 'hindi', name: 'Hindi',
},
{
  identifier: 'spanish', name: 'Spanish',
}
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;