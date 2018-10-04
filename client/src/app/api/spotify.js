
const url="https://accounts.spotify.com/api/token",
  

  export const spotify = () => {
    return fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        data: {
          "grant_type":    "authorization_code",
          "code":          code,
          "redirect_uri":  'http://localhost/4200/profile',
          "client_secret": '6215b49e5ba149f5b56c98d22c60d3d4',
          "client_id":     'd231ca46592a4636a7f5cebe09b19dbd',
        },
    })
    // .then(res=>{
    //     console.log(res)
    //     if(!res.ok) return Promise.reject(res.json())
    //     return res.json();
    // })
    .then(handleErrors)
    .then(r=>{
        console.log(r)
        saveToken(r.access_token);
        saveUser(r.user);
        return r.user;
    }) 
  };