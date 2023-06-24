//import Dashboard from "./views/Dashboard.js";
//import Posts from "./views/Post.js";
//import Settings from "./views/Settings.js";

const navigateTo = url =>
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

class AbstractView
{
    constructor()
    {
    }

    setTitle(title)
    {
        document.title = title;
    }

    async getHtml()
    {
        return "";
    }
}

class Dashboard extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml()
    {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}

class Posts extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Posts");
    }

    async getHtml()
    {
        return `
            <h1>Posts</h1>
            <p>
                You are viewing the posts!
            </p>
        `;
    }
}

class Settings extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Setting");
    }

    async getHtml()
    {
        return `
            <h1>Setting</h1>
            <p>
                Manage your privacy and configuration
            </p>
        `;
    }
}
