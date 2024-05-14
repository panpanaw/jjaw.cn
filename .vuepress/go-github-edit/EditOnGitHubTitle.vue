<script setup lang="ts">
import { useGithubEditTitle } from "./githubedit";
const githubEditTitle = useGithubEditTitle();

</script>
<template>
    <span>{{ githubEditTitle }}</span>
</template>