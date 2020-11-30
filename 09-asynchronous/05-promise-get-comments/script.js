/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    window.lib.getPosts().then(displayPosts);
  });

  /**
   * Displays a list of posts in the console.
   * @param {String} error An error message.
   * @param {*} posts A list of posts.
   */
  const displayPosts = (posts) => {
    let promises = [];
    posts.forEach((post) => {
      let promise = window.lib.getComments(post.id);
      promise.then((comments) => {
        post.comments = comments;
      });
      promises.push(promise);
    });
    Promise.allSettled(promises).then(() => {
      console.log(posts);
    });
  };
})();
