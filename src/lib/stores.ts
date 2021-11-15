import { get, writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';
import { setSelectedServiceBodyID } from '$lib/localStorage';
import { ServiceBody } from '$lib/ServiceBody';

const selectedServiceBodyStore: Writable<ServiceBody> = writable(null);
export const selectedServiceBody = {
    subscribe: selectedServiceBodyStore.subscribe,
    set: (serviceBody: ServiceBody) => {
        setSelectedServiceBodyID(serviceBody.id);
        selectedServiceBodyStore.set(serviceBody);
    }
};

export interface ServiceBodiesStore extends Readable<ServiceBody[]> {
    initialize(): void;
}
const serviceBodiesStore: Writable<ServiceBody[]> = writable(null);
export const serviceBodies: ServiceBodiesStore = {
    subscribe: serviceBodiesStore.subscribe,
    initialize: () => {
        if (get(serviceBodiesStore) === null) {
            // TODO: fetch this from some server
            serviceBodiesStore.set([new ServiceBody(1, 'Carolina Region'), new ServiceBody(2, 'New England Region')]);
        }
    }
};
