import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor()
    {
        this.setTittle("Dashboard")
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