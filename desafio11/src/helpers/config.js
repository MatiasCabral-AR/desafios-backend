const EXP_TIME = 200000 ;
const DATABASE_URL = 'mongodb+srv://admin:D4Z3hFdGnvWTasOm@techwearclubar.xtw4azf.mongodb.net/sessions?retryWrites=true&w=majority';
const MONGO = {
    connection: "mongodb+srv://admin:D4Z3hFdGnvWTasOm@techwearclubar.xtw4azf.mongodb.net/sessions?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
const TWITTER_CONSUMER_KEY = "YlwUZOXrEdjO6LMMCKsjZrb1a"
const TWITTER_CONSUMER_SECRET = "bGO8CcdmWhedmICKZR9zdDnSXCOdF3A7bVKZhcSKyTAkHhweT4"

export default {EXP_TIME, DATABASE_URL, MONGO, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET}