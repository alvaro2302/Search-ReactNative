const API = "https://jsonplaceholder.typicode.com"
export const getUsers = async() =>{
    const users = fetch(API + "/users")
                    .then(response => response.json())
                    .catch(error => console.log(error));
    return users;
}
