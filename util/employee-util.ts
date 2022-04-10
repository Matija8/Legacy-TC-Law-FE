import { Employee } from 'data/employees';

export function getPageHrefForEmployee(employee: Employee) {
  const { pagePath } = employee;
  return pagePath ? `/nas-tim/${pagePath}` : '#';
}
