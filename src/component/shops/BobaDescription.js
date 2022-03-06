import { useState, useEffect } from "react";

function BobaDescription(props) {
  const [description, setDescription] = useState(props.description);
  const [isTooLong, setIsTooLong] = useState(false);
  const [lessDescription, setLessDescription] = useState(true);
  function moreHandler() {
    setLessDescription(false);
    setDescription(props.description);
  }
  function lessHandler() {
    setDescription(description.slice(0, 295).concat("..."));
    setLessDescription(true);
  }
  useEffect(() => {
    if (description.length > 295) {
      setIsTooLong(true);
      setDescription(description.slice(0, 295).concat("..."));
    } else return;
  }, []);

  return (
    <div>
      <p>&ldquo;{description}&rdquo;</p>
      {isTooLong ? (
        lessDescription ? (
          <button onClick={moreHandler}>more</button>
        ) : (
          <button onClick={lessHandler}>less</button>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default BobaDescription;
