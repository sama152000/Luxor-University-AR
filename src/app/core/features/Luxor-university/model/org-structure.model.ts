export interface OrgNode {
  id: string;
  label: string;
  title: string;
  name?: string;
  type: 'president' | 'vice-president' | 'secretary' | 'department' | 'unit';
  description?: string;
  children?: OrgNode[];
  expanded?: boolean;
  icon?: string;
}

export interface OrgStructureData {
  root: OrgNode;
  lastUpdated: Date;
}
