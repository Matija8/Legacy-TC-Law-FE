import { Employee } from 'data/employees';

export namespace EmployeeFns {
  export function getPageHref(employee: Employee) {
    const { pagePath } = employee;
    return pagePath ? `/nas-tim/${pagePath}` : '#';
  }

  export function getNameSurname(employee: Employee) {
    const { name, surname } = employee;
    return `${name} ${surname}`;
  }

  export function getLongTitle(employee: Employee) {
    return employee.longTitle || employee.title;
  }
}
