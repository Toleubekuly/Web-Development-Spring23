import {Categories, Category} from "./categories";
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  category: Category;

  images: object;

  prodLink: string;

  rating: number;
  likes: number;

  putLike: boolean;
}

export const productsList= [
  {
    id: 1,
    name: 'Phone 14',
    price: 999,
    description: 'A large phone with one of the best screens',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    rating: 2.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]

  },
  {
    id: 2,
    name: 'Phone 12 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/hcf/33281467514910/apple-iphone-12-mini-128gb-sinij-100657856-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-12-mini-128gb-sinii-100657856/?c=750000000#!/item",
    rating: 3.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 3,
    name: 'Phone 11 Slim Box',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb4/33208264228894/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },

  {
    id: 4,
    name: 'Phone 14 pink',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },


  {
    id: 5,
    name: 'Phone 14 Pro Max',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },

  {
    id: 6,
    name: 'Phone 14 Pro Max',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h5d/63073981693982/apple-iphone-14-pro-max-128gb-zolotistyj-106363302-1.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-zolotistyi-106363302/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 7,
    name: 'Phone 13',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    rating: 2.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 8,
    name: 'Phone 13 green',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h7b/49319164641310/apple-iphone-13-128gb-zelenyj-104078887-1.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 9,
    name: 'Phone 13 blue',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h97/63073056096286/apple-iphone-14-128gb-goluboj-106363155-1.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 10,
    name: 'Phone 13 Mini',
    price: 799,
    description: 'White phone',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/hdf/46392723800094/apple-iphone-13-mini-128gb-belyj-102298521-1-Container.jpg'],
    prodLink: "https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-belyi-102298521/?c=750000000#!/item",
    rating: 4.5,
    likes: 0,
    putLike: false ,
    category: Categories[1]
  },
  {
    id: 11,
    name: 'Yasin LED-32E7000',
    price: 400,
    description: 'Korean Phone',
    category: Categories[2],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg']
  },
  {
    id: 12,
    name: 'Xiaomi MI TV',
    price: 600,
    description: 'TV',
    category: Categories[2],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h5b/49320428371998/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg']
  },
  {
    id: 13,
    name: 'DEXP TV',
    price: 50000,
    description: 'Big screen',
    category: Categories[2],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/dexp-h32h8000q-chernyi-108526272/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg']
  },
  {
    id: 14,
    name: 'DEXP TV H32H8000Q',
    price: 6000,
    description: 'LED TV',
    category: Categories[2],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h54/68081499373598/dexp-h32h8000q-chernyi-108526272-1.jpg']
  },
  {
    id: 15,
    name: 'LG 43LM5772PLA',
    price: 3000,
    description: 'Liquid screen',
    category: Categories[2],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg']
  },
  {
    id: 16,
    name: 'Samsung Refrigerator',
    price: 360,
    description: 'Samsumg Fridge',
    category: Categories[0],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/samsung-rb33a32n0sa-serebristyi-101198416/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hae/51370653515806/samsung-rb33a32n0sa-serebristyj-101198416-1-Container.jpg']
  },
  {
    id: 17,
    name: 'DAUSCHER DRF Refrigerator',
    price: 600,
    description: 'Friedge',
    category: Categories[0],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/dauscher-drf-090dfbl-retro-chernyi-102061186/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h6a/50318377386014/dauscher-drf-090dfbl-retro-cernyj-102061186-1-Container.jpg']
  },
  {
    id: 18,
    name: 'Karcher VC 3 Vacuum Cleaner',
    price: 50000,
    description: '700 WT Power',
    category: Categories[0],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h21/31633788436510/karcher-vc-3-premium-belyj-3700709-1-Container.jpg']
  },
  {
    id: 19,
    name: 'Deerma Vacuum Cleaner',
    price: 6000,
    description: 'White color',
    category: Categories[0],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/deerma-dx118c-belyi-100825416/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/hab/62173034643486/deerma-dx118c-belyi-100825416-1.jpg']
  },
  {
    id: 20,
    name: 'DAUSCHER Vacuum Cleaner',
    price: 2000,
    description: '650 WT Power',
    category: Categories[0],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/dauscher-dvc-2750tr-chernyi-3701388/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h33/49333407940638/dauscher-dvc-2750tr-cernyj-3701388-1-Container.jpg']
  },
  {
    id: 21,
    name: 'MEDI-PEEL Hyaluron',
    price: 20,
    description: 'Cica Peptide',
    category: Categories[3],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/medi-peel-gidrogelevye-hyaluron-cica-peptide-9-dlja-glaz-60-sht-100378895/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h45/32582827048990/medi-peel-hyaluron-cica-peptide-9-ampoule-eye-patch-60-st-100378895-1-Container.jpg']
  },
  {
    id: 22,
    name: 'Pyunkang Yul Spot Patch ',
    price: 600,
    description: 'Anti Acne',
    category: Categories[3],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/pyunkang-yul-tochechnye-spot-patch-dlja-litsa-15-sht-100850969/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/hcf/33571315613726/pyunkang-yul-spot-patch-100850969-1-Container.jpg']
  },
  {
    id: 23,
    name: 'AHA/BHA Clarifying Treatment',
    price: 50000,
    description: 'For All Skin Types',
    category: Categories[3],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/cosrx-aha-bha-clarifying-treatment-toner-toner-150-ml-100379050/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h23/32578106327070/cosrx-aha-bha-clarifying-treatment-toner-150-ml-100379050-1-Container.jpg']
  },
  {
    id: 24,
    name: 'The Ordinary Glycolic Tonic',
    price: 6000,
    description: 'Acid 7% Toning Solution',
    category: Categories[3],
    rating: 4,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/the-ordinary-glycolic-acid-7-toning-solution-toner-240-ml-100703558/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h18/33207968661534/the-ordinary-glycolic-acid-7-toning-solution-240-ml-100703558-1-Container.jpg']
  },
  {
    id: 25,
    name: 'MEDI-PEEL Aqua',
    price: 2000,
    description: 'Essence Peptide',
    category: Categories[3],
    rating: 5,
    likes: 0,
    putLike: false ,
    prodLink: 'https://kaspi.kz/shop/p/medi-peel-aqua-essence-peptide-9-toner-250-ml-100382219/?c=750000000#!/item',
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbe/31739954495518/medi-peel-peptide-9-aqua-essence-toner-250-ml-100382219-1-Container.jpg']
  },






];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/