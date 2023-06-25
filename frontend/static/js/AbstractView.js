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

// export class Dashboard // extends AbstractView
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
