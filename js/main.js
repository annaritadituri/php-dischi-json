'use strict';

//////////////////////////////////////////////////////////

const { createApp } = Vue

createApp({

    data() {
      return {
        urlAlbum: 'http://localhost:8888/php-dischi-json/server/server.php',
        album: [],
        pageTitle: 'Album collection'
      }
    },

    methods: {
        getAlbum() {

            axios.get(this.urlAlbum).then((response) => {
                this.album = response.data;
                console.log(this.album);
            });

        },
    },

    created() {
        this.getAlbum();
    }

}).mount('#app');
