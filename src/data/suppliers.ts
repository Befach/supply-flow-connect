export interface Supplier {
  id: string;
  name: string;
  description: string;
  categories: string[];
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  rating: number;
  verified: boolean;
}

export const suppliers: Supplier[] = [
  {
    id: "1",
    name: "Global Tech Solutions",
    description: "Leading supplier of electronic components and technology solutions worldwide.",
    categories: ["Electronics", "Technology", "Components"],
    location: "Shenzhen, China",
    contact: {
      email: "contact@globaltechsolutions.com",
      phone: "+86-755-1234567"
    },
    rating: 4.8,
    verified: true
  },
  {
    id: "2",
    name: "Textile Masters Inc",
    description: "Premium quality textiles and fabrics for fashion and industrial applications.",
    categories: ["Textiles", "Fashion", "Industrial"],
    location: "Mumbai, India",
    contact: {
      email: "info@textilemasters.com",
      phone: "+91-22-9876543"
    },
    rating: 4.6,
    verified: true
  },
  {
    id: "3",
    name: "Agricultural Export Co",
    description: "Fresh produce and agricultural products from certified organic farms.",
    categories: ["Agriculture", "Food", "Organic"],
    location: "Valencia, Spain",
    contact: {
      email: "exports@agriexport.es",
      phone: "+34-96-1234567"
    },
    rating: 4.7,
    verified: true
  },
  {
    id: "4",
    name: "Zhenjiang Chenhui Electronic Technology",
    description: "This is a Volza company and I got its info from alibaba",
    categories: ["Electronics", "Technology"],
    location: "Zhenjiang, China",
    contact: {
      email: "info@chenhui-en.alibaba.com",
      phone: "861338812350"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "5",
    name: "Taizhou Order Import export Co Ltd",
    description: "This is a Volza company its info were found in alibaba",
    categories: ["Electronics", "Export"],
    location: "Zhenjiang, China",
    contact: {
      email: "sales2@cropjetsprayer.com",
      phone: "+86 13656891521"
    },
    rating: 4.1,
    verified: false
  },
  {
    id: "6",
    name: "Qinhuangdao Mailang Technology Co Ltd",
    description: "This is a Volza company and we contacted this on whatsapp",
    categories: ["Technology", "Electronics"],
    location: "Qinhuang Hebei, China",
    contact: {
      email: "jack@matellon.com",
      phone: "+86 188 3350 0632"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "7",
    name: "Taizhou Domiro Agricultural Machinery",
    description: "This is a Volza company and its info were found from whtsapp",
    categories: ["Agriculture", "Machinery"],
    location: "China",
    contact: {
      email: "info@domiro.com",
      phone: "+86 13857638376"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "8",
    name: "STARCHARGE ENERGY PTE LTD",
    description: "This is a Volza company and we contacted them in alibaba catalogue on the website",
    categories: ["Energy", "Technology"],
    location: "China",
    contact: {
      email: "info@starcharge.com",
      phone: "N/A"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "9",
    name: "HUIZHOU SUPERPOWER TECH CO LTD",
    description: "this is a Volza company and its info were found in alibaba",
    categories: ["Technology", "Power"],
    location: "Guangdor Huizhou, China",
    contact: {
      email: "info@superpower.com",
      phone: "N/A"
    },
    rating: 4.1,
    verified: false
  },
  {
    id: "10",
    name: "FENGXIAN CHANGQING NEW ENERGY C",
    description: "This is a Volza company and it's info were found in alibaba",
    categories: ["Energy", "Technology"],
    location: "Jiangsu Province, China",
    contact: {
      email: "info@changqing.com",
      phone: "85251405164"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "11",
    name: "SHENZHEN YINGLE TECHNOLOGY CO LTD",
    description: "This is a Volza company and we contacted them in whatsapp",
    categories: ["Technology", "Electronics"],
    location: "China",
    contact: {
      email: "john@yinglitech.com",
      phone: "+86 134105126"
    },
    rating: 4.4,
    verified: true
  },
  {
    id: "12",
    name: "Ultra Power Technology Limited",
    description: "This is a Volza company and we contacted them in alibaba",
    categories: ["Technology", "Power"],
    location: "China",
    contact: {
      email: "info@ultrapower.hk",
      phone: "-13713933009"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "13",
    name: "INGCO TOOLS CO LTD",
    description: "It's a Volza company and we contacted them in WhatsApp",
    categories: ["Tools", "Manufacturing"],
    location: "China",
    contact: {
      email: "ingcomarketing@gmail.com",
      phone: "861806192565l"
    },
    rating: 4.5,
    verified: true
  },
  {
    id: "14",
    name: "SHANGHAI SPRING INTERNATIONAL INC",
    description: "this is a company and we contacted them on whatsapp",
    categories: ["Manufacturing", "International Trade"],
    location: "Shanghai Jiading, China",
    contact: {
      email: "rossin@shanghaispring.com",
      phone: "-19728460420"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "15",
    name: "QINGDAO MCGRAW TECHNOLOGY",
    description: "This is a Volza company and we contacted with them in whatsapp",
    categories: ["Technology", "Manufacturing"],
    location: "Huangdao, China",
    contact: {
      email: "lynn.li@autmation@nd-mcgraw.sulademo.com",
      phone: "+86 199 4175 6632"
    },
    rating: 4.1,
    verified: true
  },
  {
    id: "16",
    name: "MAC INTERNATIONAL CO LTD",
    description: "This is a Volza company we've contacted them on alibaba",
    categories: ["International Trade", "Manufacturing"],
    location: "China",
    contact: {
      email: "info@mac-international.com",
      phone: "+86 13501639517"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "17",
    name: "WUXI TENGHUI ELECTRIC VEHICLES CO LTD",
    description: "This is Volza company and we've contacted with them in alibaba",
    categories: ["Electric Vehicles", "Manufacturing"],
    location: "China",
    contact: {
      email: "info@tenghui-ev.com",
      phone: "+86 13857638376"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "18",
    name: "HUIZHOU SUPERPOWER TECH CO LTD",
    description: "this is a Volza company and its info were found in alibaba",
    categories: ["Technology", "Power"],
    location: "Guangdong Huizhou, China",
    contact: {
      email: "info@superpowertech.com",
      phone: "+86 13597236402"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "19",
    name: "FENGXIAN CHANGQING NEW ENERGY CO LTD",
    description: "This is a Volza company",
    categories: ["Energy", "Technology"],
    location: "Jiangsu, China",
    contact: {
      email: "info@changqing.com",
      phone: "85251405164"
    },
    rating: 4.1,
    verified: false
  },
  {
    id: "20",
    name: "SHENZHEN YINGLE TECHNOLOGY CO LTD",
    description: "This is a Volza company",
    categories: ["Technology", "Electronics"],
    location: "China",
    contact: {
      email: "john@yinglitech.com",
      phone: "+86 13410015126"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "21",
    name: "INGCO TOOLS CO LTD",
    description: "It's a Volza company and we contacted them in WhatsApp",
    categories: ["Tools", "Manufacturing"],
    location: "China",
    contact: {
      email: "ingcomarketing@gmail.com",
      phone: "861806192565"
    },
    rating: 4.5,
    verified: true
  },
  {
    id: "22",
    name: "SHANGHAI SPRING INTERNATIONAL INDUSTRIAL CO LTD",
    description: "this is a Volza company",
    categories: ["Manufacturing", "International Trade"],
    location: "Shanghai Jiading, China",
    contact: {
      email: "rossin@shanghaispring.com",
      phone: "+86 19728460420"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "23",
    name: "QINGDAO MCGRAW TECHNOLOGY",
    description: "This is a Volza company and we contacted with them in whatsapp",
    categories: ["Technology", "Manufacturing"],
    location: "Qingdao Huangdao, China",
    contact: {
      email: "lynn.li@automation.nd-mcgraw.com",
      phone: "+86 199 4175 6632"
    },
    rating: 4.1,
    verified: true
  },
  {
    id: "24",
    name: "MAC INTERNATIONAL CO LTD",
    description: "This is a Volza company we've contacted them on alibaba",
    categories: ["International Trade", "Manufacturing"],
    location: "China",
    contact: {
      email: "info@mac-international.com",
      phone: "+86 19850169957"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "25",
    name: "WUXI TENGHUI ELECTRIC VEHICLES CO LTD",
    description: "This is Volza company and we've contacted with them in alibaba",
    categories: ["Electric Vehicles", "Manufacturing"],
    location: "China",
    contact: {
      email: "info@tenghui-ev.com",
      phone: "+86 15365227475"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "26",
    name: "ULTRA POWER TECHNOLOGY LTD",
    description: "This is a Volza company",
    categories: ["Technology", "Power"],
    location: "China",
    contact: {
      email: "info@ultrapower.hk",
      phone: "861371393095"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "27",
    name: "Shenzhen Feiteng Chuangyue Technology",
    description: "This is a Volza company",
    categories: ["Technology", "Electronics"],
    location: "Bantian International Center, China",
    contact: {
      email: "info@feiteng.com",
      phone: "+86 15580791994"
    },
    rating: 4.1,
    verified: false
  },
  {
    id: "28",
    name: "SHANGHAI SPRING INTERNATIONAL INDUSTRIAL CO LTD",
    description: "Shenzhen manufacturing company",
    categories: ["Manufacturing", "International Trade"],
    location: "Shajing Street, China",
    contact: {
      email: "springlau@szshengyj.net",
      phone: "+86 13923785747"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "29",
    name: "Shenzhen Hongchen Technology Co.",
    description: "Manufacturer specializing in high-tech products",
    categories: ["Technology", "Manufacturing"],
    location: "Guangzhou, China",
    contact: {
      email: "info@hongchen.com",
      phone: "+86 15814627547"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "30",
    name: "Henan Able Pack Co.",
    description: "Manufacturing consumer goods",
    categories: ["Manufacturing", "Packaging"],
    location: "China",
    contact: {
      email: "info@ablepack.co",
      phone: "+86 17051332550"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "31",
    name: "WST (Shenzhen Wanshuntong Science And Technology Co.)",
    description: "high-tech manufacturer specializing in consumer electronics",
    categories: ["Technology", "Electronics"],
    location: "Luopu Street, Guangzhou, China",
    contact: {
      email: "info@wst.com",
      phone: "86-20-37757841"
    },
    rating: 4.1,
    verified: false
  },
  {
    id: "32",
    name: "Shenzhen Linx Technology Co., Ltd.",
    description: "manufacturer of headphones and earphones",
    categories: ["Electronics", "Audio"],
    location: "Guanghu Street, Shenzhen, Guangdong, China",
    contact: {
      email: "info@linx.com",
      phone: "86 75561475089"
    },
    rating: 4.0,
    verified: false
  },
  {
    id: "33",
    name: "Shenzhen XRJN Technology Co., Ltd.",
    description: "Manufacturing consumer electronics",
    categories: ["Electronics", "Technology"],
    location: "3rd Floor, No.1 Building, Huizhou, Guangdong, China",
    contact: {
      email: "info@xrjn.com",
      phone: "86-752-28679779"
    },
    rating: 4.2,
    verified: false
  },
  {
    id: "34",
    name: "Guangzhou Skyfun Technology Co",
    description: "virtual reality (VR) arcade games and manufacturing portable gaming devices",
    categories: ["Technology", "Gaming", "Electronics"],
    location: "No.9, Bangliang East Road, Guangzhou City, China",
    contact: {
      email: "sunnyzhang@skyfungar.com",
      phone: "+86 18127818571"
    },
    rating: 4.3,
    verified: true
  },
  {
    id: "35",
    name: "Shenzhen Gaiying Industry Co., Ltd.",
    description: "manufacturing portable gaming devices",
    categories: ["Electronics", "Gaming"],
    location: "China",
    contact: {
      email: "info@gaiying.com",
      phone: "86-13554973252"
    },
    rating: 4.0,
    verified: false
  }
];
