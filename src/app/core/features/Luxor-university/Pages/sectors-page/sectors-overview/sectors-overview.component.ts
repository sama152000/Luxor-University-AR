import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Sector } from '../../../model/sector.model';
import { SectorService } from '../../../Services/sector.service';

@Component({
  selector: 'app-sectors-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors-overview.component.html',
  styleUrls: ['./sectors-overview.component.css']
})
export class SectorsOverviewComponent implements OnInit {
  sectors: Sector[] = [];
  isLoading = true;
  activeSectorId: string | null = null;

  constructor(private sectorService: SectorService, private router: Router) {}

  async ngOnInit() {
    await this.loadSectors();
  }

  async loadSectors() {
    try {
      this.sectors = await this.sectorService.getAllSectors();
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading sectors:', error);
      this.isLoading = false;
    }
  }

  onViewDetails(slug: string) {
    this.router.navigate(['sectors', 'details', slug]);
  }

  scrollToSector(sectorId: string) {
    this.activeSectorId = sectorId;
    const element = document.getElementById(`sector-${sectorId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
