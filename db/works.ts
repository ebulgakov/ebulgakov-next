export type Image = {
  caption?: string;
  preview: string;
  public_id: string;
};

type Work = {
  addedAt: { __time__: string };
  category: string;
  description: string;
  images: Image[];
  previewDescription: string;
  previewImage: Image;
  realLink: string;
  stack: string[];
  staticLink?: string;
  title: string;
  url: string;
  visible?: boolean;
  year: string;
};

export const works: { [key: string]: Work } = {
  "34HSzs3DHGFQCQ3YY8VG": {
    addedAt: { __time__: "2019-07-28T05:30:53.493Z" },
    category: "formatting",
    description:
      "The IPC2U Group is an international supplier and manufacturer of industrial computer systems with more than 20 years of experience and is represented in more than 14 countries in the EMEA space with offices, qualified partners and distributors.",

    images: [],
    previewDescription:
      "The IPC2U Group is an international supplier and manufacturer of industrial computer systems.",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564291852/bulgakov/snixkhmh7gz1cccqduff.jpg",
      public_id: "bulgakov/snixkhmh7gz1cccqduff"
    },
    realLink: "https://ipc2u.ru/",
    stack: ["HTML", "Less/Sass", "AngularJS"],
    staticLink: "/static/ipc/",
    title: "IPC2U",
    url: "ipc2u",
    visible: true,
    year: "2014"
  },
  "3SKeXNDCe30PozAJVAQb": {
    addedAt: { __time__: "2019-07-28T06:11:35.677Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription:
      '"Osnova Telecom" is a national LTE mobile operator (4G). The company holds 2, 3-2, 4 GHz frequency band licenses throughout Russia.',
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564294294/bulgakov/r28xjzjl97nn6rgpnmru.png",
      public_id: "bulgakov/r28xjzjl97nn6rgpnmru"
    },
    realLink: "http://www.osnova-telecom.ru/",
    stack: ["HTML", "CSS"],
    staticLink: "/static/osnova-telekom/",
    title: "Osnova Telekom",
    url: "osnova-telekom",
    year: "2011"
  },
  "56NSVjvpbnlOMl5lgQd3": {
    addedAt: { __time__: "2018-05-05T14:08:48.148Z" },
    category: "3D",
    description: "",
    stack: ["Three.js"],
    images: [],
    previewDescription: "The background is moved by mouse moving",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525529326/bulgakov/e4qe2qaw36ae2ib4l8o8.png",
      public_id: "bulgakov/e4qe2qaw36ae2ib4l8o8"
    },
    realLink: "",
    staticLink: "/static/glass-bg/",
    title: "Interactive background",
    url: "glass-bg",
    visible: true,
    year: "2016"
  },
  "8CmW1b5FAc7d4wyEv4ZA": {
    addedAt: { __time__: "2019-07-28T06:13:39.226Z" },
    category: "formatting",
    description: "",
    images: [],
    previewDescription: "2009. Blog for online store of  gadgets",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564294418/bulgakov/ivng89ub8sxc7n6apbwo.png",
      public_id: "bulgakov/ivng89ub8sxc7n6apbwo"
    },
    realLink: "",
    stack: ["HTML", "CSS"],
    staticLink: "/static/on-up-2/",
    title: "On-UP",
    url: "on-up",
    year: "2000"
  },
  "9f3XlCd8v5nlhAWWKUtf": {
    addedAt: { __time__: "2019-07-28T17:12:45.000Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330357/bulgakov/qbyffqnkbcvhfxp36pva.png",
        public_id: "bulgakov/qbyffqnkbcvhfxp36pva"
      },
      {
        caption: "Product page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330362/bulgakov/nh8gtxmpqvpca0jueb5c.png",
        public_id: "bulgakov/nh8gtxmpqvpca0jueb5c"
      }
    ],
    previewDescription: "Online Store Audio TV Store",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330353/bulgakov/iwdwa3vnlcfdocmhkjnk.png",
      public_id: "bulgakov/iwdwa3vnlcfdocmhkjnk"
    },
    realLink: "http://www.avsale.ru/",
    stack: ["HTML", "CSS"],
    staticLink: "",
    title: "AVsale",
    url: "avsale",
    visible: true,
    year: "2011"
  },
  AArKFaoNMiewRW8WR4t3: {
    addedAt: { __time__: "2018-05-05T14:25:51.438Z" },
    category: "formatting",
    description: "",
    stack: ["HTML", "CSS", "JS"],
    images: [
      {
        caption: "Landing page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525530890/bulgakov/roaafw8nwuhrtcg4ck8d.png",
        public_id: "bulgakov/roaafw8nwuhrtcg4ck8d"
      }
    ],
    previewDescription: "Front-end for e-shop Mountain Khakis",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525530348/bulgakov/i28svlsfj6dtq2didx88.png",
      public_id: "bulgakov/i28svlsfj6dtq2didx88"
    },
    realLink: "https://cloudcastle.ru/portfolio/mountain-khakis",
    staticLink: "",
    title: "Mountain Khakis",
    url: "mountainkhakis",
    visible: true,
    year: "2015"
  },
  AYFxngtjKrOs1fivZ7DT: {
    addedAt: { __time__: "2018-05-05T13:38:58.719Z" },
    category: "3D",
    description:
      "The animation was created for site www.castle.co, but was excluded on last changes",

    images: [],
    previewDescription: "Animation of the particles. Created by Three.JS",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525528997/bulgakov/e1nt105rmkecec2dq7kz.png",
      public_id: "bulgakov/e1nt105rmkecec2dq7kz"
    },
    realLink: "",
    stack: ["Three.js"],
    staticLink: "/static/circles/",
    title: "Particles cloud",
    url: "circles",
    visible: true,
    year: "2016"
  },
  An4dgmIdadp4ROUZByrZ: {
    addedAt: { __time__: "2019-07-28T14:29:48.639Z" },
    category: "formatting",
    description:
      'Shopping and entertainment center "Domodedovo" is a favorite place for leisure and shopping for residents of the southern district of the capital and the Moscow region.',

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324185/bulgakov/jzd1prjmx7ivnikzdhmq.png",
        public_id: "bulgakov/jzd1prjmx7ivnikzdhmq"
      },
      {
        caption: "Shop Page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324187/bulgakov/r4uq354ojmbepnyizwfh.png",
        public_id: "bulgakov/r4uq354ojmbepnyizwfh"
      }
    ],
    previewDescription: 'Shopping and entertainment center "Domodedovo"',
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324319/bulgakov/ysttcirauxakg98macg2.png",
      public_id: "bulgakov/ysttcirauxakg98macg2"
    },
    realLink: "http://www.domodedovskiy.ru/",
    stack: ["HTML", "CSS", "Flash", "JS"],
    staticLink: "",
    title: "Shopping Center Domodedovo ",
    url: "domodedovskiy",
    visible: true,
    year: "2011"
  },
  DgvIofVsI1UyjrKhAvpC: {
    addedAt: { __time__: "2019-07-28T05:16:23.319Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "Zero alcohol drinks",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564290982/bulgakov/vfienc1fzp5c5ta6dktj.png",
      public_id: "bulgakov/vfienc1fzp5c5ta6dktj"
    },
    realLink: "",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "/static/gfd/",
    title: "Global Functional Drinks",
    url: "gfd",
    visible: true,
    year: "2014"
  },
  E5pINpKdaFPdvFnI4GPU: {
    addedAt: { __time__: "2019-07-28T05:45:50.539Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "Online Store clothes from china",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564292749/bulgakov/bkxlu4p1ibmrhdkwiafm.png",
      public_id: "bulgakov/bkxlu4p1ibmrhdkwiafm"
    },
    realLink: "https://olmi2000.ru/",
    stack: ["HTML", "Less/Sass", "AngularJS"],
    staticLink: "/static/olmi/",
    title: "OLMI 2000",
    url: "olmi",
    visible: true,
    year: "2014"
  },
  EsOkyClssS7HHObEAozb: {
    addedAt: { __time__: "2019-07-28T07:30:13.089Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main Page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564299008/bulgakov/v1ovngxd6v4hdqpprtim.png",
        public_id: "bulgakov/v1ovngxd6v4hdqpprtim"
      },
      {
        caption: "Article Page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564299012/bulgakov/imrqkx3odmsnchbrfiid.png",
        public_id: "bulgakov/imrqkx3odmsnchbrfiid"
      }
    ],
    previewDescription: "Victory Calendar, Unknown Documents",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564299000/bulgakov/zljvma0ejhnxtid3abo5.png",
      public_id: "bulgakov/zljvma0ejhnxtid3abo5"
    },
    realLink: "https://pobeda.elar.ru/",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "",
    title: "Victory Calendar",
    url: "pobeda",
    visible: true,
    year: "2014"
  },
  OoIrn1keV9SqcZTC23DS: {
    addedAt: { __time__: "2019-07-28T05:34:41.300Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2008. Salon Flowers. Home and Office flower delivery",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564292080/bulgakov/ld00h9qnefqlnomtrbab.png",
      public_id: "bulgakov/ld00h9qnefqlnomtrbab"
    },
    realLink: "http://www.irissamara.ru/",
    stack: ["HTML", "CSS", "jQuery"],
    staticLink: "/static/iris/",
    title: "Iris Flowers",
    url: "iris",
    year: "2000"
  },
  S2U7H7wJeT7tsJmeQEZi: {
    addedAt: { __time__: "2018-07-18T14:57:57.742Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531925943/bulgakov/b9wmgkqnwzmy9zrekeiv.png",
        public_id: "bulgakov/b9wmgkqnwzmy9zrekeiv"
      }
    ],
    previewDescription: "Landing page for interactive game",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531925876/bulgakov/w17u6tjlboau1ry9wzu4.png",
      public_id: "bulgakov/w17u6tjlboau1ry9wzu4"
    },
    realLink: "http://stellarage.com/",
    stack: ["Three.js", "HTML", "CSS", "JS"],
    staticLink: "",
    title: "Stellar Age",
    url: "stellarage",
    visible: true,
    year: "2018"
  },
  U6MHPQciqYNIzhVZvKnG: {
    addedAt: { __time__: "2019-07-28T14:51:54.839Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564325508/bulgakov/crv4fnafdrnokhnvomyk.png",
        public_id: "bulgakov/crv4fnafdrnokhnvomyk"
      },
      {
        caption: "Internal page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564325511/bulgakov/rgwfgp3oraijldgjh3tk.png",
        public_id: "bulgakov/rgwfgp3oraijldgjh3tk"
      }
    ],
    previewDescription: "Interior Architecture Design in Samara",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564325506/bulgakov/qrv18fhjsoem2tpbevyb.png",
      public_id: "bulgakov/qrv18fhjsoem2tpbevyb"
    },
    realLink: "http://www.sandra-design.ru/",
    stack: ["HTML", "CSS", "jQuery", "JS"],
    staticLink: "",
    title: "Sandra design",
    url: "sandra-design",
    visible: true,
    year: "2012"
  },
  Ve0Ke5Rh6sfWIwPrOCF8: {
    addedAt: { __time__: "2019-07-28T15:06:17.133Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326373/bulgakov/uasg83640hzv8mfxvsdm.png",
        public_id: "bulgakov/uasg83640hzv8mfxvsdm"
      },
      {
        caption: "Services",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326374/bulgakov/c1aanqzsmgvnym0i4eeu.png",
        public_id: "bulgakov/c1aanqzsmgvnym0i4eeu"
      }
    ],
    previewDescription: "Waste Disposal and Recycling in Moskow",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326371/bulgakov/fshca9mhu63cbx1qw8zw.png",
      public_id: "bulgakov/fshca9mhu63cbx1qw8zw"
    },
    realLink: "http://www.akonit-ut.ru/",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "",
    title: "Akonit",
    url: "akonit-ut",
    visible: true,
    year: "2011"
  },
  XxG9wxhUMLFy25Xoyp9K: {
    addedAt: { __time__: "2019-07-28T16:30:43.888Z" },
    category: "full stack",
    description: "",

    images: [
      {
        caption: "Intro page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564331440/bulgakov/uxi615rlapdvn2dinh0p.png",
        public_id: "bulgakov/uxi615rlapdvn2dinh0p"
      }
    ],
    previewDescription:
      "Clickable prototype for Wyndham portal. The portal is intended to guid borrowers throught loan application process.",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564331439/bulgakov/pq7vd0t0shidckngze2g.png",
      public_id: "bulgakov/pq7vd0t0shidckngze2g"
    },
    realLink: "https://wyndham-328a4.web.app",
    stack: ["HTML", "Less/Sass", "AngularJS"],
    staticLink: "",
    title: "Wyndham",
    url: "wyndham",
    visible: false,
    year: "2016"
  },
  Y4WQgLmXgw8horaHWnrD: {
    addedAt: { __time__: "2019-07-28T16:28:11.536Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564331290/bulgakov/gubigrpiuju06y5pnjrg.png",
        public_id: "bulgakov/gubigrpiuju06y5pnjrg"
      }
    ],
    previewDescription: "Online Interior Design & Home Decor Service",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564331283/bulgakov/s2ugjmvw4kpdkk0o1rly.png",
      public_id: "bulgakov/s2ugjmvw4kpdkk0o1rly"
    },
    realLink: "https://www.mybespokeroom.com/",
    stack: ["HTML", "Less/Sass", "ReactJS"],
    staticLink: "",
    title: "Mybespokeroom",
    url: "mybespokeroom",
    visible: false,
    year: "2017"
  },
  ZTSV2T92X4Ui71hyaPUx: {
    addedAt: { __time__: "2019-07-28T05:20:16.157Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2010. Head side for IT-company internet Lab",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564291215/bulgakov/wmwpmh69v0omd23xt7md.jpg",
      public_id: "bulgakov/wmwpmh69v0omd23xt7md"
    },
    realLink: "",
    stack: ["HTML", "CSS"],
    staticLink: "/static/interlab/",
    title: "internet Lab",
    url: "interlab",
    visible: true,
    year: "2000"
  },
  ZiMiCz6sF73hTQwnSpst: {
    addedAt: { __time__: "2019-07-28T06:57:47.568Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription:
      "2010. Passenger Transport is the largest public transportation company in Samara",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564297066/bulgakov/hekdhfrf3l3npsxzflnw.png",
      public_id: "bulgakov/hekdhfrf3l3npsxzflnw"
    },
    realLink: "https://patsamara.ru/",
    stack: ["HTML", "CSS"],
    staticLink: "/static/pat/",
    title: 'Municipal Corporation "Passenger Transport"',
    url: "pat",
    year: "2000"
  },
  bNuc5h0yemMFXHXFZX0C: {
    addedAt: { __time__: "2018-07-18T15:07:21.893Z" },
    category: "full stack",
    description: "",

    images: [
      {
        caption: "",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531926440/bulgakov/gg0h9q2yvi8rdpjarfzd.png",
        public_id: "bulgakov/gg0h9q2yvi8rdpjarfzd"
      }
    ],
    previewDescription: "E-shop for selling generators ",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531926439/bulgakov/pgmsv39jlhpgg3yunwds.png",
      public_id: "bulgakov/pgmsv39jlhpgg3yunwds"
    },
    realLink: "https://www.ecogen.shop/",
    stack: ["HTML", "SimpleCart.js", "CSS", "PHP"],
    staticLink: "",
    title: "Ecogen generators",
    url: "ecogen",
    visible: true,
    year: "2018"
  },
  cMQcY2BGGou5KTUIitig: {
    addedAt: { __time__: "2019-07-28T14:35:48.126Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324546/bulgakov/cmt2lm7ytpqya9zpn8bs.png",
        public_id: "bulgakov/cmt2lm7ytpqya9zpn8bs"
      },
      {
        caption: "Contacts page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324547/bulgakov/hufh0df0u5ftphxvkrqi.png",
        public_id: "bulgakov/hufh0df0u5ftphxvkrqi"
      }
    ],
    previewDescription: "Internet Provider",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324545/bulgakov/zazk0cehmuzxt0mj9kgj.png",
      public_id: "bulgakov/zazk0cehmuzxt0mj9kgj"
    },
    realLink: "http://global63.ru/",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "",
    title: "Global Telecom",
    url: "global63",
    visible: true,
    year: "2014"
  },
  cnzPOnzB9r3xuTVV3BCw: {
    addedAt: { __time__: "2019-07-28T05:38:38.009Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "Personality training",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564292317/bulgakov/lelvphfado8zoieiybcp.png",
      public_id: "bulgakov/lelvphfado8zoieiybcp"
    },
    realLink: "",
    stack: ["HTML", "CSS"],
    staticLink: "/static/makurin/",
    title: "Anton Makurin",
    url: "makurin",
    year: "2102"
  },
  cuQgqjY3ttrZGB1BDHuo: {
    addedAt: { __time__: "2019-07-26T12:42:04.930Z" },
    category: "full stack",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564145637/bulgakov/hcviq0ttu0sj2cilrmmu.png",
        public_id: "bulgakov/hcviq0ttu0sj2cilrmmu"
      },
      {
        caption: "Catalog",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564145714/bulgakov/cyv06ac0mk7kdwn4yvsg.png",
        public_id: "bulgakov/cyv06ac0mk7kdwn4yvsg"
      }
    ],
    previewDescription: "2007. My first commerce project.",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564145012/bulgakov/k3j4d1aonmkr93wmpjbu.png",
      public_id: "bulgakov/k3j4d1aonmkr93wmpjbu"
    },
    realLink: "http://www.vent-servis.ru/",
    stack: ["PHP", "HTML", "CSS"],
    staticLink: "",
    title: "Vent Service Samara",
    url: "vent-servis",
    year: "2000"
  },
  eIza6VmroYwpLjBe0623: {
    addedAt: { __time__: "2019-07-28T14:41:06.117Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324861/bulgakov/jknu0ird42mkytbwfccg.png",
        public_id: "bulgakov/jknu0ird42mkytbwfccg"
      },
      {
        caption: "Internal page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324862/bulgakov/q3yjcsyefgseywvikghq.png",
        public_id: "bulgakov/q3yjcsyefgseywvikghq"
      }
    ],
    previewDescription:
      "Comprehensive supply of materials and services to advanced electronics manufacturers",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564324856/bulgakov/xq0umznn2ci1k0upnrbr.png",
      public_id: "bulgakov/xq0umznn2ci1k0upnrbr"
    },
    realLink: "https://ostec-materials.ru/",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "",
    title: "Ostec materials",
    url: "ostec-materials",
    visible: true,
    year: "2015"
  },
  jGkt2EhoNu3JII1EcNID: {
    addedAt: { __time__: "2019-07-28T16:20:53.348Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330851/bulgakov/asiof5egoihiq9harddx.png",
        public_id: "bulgakov/asiof5egoihiq9harddx"
      },
      {
        caption: "Product page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330852/bulgakov/ouznjtpouo2qbgtoeq06.png",
        public_id: "bulgakov/ouznjtpouo2qbgtoeq06"
      }
    ],
    previewDescription:
      "Supply of engineering equipment for the assembly of water supply, sewerage and heating systems.",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564330849/bulgakov/ba3rbzldrxaj70e7eoun.png",
      public_id: "bulgakov/ba3rbzldrxaj70e7eoun"
    },
    realLink: "https://www.egoing.ru/",
    stack: ["HTML", "AngularJS", "Less/Sass"],
    staticLink: "",
    title: "Ego Engineering",
    url: "egoing",
    visible: true,
    year: "2014"
  },
  k0HFlrxmpjUMORFwmTgM: {
    addedAt: { __time__: "2019-07-26T13:01:20.496Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2010. Investments and developer company.",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564146220/bulgakov/p8gmnwvbts5uuswebgjo.png",
      public_id: "bulgakov/p8gmnwvbts5uuswebgjo"
    },
    realLink: "",
    stack: ["HTML", "CSS"],
    staticLink: "/static/kvartal/",
    title: "Kvartal",
    url: "kvartal",
    year: "2000"
  },
  lB0g8qp9fgvEexnHBti1: {
    addedAt: { __time__: "2018-05-05T13:27:19.810Z" },
    category: "3D",
    description:
      "The animation was created for site www.castle.co, but was excluded on last changes",

    images: [],
    previewDescription: "Animation of the Earth. Created by Three.JS",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525529126/bulgakov/jjgm80mvlq0ytg4ixhzu.png",
      public_id: "bulgakov/jjgm80mvlq0ytg4ixhzu"
    },
    realLink: "",
    stack: ["Three.js"],
    staticLink: "/static/earth",
    title: "The Earth 3D",
    url: "earth",
    visible: true,
    year: "2016"
  },
  lX0JhdKeFaYYfGH8VGbP: {
    addedAt: { __time__: "2019-07-28T05:01:52.709Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2009. Delivery service ",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564290112/bulgakov/fus1xivbpzptiakoji98.png",
      public_id: "bulgakov/fus1xivbpzptiakoji98"
    },
    realLink: "",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "/static/countrypost/",
    title: "Country Post",
    url: "countrypost",
    year: "2000"
  },
  mUviFeRfzzWwFuQXo1ci: {
    addedAt: { __time__: "2019-07-28T15:11:12.066Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326668/bulgakov/jd1rd99hlpc4emjwfilq.png",
        public_id: "bulgakov/jd1rd99hlpc4emjwfilq"
      },
      {
        caption: "Nursery room",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326669/bulgakov/w99jwcpm8l7gabnwqnaz.png",
        public_id: "bulgakov/w99jwcpm8l7gabnwqnaz"
      },
      {
        caption: "Product page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326670/bulgakov/jpncisltyl1wjmj6afq7.png",
        public_id: "bulgakov/jpncisltyl1wjmj6afq7"
      }
    ],
    previewDescription: "Kids Shoes",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564326667/bulgakov/eyqdjvodcylvifcpzwvb.png",
      public_id: "bulgakov/eyqdjvodcylvifcpzwvb"
    },
    realLink: "http://www.kapika.ru/",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "",
    title: "Kapika",
    url: "kapika",
    visible: true,
    year: "2014"
  },
  nNytYCr0VFdl1Uh9Z1P0: {
    addedAt: { __time__: "2019-07-28T07:14:37.807Z" },
    category: "formatting",
    description: "",

    images: [
      {
        caption: "Main Page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564298070/bulgakov/csyyzlgxmprkb4ymrpwq.png",
        public_id: "bulgakov/csyyzlgxmprkb4ymrpwq"
      },
      {
        caption: "Catalog Item",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564298073/bulgakov/asysmgvbnknvokkek0o5.png",
        public_id: "bulgakov/asysmgvbnknvokkek0o5"
      },
      {
        caption: "Catalog List",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564298077/bulgakov/vtfrm9kdr037nraiztdc.png",
        public_id: "bulgakov/vtfrm9kdr037nraiztdc"
      }
    ],
    previewDescription: "Online store of clothes",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564298240/bulgakov/g1iix35qyqkqfp8jikpx.jpg",
      public_id: "bulgakov/g1iix35qyqkqfp8jikpx"
    },
    realLink: "http://maroli.ru/",
    stack: ["HTML", "CSS", "JS", "SimpleCartJS"],
    staticLink: "",
    title: "Maroli",
    url: "maroli",
    year: "2102"
  },
  r0reRnF9v2nsA7zq6wah: {
    addedAt: { __time__: "2018-07-18T15:03:50.128Z" },
    category: "full stack",
    description: "",

    images: [
      {
        caption: "",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531926228/bulgakov/qm2fvx3heluqwzhsqhkg.png",
        public_id: "bulgakov/qm2fvx3heluqwzhsqhkg"
      }
    ],
    previewDescription: "Online store for selling mixers ",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1531926228/bulgakov/ydqpzt5oyfatoslge7hz.png",
      public_id: "bulgakov/ydqpzt5oyfatoslge7hz"
    },
    realLink: "https://www.helper-mixer.com/",
    stack: ["HTML", "CSS", "SimpleCart.js", "PHP"],
    staticLink: "",
    title: "Helper mixers",
    url: "helper-mixer",
    visible: true,
    year: "2018"
  },
  s8wnFuXLgbMzd7PUlwUR: {
    addedAt: { __time__: "2018-05-05T14:56:51.475Z" },
    category: "3D",
    description: "I had a free time and I had decided to create something cool.",
    stack: ["Three.js"],
    images: [],
    previewDescription: "Demo for site castle.co Created by Three.js",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525532208/bulgakov/ywf1h8q3nbhoktl7efoq.png",
      public_id: "bulgakov/ywf1h8q3nbhoktl7efoq"
    },
    realLink: "",
    staticLink: "/static/demo-castle/",
    title: "Demo 3D",
    url: "demo-castle",
    visible: true,
    year: "2015"
  },
  tEYT5p6oAzF9aaHL55j6: {
    addedAt: { __time__: "2019-07-28T07:08:20.120Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2010. Delivery company",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564297699/bulgakov/z7vxwfjdoex9cfcbkqmr.png",
      public_id: "bulgakov/z7vxwfjdoex9cfcbkqmr"
    },
    realLink: "",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "/static/terasale/",
    title: "TeraSale",
    url: "terasale",
    visible: true,
    year: "2000"
  },
  wmhnPwO3zEO3cFaHW4sB: {
    addedAt: { __time__: "2019-07-28T05:41:16.087Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "Collection of music for wedding ",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564292541/bulgakov/cudqhzzlpbio0pt2bzay.png",
      public_id: "bulgakov/cudqhzzlpbio0pt2bzay"
    },
    realLink: "",
    stack: ["HTML", "CSS", "JS"],
    staticLink: "/static/nevesta-fm/",
    title: "Nevesta FM",
    url: "nevesta-fm",
    visible: true,
    year: "2014"
  },
  xFRwzdhZLQdHP2to5trs: {
    addedAt: { __time__: "2019-07-28T04:55:34.529Z" },
    category: "formatting",
    description: "",

    images: [],
    previewDescription: "2009. Coffee retailer company",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1564289805/bulgakov/yyp37smms9qiaeqhtk7x.png",
      public_id: "bulgakov/yyp37smms9qiaeqhtk7x"
    },
    realLink: "",
    stack: ["HTML", "CSS", "jQuery"],
    staticLink: "/static/coffeeclub/",
    title: "Coffee Club",
    url: "coffeeclub",
    year: "2000"
  },
  xh7BC72Jak0nVjt1V9i4: {
    addedAt: { __time__: "2018-05-05T14:42:10.547Z" },
    category: "full stack",
    description: "",
    stack: ["HTML", "CSS", "JS", "RoR", "BigCommerce"],
    images: [
      {
        caption: "Home page",
        preview:
          "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525531327/bulgakov/ltzrpbjnqy6q0d827fw8.png",
        public_id: "bulgakov/ltzrpbjnqy6q0d827fw8"
      }
    ],
    previewDescription: "Full stack development for e-shop Tracks N Teeth",
    previewImage: {
      preview:
        "https://res.cloudinary.com/dwjzxeiqm/image/upload/v1525531326/bulgakov/ogbz60pjmnmqnoaqt4x1.png",
      public_id: "bulgakov/ogbz60pjmnmqnoaqt4x1"
    },
    realLink: "https://www.tracksnteeth.com/",
    staticLink: "",
    title: "Tracks N Teeth",
    url: "tracksnteeth",
    visible: true,
    year: "2018"
  }
};
