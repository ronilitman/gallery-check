
// SET_APPS
export const setPics = (pics) => ({
  type: 'SET_PICS',
  pics
})

export const startSetPics = () => {
  return (dispatch) => {
    const page = Math.floor(Math.random() * 10 + Math.random() * 10 + Math.random() * 10)
    console.log(page)
    return fetch(`https://picsum.photos/v2/list?page=${page}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        let allPics = []
        allPics = json;
        dispatch(setPics(allPics));
        return allPics;
      })
      .catch((e) => {
        console.log("eror is coming...");
      })
  }
};

