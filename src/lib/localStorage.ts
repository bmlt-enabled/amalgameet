const SERVICE_BODY_ID_KEY = 'serviceBody';

export function getServiceBodyID(): number {
    let serviceBodyId = localStorage.getItem(SERVICE_BODY_ID_KEY);
    if (!serviceBodyId) {
        return null;
    }
    return parseInt(serviceBodyId);
}

export function setServiceBodyID(id: number): void {
    localStorage.setItem(SERVICE_BODY_ID_KEY, id.toString());
}
