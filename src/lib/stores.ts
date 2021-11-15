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
            const fetchOptions = { headers: { 'user-agent': navigator.userAgent + ' +amalgameet' } };
            fetch(`https://s3.amazonaws.com/archives.bmlt.app/data/service-bodies.json`, fetchOptions)
                .then((response) => response.json())
                .then((serviceBodiesJson: any[]) => serviceBodiesJson.map((sb) => new ServiceBody(sb.id, sb.name)))
                .then((serviceBodies) => serviceBodiesStore.set(serviceBodies))
                .catch((error) => {
                    // TODO
                    console.log('Error:', error);
                });
        }
    }
};
