import { Component, OnInit } from '@angular/core';

interface LatestNews {
  url: string,
  image: string;
  heading: string;
  description: string;
}

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public newsItems: LatestNews[] = [
    {
      url: 'http://www.nasa.gov/feature/goddard/2021/james-webb-space-telescope-testing-progress-continues',
      image: 'http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/webb-technician.jpg?itok=HduoFftk',
      heading: `James Webb Space Telescope Testing Progress Continues`,
      description: `Engineers have made considerable progress in checking off NASA’s James Webb Space Telescope’s final series of tests.`,
    },
    {
      url: 'http://www.nasa.gov/feature/goddard/2021/nasa-s-webb-will-use-quasars-to-unlock-the-secrets-of-the-early-universe',
      image: 'http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/quasaroutflow.png?itok=Ut55_-F-',
      heading: `NASA’s Webb Will Use Quasars to Unlock the Secrets of the Early Universe`,
      description: `Shortly after its launch later this year, a team of scientists will
      train NASA’s James Webb Space Telescope on six of the most distant and
      luminous quasars. They will study the properties of these quasars and
      their host galaxies, and how they are interconnected during the first
      stages of galaxy evolution in the very early universe.`,
    },
    {
      url: 'http://www.nasa.gov/centers/marshall/news/releases/2021/aas-names-new-nasa-affiliated-fellows-legacy-fellows.html',
      image: 'http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/arp299.jpg?itok=3xtH4MEP',
      heading: `AAS Names New NASA-Affiliated Fellows, Legacy Fellows`,
      description: `Thirteen scientists working at or affiliated with NASA have been recently named Fellows of the American Astronomical Society (AAS), the major organization of professional astronomers in North America.`,
    },
  ];
}
