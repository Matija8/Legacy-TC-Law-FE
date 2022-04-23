import { workAreas, WorkDomainId } from 'data/oblasti-rada';

const workDomainIdToDomainMap = new Map(
  workAreas.map((domain) => [domain.id, domain]),
);

export namespace WorkDomainUtil {
  export function findWorkDomainById(id: WorkDomainId | undefined) {
    if (!id) return null;
    const domain = workDomainIdToDomainMap.get(id);
    if (!domain) throw Error();
    return domain;
  }
}
