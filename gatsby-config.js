module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/weilaixianlai/319bf3ca27d94045b0f2b5d36cb4e724?v=4577c7fde7b24d21a3c03f35194ab45c"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/weilaixianlai/9f41dae5e3a0485b9920027c17a2bd62?v=d3ae5a2b139c42aea92eeb7ebeee1b28"
            }
        }
    ],
}
