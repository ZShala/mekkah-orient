const INITIAL_STATE = {
    sections: [
      {
        title: 'care products',
        imageUrl: 'https://img.freepik.com/free-photo/white-beauty-cream-with-liquid-oil-drop-cosmetic-white-background-include-clipping-path_36845-263.jpg?size=626&ext=jpg&ga=GA1.2.1431962152.1609286400',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'clothing',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1U7_DcRGw3KVjSZFDq6xWEpXah.jpg?width=800&height=800&hash=1600',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'books',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0014/0964/6664/products/22A9740_530x@2x.jpg?v=1539722010',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'women perfumes',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/34/92/75/360_F_234927522_Ej2COntDR8MjCSUJGFHm6qdLpn2Qxqe1.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'men perfumes',
        imageUrl: 'https://www.theperfumeshop.com/blog/wp-content/uploads/2019/05/iStock-955693614.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;