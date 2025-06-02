
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
  }
];
