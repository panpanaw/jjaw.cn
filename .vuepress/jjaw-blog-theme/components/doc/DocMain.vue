<script setup lang="ts">
import DocContent  from "./DocContent.vue";
import DocHeader from "./DocHeader.vue";


</script>
<template>
    <div class="doc-mian">
        <DocHeader class="doc-header"></DocHeader>
        <DocContent class="doc-content"></DocContent>
    </div>
</template>
<style scoped>
.doc-mian{
    /* overflow: hidden; */
}
.doc-header{
    margin-bottom: 1rem;
}
.doc-content{

}
</style>