import { workAreas, WorkDomain, WorkDomainId } from 'data/oblasti-rada';

const workDomainIdToDomainMap = new Map(
  workAreas.map((domain) => [domain.id, domain]),
);

export namespace WorkDomainUtil {
  export function findWorkDomainById(id: WorkDomainId | undefined) {
    if (!id) return null;
    return findWorkDomainByIdStrict(id);
  }

  function findWorkDomainByIdStrict(id: WorkDomainId | undefined) {
    if (!id) throw Error();
    const domain = workDomainIdToDomainMap.get(id);
    if (!domain) throw Error();
    return domain;
  }

  export function getShortTitle(domain: WorkDomain) {
    return domain.shortTitle || domain.title;
  }
}
