let time = new Date().getTime();
const posts = [
    {title : "post one",body : "My first post",createdAt : time},
    {title : "post two",body : "My second post",createdAt : time}
]

let timer = setInterval(getPost,1000);

function getPost(){
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.title} and this is ${post.body} edited in ${(new Date().getTime()-time)/1000} ago.</li>`
        });
        document.body.innerHTML = output;
        
    }
getPost(posts);

function createPost(post){
    return new Promise((resolve,reject)=>{
        time = new Date().getTime();
        setTimeout(()=>{
            posts.push({...post,createdAt : time});
            updateLastUserActivityTime().then(()=>console.log("hurray we've got..."))
            console.log(posts);
            console.log(posts.length);
            console.log("--------------------------------------");
            const error = false;
            if (!error) {
                resolve();
                // console.log(resolve);
            }else{
                // console.log("There is Something wrong in your code...")
                reject();
            }
        },4000)

    })
}


function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            // console.log(posts.pop())
            const error = false;
            // console.log(posts.length);
            if (posts.length!=0) {
                resolve();
            }else{
                reject("Array is empty now");
            }
        },6000);

    })
}

createPost({title : "post three",body : "My third post"})
.then(()=>{
    getPost();
    console.log("First post Status updated - "+ new Date().toUTCString());
})
.catch(error=>{
    console.log(error)
});

deletePost()
.then(()=>{
    console.log(posts);
    getPost();
})

.catch(()=>{
    console.log("There's Something wrong in your code.")})

deletePost()
.then(()=>{
    console.log(posts);
    getPost();
})

.catch(()=>{
    console.log("There's Something wrong in your code.")
})

let postFour = {title : "post four",body : "My fourth post"};
// console.log(postFour);

deletePost()
.then(getPost)

.catch(()=>{
    time = new Date().getTime();
    posts.push({...postFour,createdAt : time});
    console.log(posts)
    getPost();
    setTimeout(()=>{
        deletePost()
        .then(()=>{
            clearInterval(timer)
            console.log(posts)
            console.log(post.length)
        })
        .catch(()=>{
            console.log("There's nothing inside the array.")
            console.log("The array is empty.")
            getPost();
        })
        })
    },4000)

//promise.all
console.log("***************************************");
const promise1 = Promise.resolve("hello roshan");console.log(typeof promise1);
const promise2 = 10;
console.log(typeof promise2);
const promise3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,"good bye..."));
console.log(typeof promise3);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
console.log(typeof promise4);
Promise.all([promise1,promise2,promise3,promise4]).then(values=>{
    console.log(values)})
    .catch(()=>console.log("There's an error"));

// const updateLastUserActivityTime = new Promise((resolve,reject)=>setTimeout(resolve=>{
//     createPost(),
//     postFour();
//     console.log(new Date().toUTCString());
// }),1000);
// console.log(updateLastUserActivityTime);
// Promise.all([])

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
            // console.log("hurray.....")
        }, 1000);
    })
}