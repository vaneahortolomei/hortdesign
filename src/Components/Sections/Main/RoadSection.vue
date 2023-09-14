<template>
    <MainSection>
        <div class="container">
            <div class="road-map">
                <div class="road-map__col road-map__col--img-list">
                    <div class="road-map__img-list img-list">
                        <h2 class="road-map__title big-title">Road</h2>
                        <img src="../../../assets/img/1.png" alt="" class="img-list__img">
                        <img src="../../../assets/img/2.png" alt="" class="img-list__img">
                        <img src="../../../assets/img/3.png" alt="" class="img-list__img">
                    </div>
                </div>
                <div class="road-map__col">
                    <div class="road-map__inner-col">
                        <ul class="road-years">
                            <li class="road-years__item">
                                <div>
                                    <span class="road-years__year">2017</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div>
                                    <span class="road-years__year">2018</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div>
                                    <span class="road-years__year">2019</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div>
                                    <span class="road-years__year">2021</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed
                                        diam nonummy</p>
                                </div>
                            </li>
                            <li class="road-years__item">
                                <div>
                                    <span class="road-years__year">2022</span>
                                    <p class="road-years__interval">Apr - July</p>
                                </div>
                                <div>
                                    <span class="road-years__title">The beginging</span>
                                    <p class="road-years__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing
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
