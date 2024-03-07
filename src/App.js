const App = () => {
  const categories = [
    {
      id: 1,
      title: "Mens",
      ImageUrl: "/",
    },
    {
      id: 2,
      title: "Womens",
      ImageUrl: "/",
    },
    {
      id: 3,
      title: "Jackets",
      ImageUrl: "/",
    },
    {
      id: 4,
      title: "Sneakers",
      ImageUrl: "/",
    },
    {
      id: 5,
      title: "Hats",
      ImageUrl: "/",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category-container">
            <img src={category.ImageUrl} alt="category-image" />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
