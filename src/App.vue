<template>
    <div class="container">
        <app-new-quote @quoteAdded="NewQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function(){
            return {
                quotes: {
                    "Just a Quote to see something"
                },
                maxQuotes: 10
            }
        },
        methods: {
            NewQuote(quote){
                this.quotes.push(quote);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
