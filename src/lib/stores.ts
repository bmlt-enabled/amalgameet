import { get, writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';
import { setSelectedServiceBodyID } from '$lib/localStorage';
import { ServiceBody } from '$lib/ServiceBody';

const selectedServiceBodyStore: Writable<ServiceBody> = writable(null);
export const selectedServiceBody = {
    subscribe: selectedServiceBodyStore.subscribe,
    set: (serviceBody: ServiceBody) => {
        if (serviceBody) {
            setSelectedServiceBodyID(serviceBody.id);
        }
        selectedServiceBodyStore.set(serviceBody);
    }
};

export interface ServiceBodiesStore extends Readable<ServiceBody[]> {
    initialize(): void;
}
const serviceBodiesStore: Writable<ServiceBody[]> = writable(null);
export const serviceBodies: ServiceBodiesStore = {
    subscribe: serviceBodiesStore.subscribe,
    initialize: async () => {
        if (get(serviceBodiesStore) === null) {
            try {
                const url = 'https://s3.amazonaws.com/archives.bmlt.app/data/service-bodies.json';
                const response = await fetch(url);
                const serviceBodiesJson = (await response.json()) as any[];
                const _serviceBodies = serviceBodiesJson.map((sb) => new ServiceBody(sb.id, sb.name));
                serviceBodiesStore.set(_serviceBodies);
            } catch (error) {
                // TODO
                console.log('Error:', error);
            }
        }
    }
};
