import type {
  AthleteData,
  AthleteTeams,
  AttributeSubmission,
} from "../types/athleteType";
import adiyasuren from "../assets/athletes/adiyasuren.webp";
import alexandraMilne from "../assets/athletes/alexandra-milne.webp";
import aliSofuoglu from "../assets/athletes/ali-sofuoglu.webp";
import amotti from "../assets/athletes/amotti.webp";
import anilBerkBaki from "../assets/athletes/anil-berk-baki.webp";
import anuchaYospanya from "../assets/athletes/anucha-yospanya.webp";
import choiSeung from "../assets/athletes/choi-seung.webp";
import domTomato from "../assets/athletes/dom-tomato.webp";
import dulguun from "../assets/athletes/dulguun.webp";
import eddieWilliams from "../assets/athletes/eddie-williams.webp";
import eloniVunakece from "../assets/athletes/eloni-vunakece.webp";
import enkhOrgil from "../assets/athletes/enkh-orgil.webp";
import finaPhilippe from "../assets/athletes/fina-philippe.webp";
import glennVictor from "../assets/athletes/glenn-victor.webp";
import igedzExecutioner from "../assets/athletes/igedz-executioner.webp";
import jamesRusameekae from "../assets/athletes/james-rusameekae.webp";
import jangEunSil from "../assets/athletes/jang-eun-sil.webp";
import jarUracha from "../assets/athletes/jar-uracha.webp";
import jeremiahLakhwani from "../assets/athletes/jeremiah-lakhwani.webp";
import justinCoveney from "../assets/athletes/justin-coveney.webp";
import kanaWatanabe from "../assets/athletes/kana-watanabe.webp";
import katelinVanZyl from "../assets/athletes/katelin-van-zyl.webp";
import katsumiNakamura from "../assets/athletes/katsumi-nakamura.webp";
import khandsuren from "../assets/athletes/khandsuren.webp";
import kimDongHyun from "../assets/athletes/kim-dong-hyun.webp";
import kimMinJae from "../assets/athletes/kim-min-jae.webp";
import laraLorraine from "../assets/athletes/lara-lorraine.webp";
import lfKhagvaOchir from "../assets/athletes/lfkhagva-ochir.webp";
import mannyPacquiao from "../assets/athletes/manny-pacquiao.webp";
import marcusGideon from "../assets/athletes/marcus-gideon.webp";
import mariaSelena from "../assets/athletes/maria-selena.webp";
import markMugen from "../assets/athletes/mark-mugen.webp";
import nefiseKaratay from "../assets/athletes/nefise-karatay.webp";
import nonokaOzaki from "../assets/athletes/nonoka-ozaki.webp";
import ogedayGirisken from "../assets/athletes/ogeday-girisken.webp";
import orkhonbayar from "../assets/athletes/orkhonbayar.webp";
import playNuannaree from "../assets/athletes/play-nuannaree.webp";
import rayJefferson from "../assets/athletes/ray-jefferson.webp";
import recepKara from "../assets/athletes/recep-kara.webp";
import robertWhittaker from "../assets/athletes/robert-whittaker.webp";
import robynLauren from "../assets/athletes/robyn-lauren.webp";
import soichiHashimoto from "../assets/athletes/soichi-hashimoto.webp";
import sunnyKerdkao from "../assets/athletes/sunny-kerdkao.webp";
import superbon from "../assets/athletes/superbon.webp";
import yaseminAdar from "../assets/athletes/yasemin-adar.webp";
import yoshioItoi from "../assets/athletes/yoshio-itoi.webp";
import yunSungBin from "../assets/athletes/yun-sung-bin.webp";
import yushinOkami from "../assets/athletes/yushin-okami.webp";

export const initialAttributes = {
  strength: 0,
  explosiveness: 0,
  speed: 0,
  endurance: 0,
  cardio: 0,
  grit: 0,
  adaptability: 0,
};

export const initialFormAttributes = {
  strength: 5,
  explosiveness: 5,
  speed: 5,
  endurance: 5,
  cardio: 5,
  grit: 5,
  adaptability: 5,
};

export const teamList: AthleteTeams[] = [
  "South Korea",
  "Japan",
  "Turkey",
  "Mongolia",
  "Australia",
  "Philippines",
  "Indonesia",
  "Thailand",
];

export const athleteList: AthleteData[] = [
  //TEAM KOREA
  {
    info: {
      id: "kim-dong-hyun",
      img: kimDongHyun,
      name: "Kim Dong-hyun",
      age: 43,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "MMA",
    },
  },
  {
    info: {
      id: "kim-hae-jong",
      img: amotti,
      name: "Kim Hae-jong (Amotti)",
      age: 32,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "CrossFit",
    },
  },
  {
    info: {
      id: "yun-sung-bin",
      img: yunSungBin,
      name: "Yun Sung-bin",
      age: 31,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "Skeleton",
    },
  },
  {
    info: {
      id: "jang-eun-sil",
      img: jangEunSil,
      name: "Jang Eun-sil",
      age: 34,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "Wrestling",
    },
  },
  {
    info: {
      id: "choi-seung-yeon",
      img: choiSeung,
      name: "Choi Seung-yeon",
      age: 26,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "CrossFit",
    },
  },
  {
    info: {
      id: "kim-min-jae",
      img: kimMinJae,
      name: "Kim Min-jae",
      age: 28,
      height: "—",
      weight: "—",
      team: "South Korea",
      backgroundSport: "Ssireum (Korean wrestling)",
    },
  },
  //TEAM JAPAN
  {
    info: {
      id: "yushin-okami",
      img: yushinOkami,
      name: "Yushin Okami",
      age: 44,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "MMA",
    },
  },
  {
    info: {
      id: "kana-watanabe",
      img: kanaWatanabe,
      name: "Kana Watanabe",
      age: 37,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "MMA",
    },
  },
  {
    info: {
      id: "nonoka-ozaki",
      img: nonokaOzaki,
      name: "Nonoka Ozaki",
      age: 22,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "Wrestling",
    },
  },
  {
    info: {
      id: "soichi-hashimoto",
      img: soichiHashimoto,
      name: "Soichi Hashimoto",
      age: 34,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "Judo",
    },
  },
  {
    info: {
      id: "katsumi-nakamura",
      img: katsumiNakamura,
      name: "Katsumi Nakamura",
      age: 31,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "Swimming",
    },
  },
  {
    info: {
      id: "yoshio-itoi",
      img: yoshioItoi,
      name: "Yoshio Itoi",
      age: 44,
      height: "—",
      weight: "—",
      team: "Japan",
      backgroundSport: "Baseball",
    },
  },

  //TEAM THAILAND

  {
    info: {
      id: "superbon-singha-mawynn",
      img: superbon,
      name: "Superbon Singha Mawynn",
      age: 35,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "Muay Thai / Kickboxing",
    },
  },
  {
    info: {
      id: "james-rusameekae",
      img: jamesRusameekae,
      name: "James Rusameekae",
      age: 39,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "Volleyball / Actor",
    },
  },
  {
    info: {
      id: "sunny-kerdkao",
      img: sunnyKerdkao,
      name: "Sunny Kerdkao Wechokittikorn",
      age: 24,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "Rugby",
    },
  },
  {
    info: {
      id: "jar-uracha",
      img: jarUracha,
      name: "Jar Uracha Teerawanitsan",
      age: 32,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "CrossFit (Coach/Athlete)",
    },
  },
  {
    info: {
      id: "anucha-yospanya",
      img: anuchaYospanya,
      name: "Anucha Yospanya",
      age: 31,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "Wrestling",
    },
  },
  {
    info: {
      id: "ploy-nuannaree",
      img: playNuannaree,
      name: "Ploy Nuannaree",
      age: 33,
      height: "—",
      weight: "—",
      team: "Thailand",
      backgroundSport: "Muay Thai (Coach)",
    },
  },

  //TEAM MONGOLIA
  {
    info: {
      id: "orkhonbayar",
      img: orkhonbayar,
      name: "Orkhonbayar",
      age: 27,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "Bokh Wrestler",
    },
  },
  {
    info: {
      id: "adiyasuren",
      img: adiyasuren,
      name: "Adiyasuren",
      age: 27,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "Judo",
    },
  },
  {
    info: {
      id: "dulguun",
      img: dulguun,
      name: "Dulguun",
      age: 29,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "Basketball",
    },
  },
  {
    info: {
      id: "enkh-orgil",
      img: enkhOrgil,
      name: "Enkh-Orgil",
      age: 25,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "MMA Fighter",
    },
  },
  {
    info: {
      id: "khandsuren",
      img: khandsuren,
      name: "Khandsuren",
      age: 28,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "Vollyball",
    },
  },
  {
    info: {
      id: "lfkhagva-ochir",
      img: lfKhagvaOchir,
      name: "L.F. Khagva-Ochir",
      age: 35,
      height: "—",
      weight: "—",
      team: "Mongolia",
      backgroundSport: "Circus Artist",
    },
  },

  // TEAM TURKEY
  {
    info: {
      id: "recep-kara",
      img: recepKara,
      name: "Recep Kara",
      age: 44,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Oil Wrestling",
    },
  },
  {
    info: {
      id: "ali-sofuoglu",
      img: aliSofuoglu,
      name: "Ali Sofuoğlu",
      age: 30,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Karate",
    },
  },
  {
    info: {
      id: "anil-berk-baki",
      img: anilBerkBaki,
      name: "Anıl Berk Baki",
      age: 34,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Sailing",
    },
  },
  {
    info: {
      id: "nefise-karatay",
      img: nefiseKaratay,
      name: "Nefise Karatay",
      age: 25,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Track Athlete",
    },
  },
  {
    info: {
      id: "ogeday-girisken",
      img: ogedayGirisken,
      name: "Ogeday Girişken",
      age: 33,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Rower",
    },
  },

  {
    info: {
      id: "yasemin-adar",
      img: yaseminAdar,
      name: "Yasemin Adar",
      age: 34,
      height: "—",
      weight: "—",
      team: "Turkey",
      backgroundSport: "Wrestling",
    },
  },

  //TEAM AUSTRALIA

  {
    info: {
      id: "robert-whittaker",
      img: robertWhittaker,
      name: "Robert Whittaker",
      age: 34,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "MMA",
    },
  },
  {
    info: {
      id: "alexandra-milne",
      img: alexandraMilne,
      name: "Alexandra Milne",
      age: 0,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "Fitness Coach",
    },
  },
  {
    info: {
      id: "dom-tomato",
      img: domTomato,
      name: "Dom Tomato",
      age: 0,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "Parkour",
    },
  },
  {
    info: {
      id: "eddie-williams",
      img: eddieWilliams,
      name: "Eddie Williams",
      age: 35,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "Strongman",
    },
  },
  {
    info: {
      id: "eloni-vunakece",
      img: eloniVunakece,
      name: "Eloni Vunakece",
      age: 38,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "Rugby League",
    },
  },
  {
    info: {
      id: "katelin-van-zyl",
      img: katelinVanZyl,
      name: "Katelin Van Zyl",
      age: 0,
      height: "—",
      weight: "—",
      team: "Australia",
      backgroundSport: "CrossFit Hyrox",
    },
  },

  //TEAM PHILIPPINES

  {
    info: {
      id: "manny-pacquiao",
      img: mannyPacquiao,
      name: "Manny Pacquiao",
      age: 46,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "Boxing",
    },
  },
  {
    info: {
      id: "lara-lorraine",
      img: laraLorraine,
      name: "Lara Lorraine",
      age: 0,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "CrossFit",
    },
  },
  {
    info: {
      id: "mark-mugen",
      img: markMugen,
      name: "Mark Mugen",
      age: 37,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "Sambo",
    },
  },
  {
    info: {
      id: "justin-coveney",
      img: justinCoveney,
      name: "Justin Coveney",
      age: 0,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "Rugby",
    },
  },
  {
    info: {
      id: "ray-jefferson",
      img: rayJefferson,
      name: "Ray Jefferson",
      age: 0,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "Strongman",
    },
  },
  {
    info: {
      id: "robyn-lauren",
      img: robynLauren,
      name: "Robyn Lauren",
      age: 29,
      height: "—",
      weight: "—",
      team: "Philippines",
      backgroundSport: "Hurdler",
    },
  },
  //TEAM INDONESIA
  {
    info: {
      id: "igedz-executioner",
      img: igedzExecutioner,
      name: "Igedz Executioner",
      age: 0,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "BodyBuilder",
    },
  },

  {
    info: {
      id: "maria-selena",
      img: mariaSelena,
      name: "Maria Selena",
      age: 35,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "Basketball",
    },
  },
  {
    info: {
      id: "marcus-gideon",
      img: marcusGideon,
      name: "Marcus Gideon",
      age: 34,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "Badminton",
    },
  },
  {
    info: {
      id: "glenn-victor",
      img: glennVictor,
      name: "Glenn Victor",
      age: 35,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "Swimmer",
    },
  },
  {
    info: {
      id: "fina-philippe",
      img: finaPhilippe,
      name: "Fina Philippe",
      age: 35,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "Jiujitsu",
    },
  },

  {
    info: {
      id: "jeremiah-lakhwani",
      img: jeremiahLakhwani,
      name: "Jeremiah Lakhwani",
      age: 27,
      height: "—",
      weight: "—",
      team: "Indonesia",
      backgroundSport: "Hybrid",
    },
  },
];

export const attributeSubmissionsTest: AttributeSubmission[] = [
  // --- Alexandra Milne ---
  {
    athleteId: "alexandra-milne",
    id: "user-alexandra-1",
    username: "alexFan01",
    favorite: true,
    values: {
      strength: 6,
      explosiveness: 7,
      speed: 8,
      endurance: 8,
      cardio: 7.5,
      grit: 7,
      adaptability: 6.5,
    },
    ranking: "A",
    comment: "Really solid conditioning, could work on raw strength.",
  },
  {
    athleteId: "alexandra-milne",
    id: "user-alexandra-2",
    username: "gymrat22",
    favorite: false,
    values: {
      strength: 5.5,
      explosiveness: 6.5,
      speed: 8,
      endurance: 7.5,
      cardio: 8,
      grit: 6,
      adaptability: 7,
    },
    ranking: "A",
    comment: "Great engine, just needs more explosive power.",
  },
  {
    athleteId: "alexandra-milne",
    id: "user-alexandra-3",
    username: "powergirl",
    favorite: true,
    values: {
      strength: 7,
      explosiveness: 7.5,
      speed: 8,
      endurance: 8.5,
      cardio: 7,
      grit: 7.5,
      adaptability: 7,
    },
    ranking: "B",
    comment: "Consistent all-rounder with good work capacity.",
  },

  // --- Igedz Executioner ---
  {
    athleteId: "igedz-executioner",
    id: "user-igedz-1",
    username: "executionerMain",
    favorite: true,
    values: {
      strength: 9,
      explosiveness: 8.5,
      speed: 8,
      endurance: 6.5,
      cardio: 6,
      grit: 9.5,
      adaptability: 5.5,
    },
    ranking: "B",
    comment: "Crazy grit. Gas tank could be an issue in long events.",
  },
  {
    athleteId: "igedz-executioner",
    id: "user-igedz-2",
    username: "hardmode",
    favorite: false,
    values: {
      strength: 8.5,
      explosiveness: 8,
      speed: 8,
      endurance: 6,
      cardio: 6.5,
      grit: 8.5,
      adaptability: 6,
    },
    ranking: "B",
    comment: "Explosive and hits hard, struggles adapting on new tasks.",
  },
  {
    athleteId: "igedz-executioner",
    id: "user-igedz-3",
    username: "clutchtime",
    favorite: true,
    values: {
      strength: 9.5,
      explosiveness: 9,
      speed: 8,
      endurance: 7,
      cardio: 6.5,
      grit: 9,
      adaptability: 6.5,
    },
    ranking: "C",
    comment: "Monster strength, but cardio will hold him back.",
  },

  // --- Robert Whittaker ---
  {
    athleteId: "robert-whittaker",
    id: "user-robbie-1",
    username: "whittakerUltra",
    favorite: true,
    values: {
      strength: 9,
      explosiveness: 8,
      speed: 8,
      endurance: 7.5,
      cardio: 8.5,
      grit: 9.5,
      adaptability: 8.5,
    },
    ranking: "S",
    comment: "Elite mindset, mixes power and cardio perfectly.",
  },
  {
    athleteId: "robert-whittaker",
    id: "user-robbie-2",
    username: "oceaniamma",
    favorite: true,
    values: {
      strength: 8.5,
      explosiveness: 8.5,
      speed: 8,
      endurance: 8,
      cardio: 8,
      grit: 9,
      adaptability: 8,
    },
    mvp: true,
    ranking: "S",
    comment: "Champ-level grit, no real weaknesses here.",
  },
  {
    athleteId: "robert-whittaker",
    id: "user-robbie-3",
    username: "bobbyKnuckles",
    favorite: false,
    values: {
      strength: 9,
      explosiveness: 7.5,
      speed: 8,
      endurance: 7,
      cardio: 8,
      grit: 9,
      adaptability: 8,
    },
    mvp: true,
    ranking: "B",
    comment: "Always shows up in clutch moments.",
  },

  // --- Kim Dong-hyun ---
  {
    athleteId: "kim-dong-hyun",
    id: "user-kimdh-1",
    username: "stunGun",
    favorite: false,
    values: {
      strength: 8,
      explosiveness: 6.5,
      speed: 8,
      endurance: 6.5,
      cardio: 6.5,
      grit: 7.5,
      adaptability: 8,
    },
    ranking: "B",
    comment: "Very technical and adaptable in pressure situations.",
  },
  {
    athleteId: "kim-dong-hyun",
    id: "user-kimdh-1",
    username: "stusssnGun",
    favorite: false,
    values: {
      strength: 8,
      explosiveness: 6.5,
      speed: 8,
      endurance: 6.5,
      cardio: 6.5,
      grit: 7.5,
      adaptability: 8,
    },
    ranking: "B",
    comment: "Very technical and adaptable in pressure situations.",
  },
  {
    athleteId: "kim-dong-hyun",
    id: "user-kimdh-2",
    username: "mmaOldGuard",
    favorite: false,
    values: {
      strength: 7.5,
      explosiveness: 6,
      speed: 8,
      endurance: 7,
      cardio: 6,
      grit: 7,
      adaptability: 7.5,
    },
    ranking: "B",
    mvp: true,
    comment: "Tough competitor, just needs sharper explosiveness.",
  },
  {
    athleteId: "kim-dong-hyun",
    id: "user-kimdh-3",
    username: "southkoreamma",
    favorite: true,
    values: {
      strength: 8.5,
      explosiveness: 7,
      speed: 8,
      endurance: 7,
      cardio: 6.5,
      grit: 8,
      adaptability: 8,
    },
    ranking: "B",
    comment: "Strong veteran presence, good balance overall.",
  },

  // --- Kim Hae-jong (Amotti) ---
  {
    athleteId: "kim-hae-jong",
    id: "user-amotti-1",
    username: "crossfitAddict",
    favorite: true,
    values: {
      strength: 8,
      explosiveness: 8.5,
      speed: 8,
      endurance: 8,
      cardio: 8.5,
      grit: 8,
      adaptability: 7.5,
    },
    ranking: "B",
    mvp: true,
    comment: "Great programming background, recovers fast between efforts.",
  },
  {
    athleteId: "kim-hae-jong",
    id: "user-amotti-2",
    username: "wodmachine",
    favorite: false,
    values: {
      strength: 7.5,
      explosiveness: 8,
      speed: 8,
      endurance: 7.5,
      cardio: 8,
      grit: 7.5,
      adaptability: 7,
    },
    ranking: "S",
    mvp: true,
    comment: "Well-rounded engine, real threat in endurance events.",
  },
  {
    athleteId: "kim-hae-jong",
    id: "user-amotti-3",
    username: "boxOwner",
    favorite: true,
    values: {
      strength: 8.5,
      explosiveness: 9,
      speed: 8,
      endurance: 8.5,
      cardio: 9,
      grit: 8.5,
      adaptability: 8,
    },
    ranking: "A",
    comment: "Explosive athlete, looks built for sprint-style challenges.",
  },

  // --- Yun Sung-bin ---
  {
    athleteId: "yun-sung-bin",
    id: "user-yun-1",
    username: "ironmanYun",
    favorite: true,
    values: {
      strength: 7.5,
      explosiveness: 9,
      speed: 8,
      endurance: 8,
      cardio: 9,
      grit: 8,
      adaptability: 6.5,
    },
    ranking: "B",
    mvp: true,
    comment: "One of the most explosive in the field.",
  },
  {
    athleteId: "yun-sung-bin",
    id: "user-yun-2",
    username: "downhillDemon",
    favorite: true,
    values: {
      strength: 7,
      explosiveness: 8.5,
      speed: 8,
      endurance: 7.5,
      cardio: 8.5,
      grit: 7.5,
      adaptability: 6,
    },
    ranking: "B",
    mvp: true,
    comment: "Elite power output, cardio surprisingly strong.",
  },
  {
    athleteId: "yun-sung-bin",
    id: "user-yun-3",
    username: "skeletonGold",
    favorite: false,
    values: {
      strength: 8,
      explosiveness: 9.5,
      speed: 8,
      endurance: 8,
      cardio: 9,
      grit: 8.5,
      adaptability: 7,
    },
    ranking: "B",
    mvp: true,
    comment: "Explosiveness off the charts.",
  },

  // --- Jang Eun-sil ---
  {
    athleteId: "jang-eun-sil",
    id: "user-jang-1",
    username: "wrestleQueen",
    favorite: true,
    values: {
      strength: 8.5,
      explosiveness: 7,
      speed: 8,
      endurance: 7.5,
      cardio: 7,
      grit: 9,
      adaptability: 8,
    },
    ranking: "B",
    mvp: true,
    comment: "Incredible grit, wrestling background shows in every event.",
  },
  {
    athleteId: "jang-eun-sil",
    id: "user-jang-2",
    username: "matboss",
    favorite: false,
    values: {
      strength: 8,
      explosiveness: 6.5,
      speed: 8,
      endurance: 7,
      cardio: 6.5,
      grit: 8.5,
      adaptability: 7.5,
    },
    ranking: "B",
    comment: "Very tough mentally, could improve explosiveness.",
  },
  {
    athleteId: "jang-eun-sil",
    id: "user-jang-3",
    username: "ssireumpro",
    favorite: true,
    values: {
      strength: 9,
      explosiveness: 7.5,
      speed: 8,
      endurance: 8,
      cardio: 7.5,
      grit: 9.5,
      adaptability: 8,
    },
    ranking: "B",
    comment: "Elite grip and strength, scary in head-to-head events.",
  },

  // --- Choi Seung-yeon ---
  {
    athleteId: "choi-seung-yeon",
    id: "user-choi-1",
    username: "crossfitSeung",
    favorite: true,
    values: {
      strength: 7.5,
      explosiveness: 8,
      speed: 8,
      endurance: 8,
      cardio: 8.5,
      grit: 8,
      adaptability: 7,
    },
    ranking: "B",
    comment: "Super smooth pacing, efficient movement patterns.",
  },
  {
    athleteId: "choi-seung-yeon",
    id: "user-choi-2",
    username: "engineRoom",
    favorite: false,
    values: {
      strength: 7,
      explosiveness: 7.5,
      speed: 8,
      endurance: 7.5,
      cardio: 8,
      grit: 7.5,
      adaptability: 6.5,
    },
    ranking: "B",
    comment: "Very consistent, nothing flashy but no weakness.",
  },
  {
    athleteId: "choi-seung-yeon",
    id: "user-choi-3",
    username: "highrepQueen",
    favorite: true,
    values: {
      strength: 8,
      explosiveness: 8.5,
      speed: 8,
      endurance: 8.5,
      cardio: 9,
      grit: 8.5,
      adaptability: 7.5,
    },
    ranking: "B",
    mvp: true,
    comment: "Insane cardio, thrives in long grinders.",
  },

  // --- Kim Min-jae ---
  {
    athleteId: "kim-min-jae",
    id: "user-minjae-1",
    username: "ssireumChamp",
    favorite: true,
    values: {
      strength: 9,
      explosiveness: 8,
      speed: 8,
      endurance: 7.5,
      cardio: 7,
      grit: 8.5,
      adaptability: 7,
    },
    ranking: "B",
    comment: "Strong base and good leverage in physical contests.",
  },
  {
    athleteId: "kim-min-jae",
    id: "user-minjae-2",
    username: "sandpitKing",
    favorite: false,
    values: {
      strength: 8.5,
      explosiveness: 7.5,
      speed: 8,
      endurance: 7,
      cardio: 6.5,
      grit: 8,
      adaptability: 6.5,
    },
    ranking: "B",
    comment: "Very durable, could boost cardio capacity.",
  },
  {
    athleteId: "kim-min-jae",
    id: "user-minjae-3",
    username: "koreangrapple",
    favorite: true,
    values: {
      strength: 9.5,
      explosiveness: 8.5,
      speed: 8,
      endurance: 7.5,
      cardio: 7,
      grit: 9,
      adaptability: 7.5,
    },
    ranking: "B",
    mvp: true,
    comment: "Legit powerhouse, anchors well in physical challenges.",
  },

  // --- Superbon Singha Mawynn ---
  {
    athleteId: "superbon-singha-mawynn",
    id: "user-superbon-1",
    username: "headkickKO",
    favorite: true,
    values: {
      strength: 8,
      explosiveness: 9.5,
      speed: 8,
      endurance: 7.5,
      cardio: 8.5,
      grit: 9,
      adaptability: 7.5,
    },
    ranking: "B",
    mvp: true,
    comment: "Explosive striking power translates well to tasks.",
  },
  {
    athleteId: "superbon-singha-mawynn",
    id: "user-superbon-2",
    username: "kickboxingKing",
    favorite: true,
    values: {
      strength: 8.5,
      explosiveness: 9,
      speed: 8,
      endurance: 7.5,
      cardio: 8,
      grit: 8.5,
      adaptability: 7,
    },
    ranking: "B",
    mvp: true,
    comment: "Fast and accurate, good in bursts.",
  },
  {
    athleteId: "superbon-singha-mawynn",
    id: "user-superbon-3",
    username: "thaiboxingOG",
    favorite: false,
    values: {
      strength: 8,
      explosiveness: 9,
      speed: 8,
      endurance: 7,
      cardio: 8,
      grit: 8.5,
      adaptability: 7,
    },
    ranking: "B",
    mvp: true,
    comment: "Excellent balance of power and stamina.",
  },

  // --- Sunny Kerdkao Wechokittikorn ---
  {
    athleteId: "sunny-kerdkao",
    id: "user-sunny-1",
    username: "ruckRunner",
    favorite: false,
    values: {
      strength: 7.5,
      explosiveness: 7,
      speed: 8,
      endurance: 7.5,
      cardio: 8,
      grit: 8,
      adaptability: 6.5,
    },
    ranking: "B",
    comment: "Very tough competitor, reliable under pressure.",
  },
  {
    athleteId: "sunny-kerdkao",
    id: "user-sunny-2",
    username: "flankbeast",
    favorite: false,
    values: {
      strength: 7,
      explosiveness: 7.5,
      speed: 8,
      endurance: 7,
      cardio: 7.5,
      grit: 7.5,
      adaptability: 6,
    },
    ranking: "B",
    comment: "Solid speed, best in mid-duration challenges.",
  },
  {
    athleteId: "sunny-kerdkao",
    id: "user-sunny-3",
    username: "rugbyGrind",
    favorite: true,
    values: {
      strength: 8,
      explosiveness: 7.5,
      speed: 8,
      endurance: 7.5,
      cardio: 8.5,
      grit: 8.5,
      adaptability: 7,
    },
    ranking: "B",
    comment: "Scrappy and physical, won’t quit easily.",
  },
];
