import { HistoryLogType } from "../mongo/models/history"

export function createTypesMap() {
    const typesMap = new Map<HistoryLogType, string>()
  
    typesMap.set('added', 'Dodano do magazynu:')
    typesMap.set('distributed', 'Wyciągnięto z magazynu:')
    typesMap.set('modified', 'Zmodyfikowano w magazynie:')
    typesMap.set('removed', 'Usunięto z magazynu:')
    return typesMap
  }