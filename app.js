const displayPost = (posts) => {
  const postContainer = document.getElementById("post-container");

  for (const post of posts) {
    const div = document.createElement("div");

    div.classList.add("post");

    div.innerHTML = `
        <h3>User- ${post.id}</h3>
        <h4>title- ${post.title}</h4>
        <p>${post.body}</p>
    `;

    postContainer.appendChild(div);
  }
};

const loadPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await data.json();

  displayPost(posts);
};
