interface Player {
  firstname: string;
  lastname: string;
  nickname: string;
  id: string;
  desc: string
}


type Team = Player[]

const teams: Team[] = [
  [
    {
      id: "peder",
      firstname: "Peder",
      lastname: "Forsell",
      nickname: "Patrick Reed",
      desc: "pappa päääeee"
    },
    {
      id: "jacob",
      firstname: "Jacob",
      lastname: "Runströmer",
      nickname: "McIlroy",
      desc: "snakejakedrake"
    }
  ],
  [
    {
      id: "arvid",
      firstname: "Arvid",
      lastname: "Gällström",
      nickname: "John Daly",
      desc: "en röst som är gällare än hans hjärta"
    },
    {
      id: "niklas",
      firstname: "Niklas",
      lastname: "Vang",
      nickname: "Tommy Fleetwood",
      desc: "så jävla skön kille"
    }
  ],
  [
    {
      id: "christian",
      firstname: "Christian",
      lastname: "Forsell",
      nickname: "Iceman",
      desc: "ice ice baaby"
    },
    {
      id: "dennis",
      firstname: "Dennis",
      lastname: "Malmstem",
      nickname: "Deschambou",
      desc: "vem fan ka stava til ldeschambo"
    }
  ],
  [
    {
      id: "david",
      firstname: "David",
      lastname: "Barklöf (för sista gången)",
      nickname: "Tiger",
      desc: "mr crooked"
    },
    {
      id: "alfred",
      firstname: "Alfred",
      lastname: "Runow",
      nickname: "Kevin Na",
      desc: "2000 övningsswingar"
    }
  ],
  [
    {
      id: "joel",
      firstname: "Joel",
      lastname: "Linde",
      nickname: "Lefty",
      desc: "left left left men ändå bög"
    },
    {
      id: "carl",
      firstname: "Carl",
      lastname: "Blanche",
      nickname: "John Ram",
      desc: "för han är blackie"
    }
  ],
]

export default teams;
