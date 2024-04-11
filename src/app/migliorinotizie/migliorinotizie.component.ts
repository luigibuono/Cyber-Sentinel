import { Component } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-migliorinotizie',
  templateUrl: './migliorinotizie.component.html',
  styleUrls: ['./migliorinotizie.component.css']
})
export class MigliorinotizieComponent {
  searchTerm: string = ''
  newsList: any[] = [];
  currentPage: number = 0;
  newsPerPage: number = 8;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.hackerNewsService.getBestStories().subscribe(ids => {
      const startIndex = this.currentPage * this.newsPerPage;
      const endIndex = startIndex + this.newsPerPage;
      const newsIDsToShow = ids.slice(startIndex, endIndex);

      for (const id of newsIDsToShow) {
        this.hackerNewsService.getNewsDetail(id).subscribe(newsDetail => {
          this.newsList.push(newsDetail);
        });
      }
    });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.loadNews();
  }

  onSearch(): void {
    // Se il termine di ricerca è vuoto, carica tutte le notizie
    if (!this.searchTerm.trim()) {
      this.loadNews();
      return;
    }

    // Altrimenti, filtra le notizie in base al termine di ricerca
    this.newsList = this.newsList.filter(news => {
      return news.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  onClearSearch(): void {
    this.searchTerm = ''; // Cancella il termine di ricerca
    this.loadNews(); // Carica tutte le notizie
  }
}
