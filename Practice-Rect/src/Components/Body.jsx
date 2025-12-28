const styleObj = {
  backgroundColor: "yellow",
  color: "Blue",
};

const Body = () => {
  return (
    <>
      <div style={styleObj}>
        <h1 style={{ color: "purple", backgroundColor: "pink" }}>
          {" "}
          This is the Body{" "}
        </h1>
        ;
      </div>
    </>
  );
};

export default Body;
