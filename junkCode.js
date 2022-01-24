// useEffect(() => {
//   async function fetchMemes() {
//     const URL = `https://api.memegen.link/templates/`;
//     try {
//       const res = await axios.get(URL);
//       console.log(res.data);
//       setMemeImage(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchMemes();
// }, []);

// Math.floor(Math.random) for the random memes
// const randNum = Math.floor(Math.random() * randomImage.length);
// const randMemeImgUrl = randomImage[randNum].url;
// setRandomImage(randMemeImgUrl);

// useEffect(() => {
//   const fetchMemes = async() => {
//    const url = `https://api.memegen.link/templates/`
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       posts(json.data.children.map((it) => it.data));
//       setPosts(posts);
//     } catch (e) {
//       console.error(e);
//     }
//   }
//   fetchMemes().catch((err) => {
//     console.error(err);
//   });
// });

/* <h2 className="top">{inputTopText}</h2> */

/* <h3 className="bottom">{inputBottomText}</h3> */
