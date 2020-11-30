/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    window.lib.getPosts(displayPostComments);
  });

  /**
   * Displays a list of posts in the console.
   * @param {String} error An error message.
   * @param {*} posts A list of posts.
   */
  const displayPostComments = (error, posts) => {
    if (error) {
      console.error(error);
    } else {
      posts.forEach((post) => {
        window.lib.getComments(post.id, (error, comments) => {
          if (error) {
            console.error(error);
          } else {
            post.comments = comments;
            console.log(post);
          }
        });
      });
    }
  };
})();
