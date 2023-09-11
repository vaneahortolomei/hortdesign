<template>
    <header class="header">
            <div class="container">
                <div class="header__header">
                    <Logo class="header__log"/>
                    <button v-if="isMobile" @click="toggleMenu">Toggle Menu</button>
                    <component
                        class="header__navigation"
                        :is="currentMenuComponent"
                        v-if="menuOpen"
                        @closeMenu="closeMenu"
                    />
                </div>
            </div>
    </header>
</template>

<script>
    import {ref, computed, onMounted, onUnmounted} from 'vue';
    import Logo from "./Logo/Logo.vue";
    import DesktopMenu from "./Navigation/DesktoMenu.vue";
    import MobileMenu from "./Navigation/MobileMenu.vue";

    export default {
        name: "Header",
        components: {MobileMenu, DesktopMenu, Logo},
        setup() {
            const isMobile = ref(null);
            const menuOpen = ref(false);

            const toggleMenu = () => {
                menuOpen.value = true;
            };
            const closeMenu = () => {
                menuOpen.value = false;
            }


            const currentMenuComponent = computed(() => isMobile.value ? 'MobileMenu' : 'DesktopMenu');

            const handleResize = () => {
                isMobile.value = window.innerWidth <= 768;
                menuOpen.value = !isMobile.value;
            };

            onMounted(() => {
                handleResize();
                window.addEventListener('resize', handleResize);
            });

            onUnmounted(() => {
                window.removeEventListener('resize', handleResize);
            });

            return {
                currentMenuComponent,
                isMobile,
                toggleMenu,
                closeMenu,
                menuOpen
            }
        }
    }
</script>
