<template>
            <div>
                <h1>Filters and Mixins</h>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-bind:key="fruit in filteredFruits>{{ fruit }}</li>
                </ul>    
            </div>

</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>
</style>