export class AbstractView
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

export class Dashboard extends AbstractView
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

export class Posts extends AbstractView
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

export class Settings extends AbstractView
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