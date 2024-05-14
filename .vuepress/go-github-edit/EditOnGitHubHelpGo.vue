<script setup lang="ts">
import { useGithubEditUrl } from "./githubedit";
const githubEditUrl = useGithubEditUrl();

</script>
<template>
    <a :href="githubEditUrl" target="_blank">
        <slot></slot>
    </a>
</template>