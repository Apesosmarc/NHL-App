const teams = {
  1: {
    name: "New Jersey Devils",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/dlm2PLEGHJY8DzDLloxLcQ_48x48.png",
    mainColor: "#CE1126",
    secondColor: "#fff",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/301891622/binary-file/file.svg",
    id: "1",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/320286118/470x32/cut.png",
    abrev: "njd",
  },
  2: {
    name: "New York Islanders",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/wIWMfokR7qsGJM1gFhRrUA_48x48.png",
    mainColor: "#00539B",
    secondColor: "#F47D30",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/316482732/binary-file/file.svg",
    id: "2",
    teamText: null,
    abrev: "nyi",
  },
  3: {
    name: "New York Rangers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/xAan1UsViSOex0EoBJEMOA_48x48.png",
    mainColor: "#0038A8",
    secondColor: "#CE1126",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/289471614/binary-file/file.svg",
    id: "3",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/281807656/408x56/cut.png",
    abrev: "nyr",
  },
  4: {
    name: "Philadelphia Flyers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/ZFZEyofJ8vMrr0tFGsMFKg_48x48.png",
    mainColor: "#F74902",
    secondColor: "#F74902",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/4.svg",
    id: "4",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/290924876/569x56/cut.png",
    abrev: "phi",
  },
  5: {
    name: "Pittsburgh Penguins",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/mTXURxq0CbsVREw9q3UAnw_48x48.png",
    mainColor: "#FCB514",
    secondColor: "#FFB81C",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/5.svg",
    id: "5",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/281468728/425x56/cut.png",
    abrev: "pit",
  },
  6: {
    name: "Boston Bruins",
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/6.svg",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/_KkOxoGjAn3S7_9-Z1d0OA_48x48.png",
    mainColor: "#FFB81C",
    secondColor: "#FFB81C",
    conference: 6,
    division: 17,
    covidDiv: 1,
    id: "6",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/325907858/512x56/cut.png",
    abrev: "bos",
  },
  7: {
    name: "Buffalo Sabres",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/318303268/binary-file/file.svg",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/6vSZsDaiDt1MW__o_ksW4A_48x48.png",
    mainColor: "#FCB514",
    secondColor: "#FCB514",
    conference: 6,
    division: 17,
    covidDiv: 1,
    id: "7",
    teamText: "/images/sabres.png",
    abrev: "buf",
  },
  8: {
    name: "Montréal Canadiens",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/fhexjWXZM7Sgvd22nDkBOA_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#AF1E2D",
    secondColor: "#192168",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/309964716/binary-file/file.svg",
    id: "8",
    teamText: "images/habs.png",
    abrev: "mtl",
  },
  9: {
    name: "Ottawa Senators",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/_rlImUQJkjVKGTj1Xkdaaw_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#C52032",
    secondColor: "#C52032",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/319086486/binary-file/file.svg",
    id: "9",
    teamText: "images/sens.png",
    abrev: "sen",
  },
  10: {
    name: "Toronto Maple Leafs",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/jMSyNOMdJPjHwsmbWukUag_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#00205B",
    secondColor: "white",
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg",
    id: "10",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/300304082/604x56/cut.png",
    abrev: "tor",
  },
  12: {
    name: "Carolina Hurricanes",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/nC8dMKdf-zPF4cWq_wSKHA_48x48.png",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainColor: "#CC0000",
    secondColor: "#CC0000",
    mainLogo:
      "https://www-league.nhlstatic.com/nhl.com/builds/site-core/8ecaf2e5b9df3410a759d20f311404825907c23a_1629306204/images/logos/team/current/team-12-light.svg",
    id: "12",
    teamText: "/images/canes.png",
    abrev: "car",
  },
  13: {
    name: "Florida Panthers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/HhkdL7JKqdlVy_DtjLOjbw_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#C8102E",
    secondColor: "white",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/291015530/binary-file/file.svg",
    id: "13",
    teamText: "images/panthers.png",
    abrev: "fla",
  },
  14: {
    name: "Tampa Bay Lightning",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/IFjTMxl-nMxMJK2b64xLFQ_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#002868",
    secondColor: "#FFFFFF",
    mainLogo:
      "https://seeklogo.com/images/T/tampa-bay-lightning-logo-9066D2F72D-seeklogo.com.png",
    id: "14",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/309921738/500x56/cut.png",
    abrev: "tbl",
  },
  15: {
    name: "Washington Capitals",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/uT-r__4aRFZmtEITN9mNdQ_48x48.png",
    mainColor: "#C8102E",
    secondColor: "#C8102E",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/298789884/binary-file/file.svg",
    id: "15",
    teamText: "/images/capitals.png",
    abrev: "wsh",
  },
  16: {
    name: "Chicago Blackhawks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/kUlSd6LbUN7Jj03mqZcgAw_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#CF0A2C",
    secondColor: "#FFD100",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/301971744/binary-file/file.svg",
    id: "16",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/320245294/409x32/cut.png",
    abrev: "chi",
  },
  17: {
    name: "Detroit Red Wings",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/QaP8buCif1FvjfqApkxsDg_48x48.png",
    conference: 6,
    division: 17,
    covidDiv: 1,
    mainColor: "#CE1126",
    secondColor: "#FFFFFF",
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/17.svg",
    id: "17",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/300066598/500x56/cut.png",
    abrev: "det",
  },
  18: {
    name: "Nashville Predators",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/8aNIxgSUNttfOeojBie04w_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#FFB81C",
    secondColor: "#FFB81C",
    mainLogo:
      "https://www-league.nhlstatic.com/nhl.com/builds/site-core/8ecaf2e5b9df3410a759d20f311404825907c23a_1629306204/images/logos/team/current/team-18-dark.svg",
    id: "18",
    teamText: "/images/preds.png",
    abrev: "nsh",
  },
  19: {
    name: "St. Louis Blues",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/oUzPuWuhgzayhHwucx8htQ_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#FCB514",
    secondColor: "#fff",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/309991890/binary-file/file.svg",
    id: "19",
    teamText: "images/blues.png",
    abrev: "stl",
  },
  20: {
    name: "Calgary Flames",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/jwG6UfooGEJ_nvOVT_0ykw_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#C8102E",
    secondColor: "#F1BE48",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/319279210/binary-file/file.svg",
    id: "20",
    teamText: "images/flames.png",
    abrev: "cgy",
  },
  21: {
    name: "Colorado Avalanche",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/iBFLyMGpOW2Fh5j8s7kYpw_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#6F263D",
    secondColor: "#236192",
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/21.svg",
    id: "21",
    teamText: "images/avs.png",
    abrev: "col",
  },
  22: {
    name: "Edmonton Oilers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/GFR5_nXarHj6qRI8R05otg_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#FF4C00",
    secondColor: "#FF4C00",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/290013862/binary-file/file.svg",
    id: "22",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/309927568/423x50/cut.png",
    abrev: "edm",
  },
  23: {
    name: "Vancouver Canucks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/1SVoPsK2xW65VIfyQB2soQ_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#00843D",
    secondColor: "#00843D",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/309954422/binary-file/file.svg",
    id: "23",
    teamText: "/images/canucks.png",
    abrev: "van",
  },
  24: {
    name: "Anaheim Ducks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/Ujlge7BWmyIJvsCwu3y-Lw_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#F47A38",
    secondColor: "#B9975B",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/318845684/binary-file/file.svg",
    id: "24",
    teamText: "images/ducks.png",
    abrev: "ana",
  },
  25: {
    name: "Dallas Stars",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/yAPda2I1VV6sr0TB17rnxQ_48x48.png",
    mainColor: "#006847",
    secondColor: "#006847",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/325914394/binary-file/file.svg",
    id: "25",
    teamText: "/images/stars.png",
    abrev: "dal",
  },
  26: {
    name: "Los Angeles Kings",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/74fKqDZ5DMq7qup120TeSQ_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#5F259F",
    secondColor: "#5F259F",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg",
    id: "26",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/321078680/300x56/cut.png",
    abrev: "lak",
  },
  28: {
    name: "San Jose Sharks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/TuRBhY0zNhgZUbHQS4VUhQ_48x48.png",
    division: 15,
    covidDiv: 3,
    mainColor: "#006D75",
    secondColor: "#EA7200",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg",
    id: "28",
    teamText: "images/sharks.png",
    abrev: "sjs",
  },
  29: {
    name: "Columbus Blue Jackets",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/7lrK9CX_nZj_veEeleHTmg_48x48.png",
    conference: 6,
    division: 18,
    covidDiv: 0,
    mainColor: "#002654",
    secondColor: "#CE1126",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/301936032/binary-file/file.svg",
    id: "29",
    teamText: "/images/jackets.png",
    abrev: "cbj",
  },
  30: {
    name: "Minnesota Wild",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/2AkZ-bLhHUaPoj_LlLPBVA_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#154734",
    secondColor: "#A6192E",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/302317224/binary-file/file.svg",
    id: "30",
    teamText: "images/wild.png",
    abrev: "min",
  },
  52: {
    name: "Winnipeg Jets",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/G92uFvMADMSGFV07IgpUIQ_48x48.png",
    conference: 5,
    division: 16,
    covidDiv: 2,
    mainColor: "#AC162C",
    secondColor: "#004C97",
    mainLogo:
      "https://www-league.nhlstatic.com/nhl.com/builds/site-core/8ecaf2e5b9df3410a759d20f311404825907c23a_1629306204/images/logos/team/current/team-52-dark.svg",
    id: "52",
    teamText: "images/jets.png",
    abrev: "win",
  },
  53: {
    name: "Arizona Coyotes",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/dhQ15Ly2gTPvCPbJEq-OHA_48x48.png",
    division: 16,
    covidDiv: 2,
    mainColor: "#8C2633",
    secondColor: "#E2D6B5",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/309994320/binary-file/file.svg",
    id: "53",
    teamText: "images/yotes.png",
    abrev: "ari",
  },
  54: {
    name: "Vegas Golden Knights",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/QeG0x42j0YlJGYEAwowewA_48x48.png",
    conference: 5,
    division: 15,
    covidDiv: 3,
    mainColor: "#B4975A",
    secondColor: "#B4975A",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/290581542/binary-file/file.svg",
    id: "54",
    teamText:
      "https://cms.nhl.bamgrid.com/images/photos/290581538/500x56/cut.png",
    abrev: "vgk",
  },
  55: {
    name: "Seattle Kraken",
    division: 15,
    covidDiv: 3,
    mainColor: "#99D9D9",
    secondColor: "#99D9D9",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/JQg1BPtt9E6O5JfjqJiDrg_48x48.png",
    mainLogo:
      "https://cms.nhl.bamgrid.com/images/assets/binary/317578370/binary-file/file.svg",
    id: "55",
    teamText: "/images/kraken.png",
    abrev: "sea",
  },
};

export default teams;
