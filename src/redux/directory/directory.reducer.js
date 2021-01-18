const INITIAL_STATE = {
    sections: [
      {
        title: 'care products',
        // imageUrl: 'https://img.freepik.com/free-photo/white-beauty-cream-with-liquid-oil-drop-cosmetic-white-background-include-clipping-path_36845-263.jpg?size=626&ext=jpg&ga=GA1.2.1431962152.1609286400',
        imageUrl: 'careProducts',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'scarfs',
        imageUrl: 'scarfs',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'books',
        imageUrl: 'books',
         id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'women perfumes',
        imageUrl: 'womenPerfumes',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'men perfumes',
        imageUrl: 'menPerfumes',
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