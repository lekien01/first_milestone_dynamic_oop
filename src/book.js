const Book = (props) => {
  const { img, title, author } = props;

  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  );
};

export default Book;
