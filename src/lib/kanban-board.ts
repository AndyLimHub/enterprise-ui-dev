import { toKebabCase } from './to-kebab-case';

export const defaultStatuses = ['Backlog', 'Ready', 'In Progress', 'Completed'];

export class KanbanBoard {
  title: string;
  statuses: string[];
  url: string;

  constructor(title: string) {
    this.title = title;
    this.statuses = [...defaultStatuses];
    this.url = `https://example.com/boards/${toKebabCase(this.title)}`;
  }

  addStatus(status: string) {
    this.statuses.push(status);
  }

  async removeStatus(status: string) {
    const index = this.statuses.indexOf(status);
    if (index !== -1) {
      this.statuses.splice(index, 1);
    }
    return this.statuses.length;
  }
}
