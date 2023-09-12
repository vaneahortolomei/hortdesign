<template>
    <div class="wrapper">
        <Header/>
        <div class="content">
            <div class="main">
                <HeaderSection>
                    <div class="container">
                        <IntroSection/>
                    </div>
                </HeaderSection>
                <AboutSection/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import Header from "./src/Components/Header.vue";
    import Footer from "./src/Components/Footer.vue";
    import HeaderSection from "./src/Components/Sections/HeaderSection.vue";
    import IntroSection from "./src/Components/Sections/Main/IntroSection.vue";
    import MainSection from "./src/Components/Sections/MainSection.vue";
    import AboutSection from "./src/Components/Sections/Main/AboutSection.vue";

    export default {
        components: {AboutSection, MainSection, IntroSection, HeaderSection, Footer, Header}
    }
</script>
