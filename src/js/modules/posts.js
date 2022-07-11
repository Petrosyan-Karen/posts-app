module.exports = function posts (parent, postsTitle, postsText){
  const post = document.createElement("div");
  const h3 = document.createElement("h3");
  const p= document.createElement("p");

  parent.append(post);
  post.append(h3);
  post.append(p);

   post.classList.add("post");
   h3.classList.add("post-title");
   p.classList.add("post-text");

   h3.textContent = postsTitle;
   p.textContent = postsText;

}