const INITIAL_STATE = {
    sections: [
      {
        title: 'care products',
        imageUrl: '/img/menu/care-products.jpg',
        id: 1,
        linkUrl: 'shop/hats',
        firstItem: 'Oils',
        secondItem: 'Skin Products',
        thirdItem: 'Hair Products'
      },
      {
        title: 'clothing',
        imageUrl: '/img/menu/clothing.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'books',
        imageUrl: '/img/menu/books.jpg',
         id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'women perfumes',
        imageUrl: '/img/menu/men-perfumes.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'men perfumes',
        imageUrl: '/img/menu/women-perfumes.jpg',
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