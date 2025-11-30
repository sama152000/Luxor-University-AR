export interface Center {
  id: string;
  centerName: string;
  description?: string;
  mission?: string;
  place?: string;
  subTitle?: string;
  vision?: string;
  about?: string;
  goals?: Goal[];
}

export interface Goal {
  goalName: string;
}
