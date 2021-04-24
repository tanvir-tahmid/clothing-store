const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brim',
        imageUrl: 'https://images.unsplash.com/photo-1593733926350-c6b1efd6e4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Sky Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1579413078884-2aa365707859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        price: 18
      },
      {
        id: 3,
        name: 'Cowboy',
        imageUrl: 'https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'Ash Brim',
        imageUrl: 'https://images.unsplash.com/photo-1580623128446-7c680ca4cd2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 25
      },
      {
        id: 5,
        name: 'Tree Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 18
      },
      {
        id: 6,
        name: 'Tree Hat',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Black Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.pnghttps://images.unsplash.com/photo-1602751184834-947bd06e8710?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 8,
        name: 'Wolf Hat',
        imageUrl: 'https://images.unsplash.com/photo-1618757850520-6e3e48d07746?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 14
      },
      {
        id: 9,
        name: 'Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1584558620159-e749f0b19e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1604612570084-f0f35379ed71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1601060911361-e2c490fab138?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 165
      },
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Tanktop',
        imageUrl: 'https://images.unsplash.com/photo-1593314731059-d6eb89748e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
        price: 25
      },
      {
        id: 24,
        name: 'Blouse',
        imageUrl: 'https://images.unsplash.com/photo-1577922087876-3563c607db32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://images.unsplash.com/photo-1507945146573-b204a9bf954f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://images.unsplash.com/photo-1564062392647-8b25be7ded12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 80
      },
      {
        id: 27,
        name: 'Sweater',
        imageUrl: 'https://images.unsplash.com/photo-1485230977869-27a4eaf8c0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 45
      },
      {
        id: 28,
        name: 'Track Suit',
        imageUrl: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://images.unsplash.com/photo-1542470312737-5c01a418b057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Red T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1602478167721-0a44b24c639d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 20
      },
      {
        id: 32,
        name: 'Longsleeve',
        imageUrl: 'https://images.unsplash.com/photo-1509989730510-8c4c728ea46c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 25
      },
      {
        id: 33,
        name: 'Black T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeves',
        imageUrl: 'https://images.unsplash.com/photo-1519266277740-7fdb3202f35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        price: 40
      },
      {
        id: 35,
        name: 'White T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
