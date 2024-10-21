const Button = () => {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return (
    <div>
      <div>
        <lable for="inputImage">Image Link</lable>
        <input id="inputImage" name="img" placeholder="Image Link" />
      </div>
      <div>
        <lable for="inputTitle">Book Title</lable>
        <input id="inputTitle" name="title" placeholder="Title of the Book" />
      </div>
      <div>
        <lable for="inputAuthor">Author Name</lable>
        <input
          id="inputAuthor"
          name="author"
          placeholder="Name of the Author"
        />
      </div>
      <button onClick={handleClick}>Add Book</button>
    </div>
  );
};

export default Button;
