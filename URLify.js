/*
    Replace all spaces with %20

    Input: tauhida parveen

    Output: tauhida%20parveen

    Input: www.thinkful.com /tauh ida parv een

    Output: www.thinkful.com%20/tauh%20ida%20parv%20een
*/


const URLify = (url) => {
    debugger;
    return url.replace(/ /g,'%20');
}

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));