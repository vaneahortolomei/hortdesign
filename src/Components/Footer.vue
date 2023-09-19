<template>
    <footer class="footer">
        <span class="footer__year">{{currentYear}}</span>
        <div class="footer__about">
            <address class="footer__address">Alexandru Hortolomei Frtizstraße 22, 68151 München</address>
            <address class="footer__address">
                <a href="mailto:sasha.hortolomei@gmail.com" class="footer__mail">sasha.hortolomei@gmail.com</a>
                <a href=“tel:49-157348-190-50” class="footer__link">+49 157348 190 50</a>
            </address>
        </div>
    </footer>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "Footer",
        setup() {
            const currentYear = ref(new Date().getFullYear());

            return {
                currentYear
            }
        }
    }
</script>
