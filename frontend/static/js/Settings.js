//import AbstractView from "./AbstractView.js";

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