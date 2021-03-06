export const Post = (postObject) => {
  return `
    <section class="post" id=${postObject.id}>
      <header>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
      <p>Author: ${postObject.user.name}</p>
      <button id="edit__${postObject.id}">Edit</button>
      <button id="delete__${postObject.id}">Delete</button>
    </section>
  `
}

