

const store = {
    listeners: [],
    subscribe(listener) {
        this.listeners.push(listener)
    },
    state: {
        topics: [
            "java",
            "javascript",
            "scala",
            "groovy",
            "phython"
        ],
        comments: {
            "java": [
                "java is my first programming language",
                "best one",
                "i earned much thru this language"
            ]
        }
    },
    getState() {
        return this.state;
    }
}

let i = 0
setInterval(() => {
    i++
    store.state.topics.unshift("New Topic " + i)
    store.listeners.forEach(listener => {
        listener();
    })
}, 10000)

export default store