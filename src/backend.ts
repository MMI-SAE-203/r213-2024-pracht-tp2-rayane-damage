import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information
export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records;
}

export async function oneID(id) {
    const oneRecord = await pb.collection('maison').getOne(id);
    return oneRecord;
}

export async function allMaisonsFavori() {
    const favRecords = await pb.collection('maison').getFullList({filter: 'favori'});
    return favRecords;
}

export async function allMaisonsSorted() {
    const sortedRecords = await pb.collection('maison').getFullList({sort: 'prix'});
    return sortedRecords;
}

export async function bySurface(s) {
    const surfaceRecords = await pb.collection('maison').getFullList({filter: `surface > ${s}`});
    return surfaceRecords;
}

export async function surfaceORprice(s, p) {
    const sORpRecords = await pb.collection('maison').getFullList({filter: `surface > ${s}` || `prix < ${p}` });
    return sORpRecords;
}

export async function agent(id) {
    const agentRecord = await pb.collection('agents').getOne(id);
    return agentRecord;
}