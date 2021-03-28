const projects = [
  {
    title: 'A high performance web crawler',
    description:
      'The web crawler makes 100k req/day to various online travel agencies to gather price and availability data for hotel rooms',
    client: {
      name: 'MYSTAYS',
      url: 'https://www.mystays.com/',
      caption: 'a japanese hotel chain',
    },
    tags: [
      { name: 'Elixir', link: 'https://elixir-lang.org/' },
      {
        name: 'Web scraping',
        link: 'https://en.wikipedia.org/wiki/Web_scraping',
      },
      {
        name: 'Web crawling',
        link: 'https://en.wikipedia.org/wiki/Web_crawler',
      },
      {
        name: 'low level TCP connection handling',
        link: 'https://github.com/elixir-mint/mint',
      },
    ],
  },
  {
    title: 'A real-time asset allocation system',
    description:
      'Gather trade from 1000s of mt4 trader accounts and allocate them to investors in real-time',
    client: {
      name: 'UNION',
      url: 'https://www.forunion.com/',
      caption: 'a distributed investment platform',
    },
    tags: [
      { name: 'Elixir', link: 'https://elixir-lang.org/' },
      {
        name: 'Rust',
        link: 'https://www.rust-lang.org/',
      },
      {
        name: 'Phoenix',
        link: 'https://www.phoenixframework.org/',
      },
      { name: 'Graphql', link: 'https://graphql.org/' },
      { name: 'Tailwind', link: 'https://tailwindcss.com/' },
      { name: 'Traefik', link: 'https://containo.us/traefik/' },
      { name: 'Prometheus', link: 'https://prometheus.io/' },
      { name: 'Grafana', link: 'https://grafana.com/' },
      { name: 'Loki', link: 'https://github.com/grafana/loki' },
    ],
  },
]

export default projects
