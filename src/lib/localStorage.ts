const SELECTED_SERVICE_BODY_ID_KEY = 'serviceBody';

export function getSelectedServiceBodyID(): number {
    let serviceBodyId = localStorage.getItem(SELECTED_SERVICE_BODY_ID_KEY);
    if (!serviceBodyId) {
        return null;
    }
    return parseInt(serviceBodyId);
}

export function setSelectedServiceBodyID(id: number): void {
    localStorage.setItem(SELECTED_SERVICE_BODY_ID_KEY, id.toString());
}
