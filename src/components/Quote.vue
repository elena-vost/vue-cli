<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subtitle">Tne subtilte</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        bos-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;

    }

    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
    </style>