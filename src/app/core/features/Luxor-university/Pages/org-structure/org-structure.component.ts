import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgStructureService } from '../../Services/org-structure.service';
import { OrgNode } from '../../model/org-structure.model';
;
import { FooterComponent } from '../shared/footer/footer.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-org-structure',
  standalone: true,
  imports: [CommonModule, FooterComponent, PageHeaderComponent],
  templateUrl: './org-structure.component.html',
  styleUrls: ['./org-structure.component.css']
})
export class OrgStructureComponent implements OnInit {
  orgRoot: OrgNode | null = null;
  selectedNode: OrgNode | null = null;
  showSidebar = false;
  searchQuery = '';
  zoomLevel = 1;

  constructor(private orgService: OrgStructureService) {}

  ngOnInit(): void {
    this.orgService.getOrgStructure().subscribe(data => {
      this.orgRoot = data.root;
    });
  }

  toggleNode(node: OrgNode): void {
    node.expanded = !node.expanded;
  }

  selectNode(node: OrgNode): void {
    this.selectedNode = node;
    this.showSidebar = true;
  }

  closeSidebar(): void {
    this.showSidebar = false;
    this.selectedNode = null;
  }

  expandAll(): void {
    this.orgService.expandAll();
  }

  collapseAll(): void {
    this.orgService.collapseAll();
  }

  zoomIn(): void {
    if (this.zoomLevel < 2) {
      this.zoomLevel += 0.1;
    }
  }

  zoomOut(): void {
    if (this.zoomLevel > 0.5) {
      this.zoomLevel -= 0.1;
    }
  }

  resetZoom(): void {
    this.zoomLevel = 1;
  }

  downloadPDF(): void {
    // This would trigger PDF generation
    console.log('Downloading organizational structure as PDF...');
  }

  getNodeClass(type: string): string {
    const classes: { [key: string]: string } = {
      'president': 'node-president',
      'vice-president': 'node-vice-president',
      'secretary': 'node-secretary',
      'department': 'node-department',
      'unit': 'node-unit'
    };
    return classes[type] || 'node-default';
  }

  hasChildren(node: OrgNode): boolean {
    return !!node.children && node.children.length > 0;
  }
}
