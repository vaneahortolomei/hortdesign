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
                <RoadSection/>
                <WorksSection/>
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
    import RoadSection from "./src/Components/Sections/Main/RoadSection.vue";
    import WorksSection from "./src/Components/Sections/Main/WorksSection.vue";

    export default {
        components: {WorksSection, RoadSection, AboutSection, MainSection, IntroSection, HeaderSection, Footer, Header}
    }
</script>
