/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    window.lib.getPosts(displayPosts);
  });

  /**
   * Displays a list of posts in the console.
   * @param {String} error An error message.
   * @param {*} posts A list of posts.
   */
  const displayPosts = (error, posts) => {
    if (error) {
      console.error(error);
    } else {
      posts.forEach((post) => {
        console.log(post);
      });
    }
  };
})();
