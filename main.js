const posts = [
    {
        title: 'post One',
        description: 'This is a post one',
        status: 'draft',
    },
    {
        title: 'post Two',
        description: 'This is a post two',
        status: 'archived',
    },
    {
        title: 'post Three',
        description: 'This is a post two',
        status: 'archived',
    },
    {
        title: 'post four',
        description: 'This is a post two',
        status: 'draft',
    },
]


const archivedPost = posts.filter(function (singlePost) {
    if (singlePost.status === 'archived') {
        return true;
    } else {
        return false;
    }
});


// TODO: render all draft post
const dartPost = [];


const root = document.querySelector('#root');

let postHtml = [];
posts.forEach(function (singlePost) {
    postHtml.push(
        `<div class="post bg-white shadow-sm p-4 rounded-md">
          <h2>${singlePost.title}</h2>
          <p>${singlePost.description}</p>
      </div>`
    )
})

root.innerHTML = postHtml.join('');


// for (let index in posts) {
//    console.log(posts[index])
// }


let result = plus(123123, 5);

function plus(number1, number2) {
   return number1 + number2;
}



