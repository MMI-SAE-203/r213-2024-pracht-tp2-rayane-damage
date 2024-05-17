<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { MaisonRecord } from '@/types'
import MaisonCard from'@/components/MaisonCard.vue'

const maisonsListe :MaisonRecord[] = [
  {
    adresse: 'X rue de X ville',
    collectionId: 'rpp079zfi15pr5i',
    collectionName: 'maisons',
    created: '2024-04-11 12:02:38.689Z',
    favori: 'false',
    id: 'n35b6wj4d6bennl',
    images: 'maison1_2XJ062587p.jpg',
    nbChambres: 4,
    nbSdb: 4,
    nomMaison: 'Maison1',
    prix: 1000000,
    surface: 200,
    updated: '2024-04-11 12:02:38.689Z'
  },
  {
    adresse: 'X rue de X ville',
    collectionId: 'rpp079zfi15pr5i',
    collectionName: 'maisons',
    created: '2024-04-11 12:04:37.945Z',
    favori: 'true',
    id: 'uopa0ufex91ii9j',
    images: 'maison2_y89eby1xUY.jpg',
    nbChambres: 4,
    nbSdb: 1,
    nomMaison: 'Maison2',
    prix: 800000,
    surface: 140,
    updated: '2024-04-11 12:04:37.945Z'
  },
  {
    adresse: 'X rue de X ville',
    collectionId: 'rpp079zfi15pr5i',
    collectionName: 'maisons',
    created: '2024-04-11 12:17:08.663Z',
    favori: 'false',
    id: 'ldvemgp8l5vbsso',
    images: 'maison3_94gxSJPvye.jpg',
    nbChambres: 2,
    nbSdb: 2,
    nomMaison: 'Maison3',
    prix: 300000,
    surface: 100,
    updated: '2024-04-11 12:20:07.687Z'
  },
  {
    adresse: 'X rue de X ville',
    collectionId: 'rpp079zfi15pr5i',
    collectionName: 'maisons',
    created: '2024-04-11 12:18:56.351Z',
    favori: 'true',
    id: 'b3bgbpj6qg1wswv',
    images: 'maison4_JrVwsuCzRx.webp',
    nbChambres: 2,
    nbSdb: 1,
    nomMaison: 'Maison4',
    prix: 249998,
    surface: 99,
    updated: '2024-04-11 12:18:56.351Z'
  },
  {
    adresse: 'X rue de X ville',
    collectionId: 'rpp079zfi15pr5i',
    collectionName: 'maisons',
    created: '2024-04-11 12:19:45.536Z',
    favori: 'false',
    id: '4kfevlu1uducfmd',
    images: 'maison5_Epj4BMu06X.jpg',
    nbChambres: 6,
    nbSdb: 4,
    nomMaison: 'Maison5',
    prix: 2500000,
    surface: 200,
    updated: '2024-04-11 12:19:45.536Z'
  }
]



</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-bind="maisonsListe[0]" />
</template>
