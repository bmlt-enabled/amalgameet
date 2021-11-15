import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { setServiceBodyID } from './localStorage';
import type { ServiceBody } from '$lib/ServiceBody';

const serviceBodyStore: Writable<ServiceBody> = writable(null);
export const serviceBody = {
    subscribe: serviceBodyStore.subscribe,
    set: (serviceBody: ServiceBody) => {
        setServiceBodyID(serviceBody.id);
        serviceBodyStore.set(serviceBody);
    }
};
