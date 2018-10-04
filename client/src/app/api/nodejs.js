const url = 'http://localhost:3000/auth/';


function handleErrors(response) {
  console.log(response)
  if (!response.ok) {
     switch(response.status){
         case 403:
         return Promise.reject("No tienes permiso");
         case 400:
         return Promise.reject("Hay un error en los datos");
         case 401:
         return Promise.reject("Facebook rechazo la petición");
         default:
          return Promise.reject(response.statusText);

     }
  }
  return response.json();
}


export const facebookLogin = () => {
  return fetch(url + 'signup', {
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      }
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