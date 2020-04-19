const projects = [
  {
    title: "A high performance web crawler",
    description:
      "The web crawler makes 100k req/day to various online travel agencies to gather price and availability data for hotel rooms",
    client: {
      name: "MYSTAYS",
      url: "https://www.mystays.com/",
      caption: "a japanese hotel chain",
    },
    tags: [
      { name: "Elixir", link: "https://elixir-lang.org/" },
      {
        name: "Web scraping",
        link: "https://en.wikipedia.org/wiki/Web_scraping",
      },
      {
        name: "Web crawling",
        link: "https://en.wikipedia.org/wiki/Web_crawler",
      },
      { name: "TCP connections", link: "https://github.com/elixir-mint/mint" },
    ],
  },
];

export default projects;
