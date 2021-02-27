import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GridListService {
  constructor() {}
}
/**
 * @param thumbUrl string | GridListCardVideo | GridListCardLink
 * @param   title string
 * @param   icon string
 * @param   description string
 * @param   description2 string
 * @param   description3 string
 * @param   badgeLabel BadgeLabel
 * @param   actionBtn GridListActionBtn
 * @param   actionBtn2 GridListActionBtn
 * @param   actionBtn3 GridListActionBtn
 * @param   actionBtn4 GridListActionBtn
 */
export interface GridListCard {
  id?: number;
  thumbUrl: string;
  title?: string;
  description?: string;
  description2?: string;
  description3?: string;
  badgeLabel?: BadgeLabel;
  actionBtn?: GridListActionBtn;
  actionBtn2?: GridListActionBtn;
  actionBtn3?: GridListActionBtn;
  actionBtn4?: GridListActionBtn;
}

interface BadgeLabel {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  label: string;
  color: 'primary' | ' danger' | 'warning' | 'info';
}

export interface GridListActionBtn {
  icon: string;
  tooltip: string;
  url?: string;
  state?: object;
}

export interface GridListAddBtn {
  icon: string;
  url: string;
}

export interface GridListPagination{
  currentPage: number
  previousPage: number | null
  nextPage: number | null
}


