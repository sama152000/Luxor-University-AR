import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SectorWithDetails, Sector } from '../../../model/sector.model';
import { SectorService } from '../../../Services/sector.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sector-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sector-details.component.html',
  styleUrls: ['./sector-details.component.css']
})
export class SectorDetailsComponent implements OnInit, OnDestroy {
  sector: SectorWithDetails | null = null;
  previousSector: Sector | null = null;
  nextSector: Sector | null = null;
  isLoading = true;
  private routeSub: Subscription = new Subscription();

  constructor(
    private sectorService: SectorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.loadSectorDetails(slug);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  async loadSectorDetails(slug: string) {
    this.isLoading = true;
    try {
      const [sectorData, adjacentSectors] = await Promise.all([
        this.sectorService.getSectorBySlug(slug),
        this.sectorService.getAdjacentSectors(slug)
      ]);

      this.sector = sectorData;
      this.previousSector = adjacentSectors.previous;
      this.nextSector = adjacentSectors.next;
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading sector details:', error);
      this.isLoading = false;
    }
  }

  onBack() {
    this.router.navigate(['sectors']);
  }

  navigateToSector(slug: string) {
    this.router.navigate(['sectors', 'details', slug]);
  }

  downloadPDF() {
    alert('PDF download functionality would be implemented here');
  }

  hasStatistics(): boolean {
    return !!this.sector?.statistics && this.sector.statistics.length > 0;
  }

  getTotalRow() {
    return this.sector?.statistics?.find(stat => stat.category.toLowerCase() === 'total');
  }

  getNonTotalStatistics() {
    return this.sector?.statistics?.filter(stat => stat.category.toLowerCase() !== 'total') || [];
  }
}
