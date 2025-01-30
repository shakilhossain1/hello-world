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

    {
        title: 'post five',
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


const draftPost = posts.filter(function (singlePost) {
    return singlePost.status === 'draft';
});


const allPost = document.querySelector('#allPost');
let postHtml = [];
posts.forEach(function (singlePost) {
    postHtml.push(
        `<div class="post bg-white shadow-sm p-4 rounded-md">
          <h2 class="text-lg font-semibold">${singlePost.title}</h2>
          <p>${singlePost.description}</p>
          <p class="text-sm">Status: ${singlePost.status}</p>
      </div>`
    )
})

allPost.innerHTML = postHtml.join('');



const draftPostHtml = document.querySelector('#draftPost');
let draftPostHtmlArray = [];
draftPost.forEach((singlePost) => {
    draftPostHtmlArray.push(
        `<div class="post bg-white shadow-sm p-4 rounded-md">
          <h2 class="text-lg font-semibold">${singlePost.title}</h2>
          <p>${singlePost.description}</p>
          <p class="text-sm">Status: ${singlePost.status}</p>
      </div>`
    )
})
console.log(draftPostHtmlArray)
draftPostHtml.innerHTML = draftPostHtmlArray.join('');


// for (let index in posts) {
//    console.log(posts[index])
// }


let result = plus(123123, 5);

function plus(number1, number2) {
    return number1 + number2;
}



