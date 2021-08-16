const teams = {
  1: {
    name: "New Jersey Devils",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/dlm2PLEGHJY8DzDLloxLcQ_48x48.png",
    mainColor: "#CE1126",
    secondColor: "#000000",
    conference: 6,
    division: 18,
  },
  2: {
    name: "New York Islanders",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/wIWMfokR7qsGJM1gFhRrUA_48x48.png",
    mainColor: "#00539B",
    secondColor: "#F47D30",
    conference: 6,
    division: 18,
  },
  3: {
    name: "New York Rangers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/xAan1UsViSOex0EoBJEMOA_48x48.png",
    mainColor: "#0038A8",
    secondColor: "#CE1126",
    conference: 6,
    division: 18,
  },
  4: {
    name: "Philadelphia Flyers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/ZFZEyofJ8vMrr0tFGsMFKg_48x48.png",
    mainColor: "#F74902",
    secondColor: "#000000",
    conference: 6,
    division: 18,
  },
  5: {
    name: "Pittsburgh Penguins",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/mTXURxq0CbsVREw9q3UAnw_48x48.png",
    mainColor: "#FCB514",
    secondColor: "#000000",
    conference: 6,
    division: 18,
  },
  6: {
    name: "Boston Bruins",
    mainLogo:
      "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/6.svg",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/_KkOxoGjAn3S7_9-Z1d0OA_48x48.png",
    mainColor: "#000000",
    secondColor: "#FFB81C",
    conference: 6,
    division: 17,
  },
  7: {
    name: "Buffalo Sabres",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/6vSZsDaiDt1MW__o_ksW4A_48x48.png",
    mainColor: "#002654",
    secondColor: "#FCB514",
    conference: 6,
    division: 17,
  },
  8: {
    name: "Montréal Canadiens",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/fhexjWXZM7Sgvd22nDkBOA_48x48.png",
    conference: 6,
    division: 17,
  },
  9: {
    name: "Ottawa Senators",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/_rlImUQJkjVKGTj1Xkdaaw_48x48.png",
    conference: 6,
    division: 17,
  },
  10: {
    name: "Toronto Maple Leafs",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/jMSyNOMdJPjHwsmbWukUag_48x48.png",
    conference: 6,
    division: 17,
  },
  12: {
    name: "Carolina Hurricanes",
    smallLogo: "https://statsapi.web.nhl.com/api/v1/teams/12/stats",
    conference: 6,
    division: 18,
  },
  13: {
    name: "Florida Panthers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/HhkdL7JKqdlVy_DtjLOjbw_48x48.png",
    conference: 6,
    division: 17,
  },
  14: {
    name: "Tampa Bay Lightning",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/IFjTMxl-nMxMJK2b64xLFQ_48x48.png",
    conference: 6,
    division: 17,
  },
  15: {
    name: "Washington Capitals",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/uT-r__4aRFZmtEITN9mNdQ_48x48.png",
    mainColor: "#C8102E",
    secondColor: "#041E42",
    conference: 6,
    division: 18,
  },
  16: {
    name: "Chicago Blackhawks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/kUlSd6LbUN7Jj03mqZcgAw_48x48.png",
    conference: 5,
    division: 16,
  },
  17: {
    name: "Detroit Red Wings",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/QaP8buCif1FvjfqApkxsDg_48x48.png",
    conference: 6,
    division: 17,
  },
  18: {
    name: "Nashville Predators",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/8aNIxgSUNttfOeojBie04w_48x48.png",
    conference: 5,
    division: 16,
  },
  19: {
    name: "St. Louis Blues",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/oUzPuWuhgzayhHwucx8htQ_48x48.png",
    conference: 5,
    division: 16,
  },
  20: {
    name: "Calgary Flames",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/jwG6UfooGEJ_nvOVT_0ykw_48x48.png",
    conference: 5,
    division: 15,
  },
  21: {
    name: "Colorado Avalanche",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/iBFLyMGpOW2Fh5j8s7kYpw_48x48.png",
    conference: 5,
    division: 16,
  },
  22: {
    name: "Edmonton Oilers",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/GFR5_nXarHj6qRI8R05otg_48x48.png",
    conference: 5,
    division: 15,
  },
  23: {
    name: "Vancouver Canucks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/1SVoPsK2xW65VIfyQB2soQ_48x48.png",
    conference: 5,
    division: 15,
  },
  24: {
    name: "Anaheim Ducks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/Ujlge7BWmyIJvsCwu3y-Lw_48x48.png",
    conference: 5,
    division: 15,
  },
  25: {
    name: "Dallas Stars",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/yAPda2I1VV6sr0TB17rnxQ_48x48.png",
    mainColor: "#006847",
    secondColor: "#8F8F8C",
    conference: 5,
    division: 16,
  },
  26: {
    name: "Los Angeles Kings",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/74fKqDZ5DMq7qup120TeSQ_48x48.png",
    conference: 5,
    division: 15,
  },
  28: {
    name: "San Jose Sharks",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/TuRBhY0zNhgZUbHQS4VUhQ_48x48.png",
  },
  29: {
    name: "Columbus Blue Jackets",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/7lrK9CX_nZj_veEeleHTmg_48x48.png",
    conference: 6,
    division: 18,
  },
  30: {
    name: "Minnesota Wild",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/2AkZ-bLhHUaPoj_LlLPBVA_48x48.png",
    conference: 5,
    division: 16,
  },
  52: {
    name: "Winnipeg Jets",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/G92uFvMADMSGFV07IgpUIQ_48x48.png",
    conference: 5,
    division: 16,
  },
  53: {
    name: "Arizona Coyotes",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/dhQ15Ly2gTPvCPbJEq-OHA_48x48.png",
    conference: 5,
    division: 16,
  },
  54: {
    name: "Vegas Golden Knights",
    smallLogo:
      "https://ssl.gstatic.com/onebox/media/sports/logos/QeG0x42j0YlJGYEAwowewA_48x48.png",
    conference: 5,
    division: 15,
  },
};
export default teams;
