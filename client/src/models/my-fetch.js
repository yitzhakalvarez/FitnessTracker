  
/* B"H
*/
//const API_ROOT = process.env.API_ROOT || 'http://localhost:3001/';
const API_ROOT = process.env.API_ROOT || '/';
//if there is no such environment variable then use local host 3001
export function myFetch(url, data = null, method = null)
{   if(data){
        return fetch(API_ROOT + url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(x=> x.json())
    }
    else{
        return fetch(API_ROOT + url  ).then(x=> x.json() )
    }
}