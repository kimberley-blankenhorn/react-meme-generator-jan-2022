import './App.css';
import axios from 'axios';
// Import React (Mandatory Step).
import React, { useEffect, useState } from 'react';

// MemeGenerator component to generate a meme
function MemeGenerator() {
  const [inputTopText, setInputTopText] = useState('');
  const [inputBottomText, setInputBottomText] = useState('');
  const [randomImage, setRandomImage] = useState(
    'https://api.memegen.link/images/buzz/memes/memes_everywhere.jpg',
  );
  const [userSelection, setUserSelection] = useState('');
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
  useEffect(() => {
  async function fetchMemes() {
    try{
      const response = await fetch(`https://api.memegen.link/templates/`);
    const json = await response.json();
    setPosts(json.data.children.map(it => it.data))
  } catch (e) {
    console.error(e);
  }
}
  fetchMemes().catch((err) => {
    console.error(err)
  })
], []);

    }



  // const saveMeme = () => {};
  // saveAs(
  //   `https://api.memegen.link/images/${userSelection}/${inputTopText}/${inputBottomText}.jpg`,
  // );

  return (
    <div className="meme-container">
      <div className="form-inputs">
        <h1>Meme Generator</h1>
        <h3>Enter your selections with your text and hit generate!</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="Meme template"
            placeholder="Select meme type"
            value={userSelection}
            onChange={(e) => setUserSelection(e.currentTarget.value)}
          />
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
        {/* <h2 className="top">{inputTopText}</h2> */}
        <div>{randomImage}</div>
        {/* <h3 className="bottom">{inputBottomText}</h3> */}
      </div>
    </div>
  );
}

export default MemeGenerator;
