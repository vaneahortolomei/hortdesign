<template>
    <MainSection>
        <div class="about about--white-bg">
            <div class="container">
                <h2 class="title about__title">Why Graphic Design?</h2>
                <div class="about__col">
                    <div class="about__inner-col inner-col">
                        <p class="description inner-col__description">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                            exerci
                            tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                            iriure
                            dolor
                            in hendrerit in vulputate velit ess</p>
                    </div>
                    <div class="about__inner-col about__inner-col--w inner-col">
                        <p class="description inner-col__description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit ess
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </MainSection>
    <ColorSection>
        <div class="about about--color-bg">
            <div class="container">
                <div class="about__img-wrapper">
                    <p class="about__big-title">About Me</p>
                    <img src="../../../assets/img/profile.png" alt="profile" class="about__img"/>
                </div>
                <h2 class="title about__title">The beginging is always hard.</h2>
                <div class="about__col">
                    <div class="about__inner-col inner-col">
                        <p class="description inner-col__description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        </p>
                        <p class="description inner-col__description">
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit ess
                        </p>
                        <p class="description inner-col__description">
                            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                            hendrerit
                            in vulputate velit ess
                        </p>
                    </div>
                    <div class="about__inner-col about__inner-col--img-block inner-col">
                        <h2 class="title about__title">The beginging is always hard.</h2>
                        <p class="description inner-col__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit ess</p>
                    </div>
                </div>
            </div>
        </div>
    </ColorSection>
</template>

<script>
    import ColorSection from "../ColorSection.vue";
    import MainSection from "../MainSection.vue";

    export default {
        name: "AboutSection",
        components: {MainSection, ColorSection}
    }
</script>
