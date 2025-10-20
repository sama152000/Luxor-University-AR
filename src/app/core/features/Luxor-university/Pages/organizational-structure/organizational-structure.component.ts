// src/app/core/features/Luxor-university/Pages/organizational-structure/organizational-structure.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { DepartmentService } from '../../Services/department.service';
import { HierarchyNode, Department } from '../../model/department.model';
import { FooterComponent } from '../shared/footer/footer.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-organizational-structure',
  standalone: true,
  imports: [CommonModule, FooterComponent, PageHeaderComponent],
  templateUrl: './organizational-structure.component.html',
  styleUrls: ['./organizational-structure.component.css']
})
export class OrganizationalStructureComponent implements OnInit {
  orgChart: TreeNode[] = [];
  selectedNode: HierarchyNode | null = null;
  selectedDepartment: Department | null = null;
  isMobileSidebarVisible: boolean = false;
  isLoading: boolean = true;

  constructor(public departmentService: DepartmentService) {}

  ngOnInit() {
    const structure = this.departmentService.getOrgStructure();
    this.orgChart = this.convertToPrimeTree(structure);
    this.isLoading = false;
  }

  private convertToPrimeTree(node: HierarchyNode): TreeNode[] {
    return [{
      label: `${node.name} - ${node.position}`,
      expanded: true,
      data: node,
      children: node.children?.map(child => this.convertToPrimeTree(child)[0]) || []
    }];
  }

  onNodeSelect(event: any) {
    this.selectedNode = event.node.data;
    this.selectedDepartment = this.selectedNode?.department ?? null;
  }

  onDepartmentSelect(dept: Department) {
    this.selectedDepartment = dept;
  }

  toggleMobileSidebar() {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }

  getNodeIcon(node: TreeNode): string {
    // Assuming node.data has some property to determine icon, or default
    return node.data?.icon || 'pi pi-user';
  }

  toggleNode(node: TreeNode, index: number, isChild?: boolean) {
    node.expanded = !node.expanded;
  }
}
