import * as views from "./AbstractView.js";
//import { Dashboard as Dashboard } from "./AbstractView.js";
//import { Posts as Posts } from "./AbstractView.js";
//import { Settings as Settings } from "./AbstractView.js";

const navigateTo = url =>
{
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: views.Dashboard },
        { path: "/posts", view: views.Posts },
        { path: "/settings", view: views.Settings },
    ];
    
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
    
    console.log(new match.route.view());
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

// class AbstractView
// {
//     constructor()
//     {
//     }

//     setTitle(title)
//     {
//         document.title = title;
//     }

//     async getHtml()
//     {
//         return "";
//     }
// }

// class Dashboard extends AbstractView
// {
//     constructor()
//     {
//         super();
//         this.setTitle("Dashboard");
//     }

//     async getHtml()
//     {
//         return `
//             <h1>Welcome back, Dom</h1>
//             <p>
//                 Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure
//             </p>
//             <p>
//                 <a href="/posts" data-link>View recent posts</a>.
//             </p>
//         `;
//     }
// }

// class Posts extends AbstractView
// {
//     constructor()
//     {
//         super();
//         this.setTitle("Posts");
//     }

//     async getHtml()
//     {
//         return `
//             <h1>Posts</h1>
//             <p>
//                 You are viewing the posts!
//             </p>
//         `;
//     }
// }

// class Settings extends AbstractView
// {
//     constructor()
//     {
//         super();
//         this.setTitle("Setting");
//     }

//     async getHtml()
//     {
//         return `
//             <h1>Setting</h1>
//             <p>
//                 Manage your privacy and configuration
//             </p>
//         `;
//     }
// }
