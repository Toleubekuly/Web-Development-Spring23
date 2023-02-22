export interface Product {
    id: number;
    name: string;
    price: number;
  
    img: string;
    description: string;
    src: string;
    rating: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Apple Watch Series 8 45 мм Aluminum черный',
      price: 231500,
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
      description: 'поддержка платформ: iOS;' +
          'материал корпуса: алюминий;' +
          'цвет корпуса: черный;' +
          'технология экрана: OLED;' +
          'объем встроенной памяти: 32 Гб;'+
          'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
      src: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
      rating: 6
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм',
      price: 95699 ,
      img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hef/hf5/62047597527070/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
      description: 'поддержка платформ: Android;' +
          'материал корпуса: алюминий;' +
          'цвет корпуса: черный;' +
          'интерфейсы: Bluetooth, ,NFC;' +
          'объем встроенной памяти: 32 Гб;',
      src: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
      rating: 5
    },
    {
      id: 3,
      name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum золотистый',
      price: 232990 ,
      img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4a/h70/63158668361758/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-1.jpg',
      description: 'поддержка платформ: iOS;' +
      'материал корпуса: алюминий;' +
      'цвет корпуса: черный;' +
      'технология экрана: OLED;' +
      'объем встроенной памяти: 32 Гб;'+
      'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
      src: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000',
      rating: 5
    },
    {
      id: 4,
      name: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
      price: 31700,
      img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/hbc/47874442493982/smart-casy-xiaomi-redmi-watch-2-lite-gl-black-103246651-1.jpg',
      description: 'поддержка платформ: Android, ,iOS;' +
      'материал корпуса: пластик;' +
      'цвет корпуса: черный;' +
      'технология экрана: TFT;' +
      'интерфейсы: Bluetooth;',
      src: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
      rating: 2
    },
    {
      id: 5,
      name: 'Смарт-часы Aimoto Element розовый',
      price: 10442,
      img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h52/h9f/33034413342750/aimoto-element-pink-100828444-1-Container.jpg',
      description: 'поддержка платформ: Android, ,iOS;' +
      'материал корпуса: пластик;' +
      'цвет корпуса: розовый' +
      'технология экрана: IPS;' +
      'интерфейсы: Bluetooth;',
      src: 'https://kaspi.kz/shop/p/aimoto-element-rozovyi-100828444/?c=750000000#!/item',
      rating: 1
    },
    {
      id: 6,
      name: 'Смарт-часы Apple Watch Ultra Ocean серый-синий',
      price: 447496,
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf5/62855861043230/apple-watch-ultra-midnight-ocean-seryj-sinij-106667098-1.jpg',
      description: 'поддержка платформ: Android, ,iOS;' +
      'материал корпуса: титан;' +
      'цвет корпуса: светло-серый;' +
      'технология экрана: OLED;' +
      'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
      src: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/?c=750000000#!/item',
      rating: 9
    },
    {
      id: 7,
      name: 'Смарт-часы Apple Watch Series 8 41 мм Aluminum серебристый',
      price: 222900,
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/he0/63158947086366/apple-watch-series-8-41-mm-aluminum-serebristyj-belyj-106618335-1.jpg',
      description: 'поддержка платформ: iOS;' +
          'материал корпуса: алюминий;' +
          'цвет корпуса: черный;' +
          'технология экрана: OLED;' +
          'объем встроенной памяти: 32 Гб;'+
          'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
      src: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-serebristyi-belyi-106618335/?c=750000000#!/item',
      rating: 3
    },
    {
      id: 8,
      name: 'Смарт-часы Apple Watch SE 40 мм золотистый',
      price: 157170,
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/hb4/46719484788766/apple-watch-se-40-mm-zolotistyj-bezevyj-102667872-1.jpg',
      description: 'поддержка платформ: iOS;' +
      'материал корпуса: алюминий;' +
      'цвет корпуса: черный;' +
      'технология экрана: OLED;' +
      'объем встроенной памяти: 32 Гб;'+
      'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
      src: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-zolotistyi-102667872/?c=750000000#!/item',
      rating: 1
    },
    {
    id: 9,
    name: 'Смарт-часы Apple Watch Series 8 41 мм Aluminum серебристый',
    price: 222900,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/he0/63158947086366/apple-watch-series-8-41-mm-aluminum-serebristyj-belyj-106618335-1.jpg',
    description: 'поддержка платформ: iOS;' +
        'материал корпуса: алюминий;' +
        'цвет корпуса: черный;' +
        'технология экрана: OLED;' +
        'объем встроенной памяти: 32 Гб;'+
        'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;',
    src: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-serebristyi-belyi-106618335/?c=750000000#!/item',
    rating: 3
  },
  {
    id: 10,
    name: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
    price: 31700,
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/hbc/47874442493982/smart-casy-xiaomi-redmi-watch-2-lite-gl-black-103246651-1.jpg',
    description: 'поддержка платформ: Android, ,iOS;' +
    'материал корпуса: пластик;' +
    'цвет корпуса: черный;' +
    'технология экрана: TFT;' +
    'интерфейсы: Bluetooth;',
    src: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
    rating: 2
  },
  ];
  