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

import adiyasurenSm from "../assets/athletes/adiyasuren-sm.jpg";
import alexandraMilneSm from "../assets/athletes/alexandra-milne-sm.jpg";
import aliSofuogluSm from "../assets/athletes/ali-sofuoglu-sm.jpg";
import amottiSm from "../assets/athletes/amotti-sm.jpg";
import anilBerkBakiSm from "../assets/athletes/anil-berk-baki-sm.jpg";
import anuchaYospanyaSm from "../assets/athletes/anucha-yospanya-sm.jpg";
import choiSeungSm from "../assets/athletes/choi-seung-sm.jpg";
import domTomatoSm from "../assets/athletes/dom-tomato-sm.jpg";
import dulguunSm from "../assets/athletes/dulguun-sm.jpg";
import eddieWilliamsSm from "../assets/athletes/eddie-williams-sm.jpg";
import eloniVunakeceSm from "../assets/athletes/eloni-vunakece-sm.jpg";
import enkhOrgilSm from "../assets/athletes/enkh-orgil-sm.jpg";
import finaPhilippeSm from "../assets/athletes/fina-philippe-sm.jpg";
import glennVictorSm from "../assets/athletes/glenn-victor-sm.jpg";
import igedzExecutionerSm from "../assets/athletes/igedz-executioner-sm.jpg";
import jamesRusameekaeSm from "../assets/athletes/james-rusameekae-sm.jpg";
import jangEunSilSm from "../assets/athletes/jang-eun-sil-sm.jpg";
import jarUrachaSm from "../assets/athletes/jar-uracha-sm.jpg";
import jeremiahLakhwaniSm from "../assets/athletes/jeremiah-lakhwani-sm.jpg";
import justinCoveneySm from "../assets/athletes/justin-coveney-sm.jpg";
import kanaWatanabeSm from "../assets/athletes/kana-watanabe-sm.jpg";
import katelinVanZylSm from "../assets/athletes/katelin-van-zyl-sm.jpg";
import katsumiNakamuraSm from "../assets/athletes/katsumi-nakamura-sm.jpg";
import khandsurenSm from "../assets/athletes/khandsuren-sm.jpg";
import kimDongHyunSm from "../assets/athletes/kim-dong-hyun-sm.jpg";
import kimMinJaeSm from "../assets/athletes/kim-min-jae-sm.jpg";
import laraLorraineSm from "../assets/athletes/lara-lorraine-sm.jpg";
import lfKhagvaOchirSm from "../assets/athletes/lfkhagva-ochir-sm.jpg";
import mannyPacquiaoSm from "../assets/athletes/manny-pacquiao-sm.jpg";
import marcusGideonSm from "../assets/athletes/marcus-gideon-sm.jpg";
import mariaSelenaSm from "../assets/athletes/maria-selena-sm.jpg";
import markMugenSm from "../assets/athletes/mark-mugen-sm.jpg";
import nefiseKarataySm from "../assets/athletes/nefise-karatay-sm.jpg";
import nonokaOzakiSm from "../assets/athletes/nonoka-ozaki-sm.jpg";
import ogedayGiriskenSm from "../assets/athletes/ogeday-girisken-sm.jpg";
import orkhonbayarSm from "../assets/athletes/orkhonbayar-sm.jpg";
import playNuannareeSm from "../assets/athletes/play-nuannaree-sm.jpg";
import rayJeffersonSm from "../assets/athletes/ray-jefferson-sm.jpg";
import recepKaraSm from "../assets/athletes/recep-kara-sm.jpg";
import robertWhittakerSm from "../assets/athletes/robert-whittaker-sm.jpg";
import robynLaurenSm from "../assets/athletes/robyn-lauren-sm.jpg";
import soichiHashimotoSm from "../assets/athletes/soichi-hashimoto-sm.jpg";
import sunnyKerdkaoSm from "../assets/athletes/sunny-kerdkao-sm.jpg";
import superbonSm from "../assets/athletes/superbon-sm.jpg";
import yaseminAdarSm from "../assets/athletes/yasemin-adar-sm.jpg";
import yoshioItoiSm from "../assets/athletes/yoshio-itoi-sm.jpg";
import yunSungBinSm from "../assets/athletes/yun-sung-bin-sm.jpg";
import yushinOkamiSm from "../assets/athletes/yushin-okami-sm.jpg";

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
      imgSm: kimDongHyunSm,
      name: "Kim Dong-hyun",
      age: 43,
      gender: "male",
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
      imgSm: amottiSm,
      name: "Kim Hae-jong (Amotti)",
      age: 32,
      gender: "male",
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
      imgSm: yunSungBinSm,
      name: "Yun Sung-bin",
      age: 31,
      gender: "male",
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
      imgSm: jangEunSilSm,
      name: "Jang Eun-sil",
      age: 34,
      gender: "female",
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
      imgSm: choiSeungSm,
      name: "Choi Seung-yeon",
      age: 26,
      gender: "female",
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
      imgSm: kimMinJaeSm,
      name: "Kim Min-jae",
      age: 28,
      gender: "male",
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
      imgSm: yushinOkamiSm,
      name: "Yushin Okami",
      age: 44,
      gender: "male",
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
      imgSm: kanaWatanabeSm,
      name: "Kana Watanabe",
      age: 37,
      gender: "female",
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
      imgSm: nonokaOzakiSm,
      name: "Nonoka Ozaki",
      age: 22,
      gender: "female",
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
      imgSm: soichiHashimotoSm,
      name: "Soichi Hashimoto",
      age: 34,
      gender: "male",
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
      imgSm: katsumiNakamuraSm,
      name: "Katsumi Nakamura",
      age: 31,
      gender: "male",
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
      imgSm: yoshioItoiSm,
      name: "Yoshio Itoi",
      age: 44,
      gender: "male",
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
      imgSm: superbonSm,
      name: "Superbon Singha Mawynn",
      age: 35,
      gender: "male",
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
      imgSm: jamesRusameekaeSm,
      name: "James Rusameekae",
      age: 39,
      gender: "male",
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
      imgSm: sunnyKerdkaoSm,
      name: "Sunny Kerdkao Wechokittikorn",
      age: 24,
      gender: "male",
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
      imgSm: jarUrachaSm,
      name: "Jar Uracha Teerawanitsan",
      age: 32,
      gender: "female",
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
      imgSm: anuchaYospanyaSm,
      name: "Anucha Yospanya",
      age: 31,
      gender: "male",
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
      imgSm: playNuannareeSm,
      name: "Ploy Nuannaree",
      age: 33,
      gender: "female",
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
      imgSm: orkhonbayarSm,
      name: "Orkhonbayar",
      age: 27,
      gender: "male",
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
      imgSm: adiyasurenSm,
      name: "Adiyasuren",
      age: 27,
      gender: "female",
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
      imgSm: dulguunSm,
      name: "Dulguun",
      age: 29,
      gender: "male",
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
      imgSm: enkhOrgilSm,
      name: "Enkh-Orgil",
      age: 25,
      gender: "male",
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
      imgSm: khandsurenSm,
      name: "Khandsuren",
      age: 28,
      gender: "female",
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
      imgSm: lfKhagvaOchirSm,
      name: "L.F. Khagva-Ochir",
      age: 35,
      gender: "male",
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
      imgSm: recepKaraSm,
      name: "Recep Kara",
      age: 44,
      gender: "male",
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
      imgSm: aliSofuogluSm,
      name: "Ali Sofuoğlu",
      age: 30,
      gender: "male",
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
      imgSm: anilBerkBakiSm,
      name: "Anıl Berk Baki",
      age: 34,
      gender: "male",
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
      imgSm: nefiseKarataySm,
      name: "Nefise Karatay",
      age: 25,
      gender: "female",
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
      imgSm: ogedayGiriskenSm,
      name: "Ogeday Girişken",
      age: 33,
      gender: "male",
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
      imgSm: yaseminAdarSm,
      name: "Yasemin Adar",
      age: 34,
      gender: "female",
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
      imgSm: robertWhittakerSm,
      name: "Robert Whittaker",
      age: 34,
      gender: "male",
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
      imgSm: alexandraMilneSm,
      name: "Alexandra Milne",
      age: 0,
      gender: "female",
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
      imgSm: domTomatoSm,
      name: "Dom Tomato",
      age: 0,
      gender: "male",
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
      imgSm: eddieWilliamsSm,
      name: "Eddie Williams",
      age: 35,
      gender: "male",
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
      imgSm: eloniVunakeceSm,
      name: "Eloni Vunakece",
      age: 38,
      gender: "male",
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
      imgSm: katelinVanZylSm,
      name: "Katelin Van Zyl",
      age: 0,
      gender: "female",
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
      imgSm: mannyPacquiaoSm,
      name: "Manny Pacquiao",
      age: 46,
      gender: "male",
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
      imgSm: laraLorraineSm,
      name: "Lara Lorraine",
      age: 0,
      gender: "female",
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
      imgSm: markMugenSm,
      name: "Mark Mugen",
      age: 37,
      gender: "male",
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
      imgSm: justinCoveneySm,
      name: "Justin Coveney",
      age: 0,
      gender: "male",
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
      imgSm: rayJeffersonSm,
      name: "Ray Jefferson",
      age: 0,
      gender: "male",
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
      imgSm: robynLaurenSm,
      name: "Robyn Lauren",
      age: 29,
      gender: "female",
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
      imgSm: igedzExecutionerSm,
      name: "Igedz Executioner",
      age: 0,
      gender: "male",
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
      imgSm: mariaSelenaSm,
      name: "Maria Selena",
      age: 35,
      gender: "female",
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
      imgSm: marcusGideonSm,
      name: "Marcus Gideon",
      age: 34,
      gender: "male",
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
      imgSm: glennVictorSm,
      name: "Glenn Victor",
      age: 35,
      gender: "male",
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
      imgSm: finaPhilippeSm,
      name: "Fina Philippe",
      age: 35,
      gender: "female",
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
      imgSm: jeremiahLakhwaniSm,
      name: "Jeremiah Lakhwani",
      age: 27,
      gender: "male",
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
    comment:
      "Really solid conditioning and speed for her size. She doesn’t overpower anyone in pure strength events, but she rarely falls apart when the workout drags on. With a bit more focus on heavy barbell work and positional strength, she could close the gap on the stronger athletes while keeping her engine.",
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
    comment:
      "Great engine, just needs more pop on the heavy and explosive stuff. You can tell she’s comfortable when things are cyclical and repeatable, but less so when it’s max effort or big power output.",
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
    comment:
      "Very balanced profile with above-average numbers across the board. She paces well, rarely looks rushed, and seems to understand how to manage her effort over a full event. If she sharpens her top-end strength a bit more, she could easily move into consistent A or even S-tier territory.",
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
    comment:
      "Ridiculously strong and explosive, especially in short, violent efforts. Any task that comes down to raw power or a heavy static hold is basically made for him. But once the event gets long or requires a lot of quick problem solving, you can see him slow down mentally and physically. A bit more conditioning and practice with unusual movement patterns would make him terrifying.",
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
    comment:
      "Explosive and hits hard, but the gas tank clearly isn’t his biggest strength. He’s the type who can dominate the opening phase of a challenge, then start to fade if the pace doesn’t let up.",
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
    comment:
      "Monster strength with legit knockout-level explosiveness. In one-on-one or short-burst events he looks almost unbeatable. The main limiter is that he still moves like a power athlete trying to survive endurance work rather than someone trained for it. If he ever dials in proper pacing and better breathing mechanics, his results would jump immediately.",
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
    comment:
      "Elite mindset and championship-level grit. You can see years of high-level fight experience in how calm he stays even when he’s behind. Strong, fast, and with great cardio, but the real weapon is his ability to adjust mid-event and choose smarter lines than his opponents.",
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
    comment:
      "Champ-level grit with no obvious holes. He might not be the single best in any one category numerically, but he’s near the top in almost everything that matters: power, pace, composure, and decision-making. And when it gets ugly, he tends to rise rather than fade.",
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
    comment:
      "Always dangerous in any kind of grindy, head-to-head challenge. He’s not the flashiest mover but he rarely breaks mentally. You can pretty much bank on him to keep pushing when others start to look for a way out.",
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
    comment:
      "Very technical and composed, you can see the veteran MMA experience. He’s strong enough to hang with bigger athletes and smart enough to find efficient ways to move, especially in close-contact or grappling-style tasks.",
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
    comment:
      "Feels like a classic veteran competitor: good fundamentals, solid base, and not easily rattled. He may not have the same pop as younger athletes, but his anticipation and positioning help close that gap a lot.",
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
    comment:
      "Strong veteran presence with a good mix of strength and fight IQ. Not the best gas tank in the roster, but he usually makes smart choices and doesn’t waste effort, which keeps him competitive deep into events.",
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
    comment:
      "You can tell there’s a CrossFit engine behind his numbers. Great mix of power, conditioning, and movement efficiency. He recovers quickly between efforts and knows how to pace himself instead of sprinting blindly into the red.",
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
    comment:
      "Moves like someone who’s done a lot of structured programming: good positions, smart pacing, and very controlled breathing. He may not lead every event, but he’s always in the mix when it comes down to overall performance.",
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
    comment:
      "Explosive, conditioned, and very efficient technically. This is the type of athlete who can handle repeated high-intensity efforts without falling apart. A real threat in any multi-stage, multi-modality format where others start dropping off after a few rounds.",
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
    comment:
      "One of the most explosive athletes in the entire pool, and the cardio to back it up. He looks built for sled pushes, sprints, and any kind of all-out effort where power and speed matter. The only real question mark is how quickly he adjusts to totally unfamiliar movement tasks.",
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
    comment:
      "Elite power output with a solid engine behind it. He shines in tasks that reward acceleration and repeated sprints, and even in longer events he doesn’t fall off a cliff. A bit more practice with odd-object or awkward movement patterns would round him out nicely.",
  },
  {
    athleteId: "yun-sung-bin",
    id: "user-yun-3",
    username: "skeletonGold",
    favorite: true,
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
    comment:
      "Explosiveness is off the charts and the cardio is well above average. He’s the kind of athlete who can repeatedly hit high power outputs without completely crashing. If he improves his adaptability and comfort with non-linear challenges, he could easily edge toward S-tier.",
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
    comment:
      "Her wrestling and ssireum background shows up in every physical exchange. She has great hip strength, control in close quarters, and a very clear refusal to quit. Even when she’s out-sized, she finds a way to stay dangerous in grappling-style tasks.",
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
    comment:
      "Very tough mentally, you can tell she’s used to grinding through hard training. She doesn’t have the top-end explosiveness of some other athletes, but makes up for it with technique and stubbornness.",
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
    comment:
      "Elite grip and strength with huge grit on top of it. In any challenge where you have to hold, drag, or wrestle for position, she’s a nightmare opponent. She might not be the fastest over long distances, but in contested space she almost always looks in control.",
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
    comment:
      "Super smooth pacing and efficient movement patterns. She looks like someone who has done a lot of metcons and knows exactly how to avoid redlining too early. Very dangerous in workouts with lots of transitions and mixed movements.",
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
    comment:
      "Very consistent, rarely makes big mistakes. She may not have a singular standout stat, but there’s also no glaring weakness. That kind of reliability is huge in multi-event formats where bad performances are heavily punished.",
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
    comment:
      "Insane cardio and work capacity. She shines in high-rep, long-duration grinders where other competitors start to break down mentally and physically. Great at maintaining form under fatigue, which keeps her efficient when everyone else is falling apart.",
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
    comment:
      "Strong base, heavy hands, and a ton of lower-body power from ssireum. He looks incredibly comfortable any time the challenge becomes a pushing, pulling, or grappling match. Cardio is good enough, but not his superpower.",
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
    comment:
      "Very durable and hard to move. He may slow down as the event goes on, but he doesn’t mentally check out. Would really benefit from some dedicated aerobic work to match his strength with a deeper engine.",
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
    comment:
      "Legit powerhouse with great grip and balance. He’s at his best in head-to-head, strength-oriented tasks where leverage and positioning matter. If he pushed his cardio just a little higher, he’d be an absolute menace in every phase.",
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
    comment:
      "Explosive striking power translates surprisingly well into power-based tasks. He moves with that relaxed, efficient style you see in elite strikers, which helps him conserve energy even when he’s working hard. Could stand to improve a bit in more chaotic, non-linear challenges where technique doesn’t look like traditional fight movement.",
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
    comment:
      "Fast, accurate, and clearly used to high-pressure situations. His explosiveness gives him a serious edge any time the challenge rewards quick bursts rather than long slogs. A bit more exposure to odd-object strength would make him even more complete.",
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
    comment:
      "Excellent balance of power and stamina. You can see that fight conditioning base: he’s comfortable pushing hard, backing off slightly, then surging again. Might not be the best pure strongman type, but for mixed challenges he’s consistently dangerous.",
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
    comment:
      "Very tough competitor with that classic rugby-style physicality. He might not top the charts on any single metric, but he’s solid across everything and clearly comfortable with contact and collision.",
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
    comment:
      "Solid speed and effort, especially in mid-duration challenges where sprinting the whole time isn’t an option. Feels like the kind of athlete who will always give you a dependable performance even if he doesn’t win the event.",
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
    comment:
      "Scrappy, physical, and clearly used to high-contact, high-fatigue scenarios. He doesn’t back down easily and seems to get more competitive the more tired everyone else gets. Great fit for grindy, team-based or attrition-style events.",
  },
];
