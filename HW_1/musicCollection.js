const musicCollection =
{
    collections: [

        {
            title: "title1",
            artist: "artist1",
            year: "year1"
        },
        {
            title: "title2",
            artist: "artist2",
            year: "year2"
        },
        {
            title: "title3",
            artist: "artist3",
            year: "year3"
        },

    ],

    [Symbol.iterator]: function () {
        let index = 0;
        const collection = this.collections;
        return {
            next: function() {
                return index < collection.length ? { done: false, value: collection[index++] } : { done: true };
            }
        }
    }
};

for (const music  of musicCollection) {
    console.log(music.title, music.artist, music.year);
}