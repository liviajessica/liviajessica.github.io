var vm = new Vue({
    el: '#testimonials-api',
    components: {
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide
    },
    props: {
        numSlides: {
            type: Number,
            default: 4
        },
        itemsPerPageCssStyle: {
            type: String,
            default: "slider5buckets"
        }
    },
    data() {
        return {
            info: [],
            loading: true,
            errored: false
        }
    },
    mounted() {
        axios
            .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
            .then(response => {
                this.info = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
});

var vm = new Vue({
    el: '#help-api',
    data() {
        return {
            info: null,
            loading: true,
            errored: false
        }
    },
    mounted() {
        axios
            .get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
            .then(response => {
                this.info = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

AOS.init({
    offset: 200,
    duration: 2000,
});