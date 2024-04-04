import { useState, useEffect } from "react";

const AllDogs = () => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [finalPics, setFinalPics] = useState([]);

  useEffect(() => {
    const handleLoadPics = async () => {
      const picsArray = await Promise.all(
        allBreeds.map(async (breed) => {
          const img = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random/1`
          );
          const pic = await img.json();
          const truePic = Object.values(pic.message);
          return truePic[0];
        })
      );

      setFinalPics(
        picsArray.map((url, index) => (
          <div className="allBreeds-flex">
            <br />
            <span className="breed-title">
              <strong>{allBreeds[index]}</strong>
            </span>
            {/* <br /> */}
            <img key={`${index}`} src={`${url}`} alt={`Dog ${index + 1}`} />
            <br />
            <hr />
          </div>
        ))
      );
    };

    if (allBreeds.length > 0) {
      handleLoadPics();
    }
  }, [allBreeds]);

  const handleLoadBreeds = async (e) => {
    e.preventDefault();

    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    const breedList = Object.keys(data.message);
    setAllBreeds(breedList);
  };

  return (
    <>
      <div className="all-breeds-btn">
        <button onClick={handleLoadBreeds}>All Breeds</button>
      </div>
      <hr />
      <br />
      <div>{finalPics}</div>
    </>
  );
};

export default AllDogs;
