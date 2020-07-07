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
    export default {
        data() {
            return {
                friuts: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        computed: {
            filterFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        }
    }
</script>

<style>
</style>