let time = new Date().getTime();
const posts = [
    {title : "post one",body : "My first post",createdAt : time},
    {title : "post two",body : "My second post",createdAt : time}
]

function getPost(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.title} and this is ${post.body} edited in ${(new Date().getTime()-time)/1000} ago.</li>`
        });
        document.body.innerHTML = output;
        
    },1000);
}
getPost(posts);

function createPost(post){
    return new Promise((resolve,reject)=>{
        time = new Date().getTime();
        setTimeout(()=>{
            posts.push({...post,createdAt : time});
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
.then(getPost)
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
