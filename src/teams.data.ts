interface Player {
  firstname: string;
  lastname: string;
  nickname: string;
  id: string;
  desc: string
}


interface Team {
  name: string;
  desc: string;
  players: Player[];
}

const teams: Team[] = [
  {
    name: "The Duffers",
    desc: 'Det kommer duffas och det kommer sväras, men det kommer nog även slå en och annan drömboll.',
    players: [
      {
        id: "peder",
        firstname: "Peder",
        lastname: "Forsell",
        nickname: "Patrick Reed",
        desc: "Pappa peder, känd för att aldrig inte hittat sin boll när han hamnat i skogen. Ibland hittar han dem så snabbt att de byter logga t.o.m. " +
              "Men mitt i allt detta letande ska man inte glömma att det gömmer sig en formidabel golfare där inne." +
              "Frågan är bara om han kommer få in de timmar som krävs under sommaren för att locka fram honom?"
      },
      {
        id: "jacob",
        firstname: "Jacob",
        lastname: "Runströmer",
        nickname: "McIlroy",
        desc: "Den evige unge Jacob kan slå väldigt fina slag. Han kan även slå riktigt fula slag. Likt sin lagkamrat finns det en bra nivå där, " +
              "men kommer krävas lite golfande för att den ska titta fram."
      }
    ]
  },
  {
    name: "The Chillers",
    desc: 'Ett lag med enorm potential! Men ett lag som även har en förmåga att spela mindre imponerande golf. Skulle de sätta på när det krävs tror vi det här kan vara årets dark horse.',
    players: [
      {
        id: "david",
        firstname: "David",
        lastname: "Barklöf",
        nickname: "Tiger",
        desc: "Ständigt skadade David är egentligen bäst av alla på golf. När han inte har ont i ryggen. Eller ont i benent. Eller är bakfull." +
              " Eller är allt av det där samtidigt. Skulle han slå av sig de problemen tror vi på en comeback alá Tiger 2020."
      },
      {
        id: "alfred",
        firstname: "Alfred",
        lastname: "Runow",
        nickname: "Kevin Na",
        desc: "Alfred kan spela riktigt fin golf, men kan ibland överanalysera lite, vilket tenderar till att leda till en liten duff. " +
              "Kan Alfred bli fri från hjärnspökerna vet vi att det ligger en farlig golfare där bakom och väntar."
      }
    ]
  },
  {
    name: "The Heavy Hitters",
    desc: '"Men vilka jävla armjävlar du har!" Kan man slå långt har man ju redan tagit sig över halva banan, och har du sen en carry där för att hjälpa dig sista biten, ja vem vet vad som kan hända?',
    players: [
      {
        id: "christian",
        firstname: "Christian",
        lastname: "Eklund",
        nickname: "Iceman",
        desc: "Iceman får ta på sig stora carrybyxorna och visa vad han står för i år. Spelar mycket golf, en del av den också väldigt vacker. Ibland smyger sig en hook dock in, hinner den försvinna under sommaren?"
      },
      {
        id: "dennis",
        firstname: "Dennis",
        lastname: "Malmstem",
        nickname: "Deschambou",
        desc: "Dennis pappa slår längre än alla andras pappor i det här gänget, men gör Dennis det? Det är den stora frågan."
      }
    ]
  },
  {
    name: "The Heavy Drinkers",
    desc: 'En stabil carry och en motiverad höghandikappare brukar ofta vara vägen till framgång.\nFrågan är om de har vad som krävs för att avsluta Carl och Joels segersvit?',
    players:   [
      {
        id: "arvid",
        firstname: "Arvid",
        lastname: "Gällström",
        nickname: "John Daly",
        desc: "En fantastisk golfare när han vill med både en hög högsta och lägsta nivå. Men är inte den som lägger sig först på kvällarna, och frågan är vad han en spansk hamnstads utbud av Sangria kommer" +
              " innebära för golfen?"
      },
      {
        id: "niklas",
        firstname: "Niklas",
        lastname: "Vang",
        nickname: "Tommy Fleetwood",
        desc: "Allmänt skön kille. Omtyckt av de flesta. Är det en ynnest att gå en runda med honom? Hört att folk säger det. Aldrig sliceat en drive i hela sitt liv heller."
      }
    ]
  },
  {
    name: "The Champs",
    desc: 'Le Champs. Mycket mer kan man inte säga efter 2 starka år som vinnare i nacken. I år kommer vi dock tvinga i dem samma mängd alkohol som resten, då vi tidigare noterat vissa ouppskattade tendenser där.',
    players: [
      {
        id: "joel",
        firstname: "Joel",
        lastname: "Linde",
        nickname: "Lefty",
        desc: "Det bästa han vet på Jorden är när Carl precis klivit ut ur duschen och har handduken lite sådär på sne."
      },
      {
        id: "carl",
        firstname: "Carl",
        lastname: "Blanche",
        nickname: "John Ram",
        desc: "Han gillar sin familj, men inte nära lika mycket som han gillar att drunkna i Joels blå ögon."
      }
    ]
  }
]

export default teams;
