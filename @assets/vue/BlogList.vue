<!-- 显示文章列表的组件 -->
<script setup lang="ts">
import { type MyTimes } from '../composables/Blog';
import { dateFormat } from '../composables/Time';

const props = defineProps<{ list?: MyTimes[] }>();
const tiemF = (tiem: number) => dateFormat(new Date(tiem), (Y, M, D, h, m) => `${Y}-${M}-${D} ${h}:${m}`);



</script>
<template>
    <div v-if="props.list" class="list">
        <div v-for="{ path, info } in props.list" class="time">
            <RouterLink :to="path">
                <h4>{{ info.title }}</h4>
                <div v-if="info.git && (info.git.updatedTime || info.git.commitMaxPerson)" class="tiem-person">
                    <span v-if="info.git.commitMaxPerson" class="person">{{ info.git.commitMaxPerson.name }}</span>
                    <span v-if="info.git.updatedTime">{{ tiemF(info.git.updatedTime) }}</span>
                </div>
                <p v-if="info.description">{{ info.description }}</p>
            </RouterLink>
        </div>
    </div>
    <div v-else  class="list">
        没有任何文章
    </div>
</template>

<style scoped>
.title {
    text-align: center;
    width: 100%;
    font-size: 2rem;
}
.tiem-person{
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
}
.person{
    font-weight: bolder;
    margin-right: 0.5rem;
}
.time h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.time>a:hover {
    color: var(--color-link);
}

.time>a {
    color: var(--color);
    text-decoration: none;
}

.time p {
    font-size: 1.2rem;
    opacity: 0.8;
}

.time {
    padding: 0rem 1rem 1rem 1rem;
    border-bottom: 0.1rem solid var(--border-color);
    width: 20rem;
    margin: 2rem;
}

.title {
    text-align: center;
    width: 100%;
    font-size: 2rem;
}

.list {
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    align-items: stretch;
}

@media(max-width: 790px) {
    .list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }

    .time {
        width: auto;
        margin: 2rem;
    }
}
</style>