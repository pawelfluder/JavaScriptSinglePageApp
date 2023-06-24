import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Post.js";


const navigateTo= url =>
{
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
        //{ path: "/", view: () => console.log("Viewing Dashboard") },
        //{ path: "/posts", view: () => console.log("Viewing Posts") },
        //{ path: "/settings", view: () => console.log("Viewing Settings") },
    ];
    // Test each route for potential match
    const potentialMatches = routes.map(route =>
    {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match)
    {
        match =
        {
            route: routes[0],
            isMatch: true,
        };
    }

    const view = new match.route.view();

    console.log("start");
    var div = document.querySelector("#app");
    console.log(div);
    div.innerHTML = await view.getHtml();
    
    console.log(match.route.view());
};

window.addEventListener("popstate", router);
 
document.addEventListener("DOMContentLoaded", () =>
{
    document.body.addEventListener("click", e =>
    {
        if (e.target.matches("[data-link]"))
        {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
