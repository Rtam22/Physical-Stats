type UserId = string;

export type AthleteData = {
  info: {
    id: AthleteIdKey;
    img: string;
    name: string;
    age: number;
    height: string;
    weight: string;
    team: AthleteTeams;
    backgroundSport: string;
  };
};

export type AthleteTeams =
  | "South Korea"
  | "Japan"
  | "Turkey"
  | "Mongolia"
  | "Australia"
  | "Philippines"
  | "Indonesia"
  | "Thailand";

export type AthleteDataWithAttributes = AthleteData & {
  attributes: AttributeValues;
  favorite: number;
  mvp: boolean;
  mvpCount: number;
  total: number;
};

export type AttributeKey =
  | "strength"
  | "explosiveness"
  | "speed"
  | "endurance"
  | "cardio"
  | "grit"
  | "leadership";

export type AttributeValues = Record<AttributeKey, number>;

export type AttributeSubmission = {
  athleteId: AthleteIdKey;
  id: UserId;
  username: string;
  favorite: boolean;
  values: AttributeValues;
  mvp?: boolean;
  comment?: string;
};

export type AthleteIdKey =
  // 🇰🇷 Team Korea
  | "kim-dong-hyun"
  | "kim-hae-jong"
  | "yun-sung-bin"
  | "jang-eun-sil"
  | "choi-seung-yeon"
  | "kim-min-jae"

  // 🇯🇵 Team Japan
  | "yushin-okami"
  | "kana-watanabe"
  | "nonoka-ozaki"
  | "soichi-hashimoto"
  | "katsumi-nakamura"
  | "yoshio-itoi"

  // 🇹🇭 Team Thailand
  | "superbon-singha-mawynn"
  | "james-rusameekae"
  | "sunny-kerdkao"
  | "jar-uracha"
  | "anucha-yospanya"
  | "ploy-nuannaree"

  // 🇲🇳 Team Mongolia
  | "orkhonbayar"
  | "adiyasuren"
  | "dulguun"
  | "enkh-orgil"
  | "khandsuren"
  | "lfkhagva-ochir"

  // 🇹🇷 Team Turkey
  | "recep-kara"
  | "ali-sofuoglu"
  | "anil-berk-baki"
  | "nefise-karatay"
  | "ogeday-girisken"
  | "yasemin-adar"

  // 🇦🇺 Team Australia
  | "robert-whittaker"
  | "alexandra-milne"
  | "dom-tomato"
  | "eddie-williams"
  | "eloni-vunakece"
  | "katelin-van-zyl"

  // 🇵🇭 Team Philippines
  | "manny-pacquiao"
  | "lara-lorraine"
  | "mark-mugen"
  | "justin-coveney"
  | "ray-jefferson"
  | "robyn-lauren"

  // 🇮🇩 Team Indonesia
  | "igedz-executioner"
  | "maria-selena"
  | "marcus-gideon"
  | "glenn-victor"
  | "fina-philippe"
  | "jeremiah-lakhwani";
