module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/weilaixianlai/ede4996fac2649399a94254272a460a5?v=4c36c28eba2643c3ae9c8a56e19fd15a"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/weilaixianlai/ac87092cc971431786800bc7954dc8c4?v=247ff1d885d04bdda1933b4375147f5e"
            }
        }
    ],
}
