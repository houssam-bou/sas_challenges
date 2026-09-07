let user = {
    username: "Ahmed",
    age: 18,
    city: "Marrakech",
    status: "student"
};
console.log(`username : ${user.username}`);
console.log(`old age : ${user.age}`);
user = {
    age : 23,
    city : "youssofiya",
    status : "work"
}
console.log(`new age : ${user.age}`);
console.log(`city : ${user.city}`);
console.log(`status : ${user.status}`);
console.log(`votre email = ${user.username}.${user.status}@gmail.com`);