// import { useState } from "react";

// const AllDogs = () => {
//   const [allBreeds, setAllBreeds] = useState([]);
//   const [pictures, setPictures] = useState([]);
//   const [finalPics, setFinalPics] = useState([]);

//   const handleLoadBreeds = async (e) => {
//     e.preventDefault();

//     const fetchData = async () => {
//       // get the name of each breed (for putting in the link later)
//       const res = await fetch("https://dog.ceo/api/breeds/list/all");
//       const data = await res.json();
//       const breedList = Object.keys(data.message);
//       setAllBreeds(breedList);
//       console.log(allBreeds);
//     };
//     await fetchData();
//     await handleLoadPics();

//     // final task, adding each img tag to "finalPics" variable
//     const updatedfinalPics = pictures.map((url, index) => {
//       return <img key={`${index}`} src={`${url}`} alt={`Dog ${index + 1}`} />;
//     });

//     setFinalPics(updatedfinalPics);
//     console.log(finalPics);
//   };

//   const handleLoadPics = async () => {
//     // get one random pic per breed fetched from the handleLoadBreeds function
//     const picsArray = [];

//     //   for (const breed of allBreeds) {
//     //     const img = await fetch(
//     //       `https://dog.ceo/api/breed/${breed}/images/random/1`
//     //     );
//     //     const pic = await img.json();

//     //     const truePic = Object.values(pic.message);
//     //     picsArray.push(truePic[0]);
//     //   }

//     //   setPictures(picsArray);
//     // };

//     await Promise.all(
//       allBreeds.map(async (breed) => {
//         const img = await fetch(
//           `https://dog.ceo/api/breed/${breed}/images/random/1`
//         );
//         const pic = await img.json();
//         const truePic = Object.values(pic.message);
//         picsArray.push(truePic[0]);
//       })
//     );

//     setPictures(picsArray);
//   };

//   // forEach((breed) => {}) in allBreeds, create an img element <img src="https://dog.ceo/api/${breed}/hound/images/random/1". Then setPictures() to include each img. Then in the return section,

//   return (
//     <>
//       <div className="all-breeds-btn">
//         <button onClick={handleLoadBreeds}>All Breeds</button>
//       </div>
//       <hr />
//       <br />
//       <div>{finalPics}</div>
//     </>
//   );
// };

// export default AllDogs;

// import { useState } from "react";

// const AllDogs = () => {
//   const [allBreeds, setAllBreeds] = useState([]);
//   const [finalPics, setFinalPics] = useState([]);

//   const handleLoadBreeds = async (e) => {
//     e.preventDefault();

//     const res = await fetch("https://dog.ceo/api/breeds/list/all");
//     const data = await res.json();
//     const breedList = Object.keys(data.message);
//     setAllBreeds(breedList);

//     const picsArray = await Promise.all(
//       allBreeds.map(async (breed) => {
//         const img = await fetch(
//           `https://dog.ceo/api/breed/${breed}/images/random/1`
//         );
//         const pic = await img.json();
//         const truePic = Object.values(pic.message);
//         return truePic[0];
//       })
//     );

//     setFinalPics(
//       picsArray.map((url, index) => (
//         <img key={`${index}`} src={`${url}`} alt={`Dog ${index + 1}`} />
//       ))
//     );
//   };

//   return (
//     <>
//       <div className="all-breeds-btn">
//         <button onClick={handleLoadBreeds}>All Breeds</button>
//       </div>
//       <hr />
//       <br />
//       <div>{finalPics}</div>
//     </>
//   );
// };

// export default AllDogs;

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
