import { writable } from 'svelte/store';

const tokenStore = writable(localStorage.getItem('token') || null);

tokenStore.subscribe(token => {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
});
export default tokenStore;
