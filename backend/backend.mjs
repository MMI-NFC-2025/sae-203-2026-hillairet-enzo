import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

pb.autoCancellation(false); 

export async function getArtistesByDate() {
    return await pb.collection('artistes').getFullList({ 
        sort: 'date_representation' 
    });
}

export async function getScenesByName() {
    return await pb.collection('scenes').getFullList({ 
        sort: 'nom' 
    });
}

export async function getArtistesAlpha() {
    return await pb.collection('artistes').getFullList({ 
        sort: 'nom' 
    });
}

export async function getArtisteById(id) {
    return await pb.collection('artistes').getOne(id);
}

export async function getSceneById(id) {
    return await pb.collection('scenes').getOne(id);
}

export async function getArtistesBySceneId(idScene) {
    return await pb.collection('artistes').getFullList({
        filter: `scene = "${idScene}"`,
        sort: 'date_representation'
    });
}

export async function getArtistesBySceneName(nomScene) {
    return await pb.collection('artistes').getFullList({
        filter: `scene.nom = "${nomScene}"`,
        sort: 'date_representation',
        expand: 'scene'
    });
}

export async function addOrUpdateArtiste(data) {
    if (data.id) {
        return await pb.collection('artistes').update(data.id, data);
    } else {
        return await pb.collection('artistes').create(data);
    }
}

export async function loginUser(email, password) {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        return authData;
    } catch (error) {
        console.error("Erreur d'authentification :", error.message);
        return false;
    }
}

export function logoutUser() {
    pb.authStore.clear();
}