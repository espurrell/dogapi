import { useState } from "react";
import { FcPicture } from "react-icons/fc";
import { PiDogBold } from "react-icons/pi";

const MainApp = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [numberOfPictures, setNumberOfPictures] = useState("");
  const [pictures, setPictures] = useState([]);

  const handleLoadBreeds = (e) => {
    e.preventDefault();
    // console.log("Load breeds button clicked");
    const fetchData = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      const breedList = Object.keys(data.message);
      setBreeds(breedList);
      // breedList is an array of just breed names
      // console.log(breedList);
    };
    fetchData();
  };

  const handleLoadPics = async (e) => {
    e.preventDefault();
    // funtion to load specified number of pics of the selected breed

    // const pics = document.getElementById("pics");
    // setNumberOfPictures(pics.value);
    // console.log(numberOfPictures);

    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numberOfPictures}`
      );

      if (numberOfPictures > 100) {
        alert("Too many pictures");
      } else {
        const data = await res.json();
        setPictures(data.message);
      }
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }
  };

  return (
    <div>
      <form className="form-class">
        <div className="breed-line">
          <PiDogBold className="other-icons" />
          <select
            name="breed-selector"
            id="breed-selector"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="" disabled>
              Select a Breed
            </option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <button type="submit" onClick={handleLoadBreeds}>
            Load the Breeds
          </button>
        </div>
        <br />
        <div className="pic-line">
          <FcPicture className="other-icons" />
          <input
            id="pics"
            type="text"
            value={numberOfPictures}
            placeholder="# of pictures"
            onChange={(e) => setNumberOfPictures(e.target.value)}
          />
          <button type="button" onClick={handleLoadPics}>
            Load Pictures
          </button>
        </div>
      </form>{" "}
      <br />
      <hr />
      <br />
      <div className="img-div">
        {pictures.map((url, index) => (
          <img key={index} src={url} alt={`Dog ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default MainApp;
