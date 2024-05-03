<script setup lang="ts">
import type { MaisonRecord } from '@/types'

const props: MaisonResponse = defineProps<MaisonRecord>()
</script>

<template>
  <div class="border-2 p-1">
    <p>adresse : {{ adresse }}</p>
    <p>collection : {{ collectionId }}</p>
    <p>collection : {{ collectionName }}</p>
    <p>crée le : {{ created }}</p>
    <p>favori : {{ favori }}</p>
    <p>id : {{ id }}</p>
    <p>image : {{ images }}</p>
    <p>nombre de chambres : {{ nbChambres }}</p>
    <p>age : {{ nbSdb }}</p>
    <p>nom de la maison : {{ nomMaison }}</p>
    <p>prix : {{ prix }}</p>
    <p>surface : {{ surface }}</p>
    <p>dernière mise à jour le : {{ updated }}</p>
  </div>
</template>
