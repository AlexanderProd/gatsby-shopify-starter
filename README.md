<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  <img alt="Gatsby" src="ressources/shopify+gatsby.png" height="60px" />
  <br/>
  Gatsby Shopify starter
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d374a159-9ee3-4b02-91a3-ee3053990fcb/deploy-status)](https://app.netlify.com/sites/gatsby-shopify-starter/deploys)

Kick off your next ecommerce experience with this Gatsby starter. It is based on the default Gatsby starter to be easily modifiable. [Demo](https://gatsby-shopify-starter.netlify.com)

This starter also includes credentials to a Shopify demo store so you can try it out immediately without having to start a store. To use your own just change the values inside of `.env`.

If you have questions feel free to message me on [Twitter](https://twitter.com/alexanderhorl) 🤙🏻

## 💎 Features

- Cart
- Product grid
- Product page
- Dynamic Inventory Checking
- Image optimization with Gatsby Image
- CSS in JS with Emotion
- Google Analytics
- SEO

### 📦 Dynamic Inventory Checking
The Shopify product invetory is beeing checked in realtime, therefore no rebuilding and redeploy is needed when a product goes out of stock. This avoids problems where products could still be available even though they're out of stock due to redeploy delay.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using this starter
    gatsby new my-shopify-store https://github.com/AlexanderProd/gatsby-shopify-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-shopify-store/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-shopify-store` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Connect your own Shopify store.**

    Open both `.env` files located in the root directory of your page end replace the credentials with your own. Don't forget to restart Gatsby for your store to be loaded!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 📌 ToDo

I'll happily merge any pull request to improve the starter. 🙂
- [ ] Convert Layout to function component.
- [X] Add dynamic inventory checking to avoid re-building after every purchase. 
- [X] Add better styling.
- [X] Add image optimization using Gatsby sharp plugin.
- [X] Convert ProductForm to function component.
<!-- AUTO-GENERATED-CONTENT:END -->
