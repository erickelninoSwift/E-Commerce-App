const App = () => {
  const categories = [
    {
      title: "Mens",
      ImageUrl: "/",
    },
    {
      title: "Womens",
      ImageUrl: "/",
    },
    {
      title: "Sneakers",
      ImageUrl: "/",
    },
    {
      title: "Watches",
      ImageUrl: "/",
    },
    {
      title: "Jackets",
      ImageUrl: "/",
    },
  ];
  return (
    <div className="categories-container">
      <div className="category-container">
        <img src="" alt="category-image" />
        <div className="category-body-container">
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
