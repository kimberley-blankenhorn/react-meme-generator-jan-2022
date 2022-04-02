import './App.css';
// import axios from 'axios';
// Import React (Mandatory Step).
import React, { useEffect, useState } from 'react';

// import { setEnvironmentData } from 'worker_threads';

// MemeGenerator component to generate a meme
export default function MemeGenerator() {
  const [inputTopText, setInputTopText] = useState('');
  const [inputBottomText, setInputBottomText] = useState('');
  const [randomImage, setRandomImage] = useState(
    'https://api.memegen.link/images/buzz/memes/memes_everywhere.jpg',
  );
  const [userSelection, setUserSelection] = useState('');
  // const [data, setData] = useState('');
  // const [posts, setPosts] = useState('');
  // const [memeImage, setMemeImage] = useState([]);
  // const handleChange = (e) => {
  //   setInputText({
  //     ...inputText,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const randNum = Math.floor(Math.random() * randomImage.length);
    // const randMemeImgUrl = randomImage[randNum].url;
    // setRandomImage(randMemeImgUrl);
  };

  const memeChoices = [
    'aag',
    'ackbar',
    'agnes',
    'aint-got-time',
    'ams',
    'awesome-awkward',
    'badchoice',
    'bs',
    'buzz',
    'captain-america',
    'center',
    'chosen',
    'crazypills',
    'hipster',
    'imsorry',
    'kombucha',
  ];
  const jsxMemes = memeChoices.map((memeChoice) => {
    return (
      <option key={`choice-${memeChoice}`} value={memeChoice}>
        {memeChoice}
      </option>
    );
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.memegen.link/templates/');
  //       const json = await response.json();
  //       setData(json);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData().catch((err) => {
  //     console.error(err);
  //   });
  // }, []);

  // const saveMeme = () => {};
  // saveAs(
  //   `https://api.memegen.link/images/${userSelection}/${inputTopText}/${inputBottomText}.jpg`,
  // );



    function downloadFile(props) {
      fetch(props.img).then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'meme';
          a.click();
        });
      });
    };

  return (
    <div className="header">
      <h1>Meme Generator</h1>
      <h3>Enter your selections with your text and hit generate!</h3>

      <div className="meme-container">
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <label for="Meme template">
              Meme Template
              <select
                name="Meme template"
                placeholder="Select meme type"
                value={userSelection}
                // data-test-id={userSelection}
                onChange={(e) => {
                  setUserSelection(e.currentTarget.value);
                }}
              >
                {/* {data.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))} */}
                {jsxMemes}
              </select>
            </label>
            <input
              name="topText"
              placeholder="Add Bottom Text"
              value={inputTopText}
              onChange={(e) => setInputTopText(e.currentTarget.value)}
            />
            <input
              name="bottomText"
              placeholder="Add Bottom Text"
              value={inputBottomText}
              onChange={(e) => setInputBottomText(e.currentTarget.value)}
            />
            <button
              onClick={() => {
                setRandomImage(
                  `https://api.memegen.link/images/${userSelection}/${inputTopText}/${inputBottomText}.jpg`,
                );
              }}
            >
              Generate
            </button>
          </form>
        </div>
        <div className="meme">
          <img className="memeImageDisplay" src={randomImage} alt="" />

          <button>Download</button>
        </div>
      </div>
    </div>
  );
}
