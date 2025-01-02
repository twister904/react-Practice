const Book = (props) => {
  // console.log(props);
  const { title, author, img, number } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>#{number + 1}</span>
      {/* {children} This is used to render the children */}
      {/* {<p>{let x=6}</p>} */}{" "}
      {/* This will throw an error because this is a statement */}
      {/* <p>{props.number}</p> This will work becuase its a expression */}
    </article>
  );
};

export default Book;
