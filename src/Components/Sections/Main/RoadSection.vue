<template>
    <MainSection>
        <div class="container">
            <div class="road-map">
                <div class="road-map__col road-map__col--img-list">
                    <div class="road-map__img-list img-list">
                        <h2 class="big-title img-list__title">Road</h2>
                        <div class="img-list__img-wrap">
                            <img src="../../../assets/img/example_1.png" alt=""
                                 class="img-list__img">
                        </div>
                        <div class="img-list__img-wrap img-list__img-wrap--big">
                            <img src="../../../assets/img/example_2.png" alt=""
                                 class="img-list__img">
                        </div>
                        <div class="img-list__img-wrap img-list__img-wrap--small">
                            <img src="../../../assets/img/example_3.png" alt=""
                                 class="img-list__img">
                        </div>
                    </div>
                </div>
                <div class="road-map__col">
                    <div class="road-map__inner-col">
                        <ul class="road-years">
                            <li class="road-years__item">
                                <div class="road-years__options">
                                    <span class="road-years__year">2017</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc description">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div class="road-years__options">
                                    <span class="road-years__year">2018</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc description">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div class="road-years__options">
                                    <span class="road-years__year">2019</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc description">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div class="road-years__options">
                                    <span class="road-years__year">2021</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc description">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div class="road-years__options">
                                    <span class="road-years__year">2022</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc description">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </MainSection>
</template>

<script>
    import MainSection from "../MainSection.vue";

    export default {
        name: "RoadSection",
        components: {MainSection}
    }
</script>
