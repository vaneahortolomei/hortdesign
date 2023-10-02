<template>
    <ColorSection>
        <div class="works">
            <img src="../../../assets/img/works.png" alt="" class="works__img">
            <div class="container">
                <div class="works__category works-category">
                    <p class="works-category__info description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit ess
                    </p>
                    <div class="works-category__list-wrapper">
                        <ul class="works-category__list">
                            <li class="works-category__item works-category__item--ipd clickable">
                                <img src="../../../assets/img/works-table.png" alt="" class="works-category__img">
                                <a href="#" class="works-category__link clickable__button" title="IPD"/>
                                <div class="works-category__options">
                                    <p class="works-category__option-title">IPD</p>
                                    <span class="works-category__option-subtitle">Industrial Product Design</span>
                                </div>
                            </li>
                            <li class="works-category__item works-category__item--gd clickable">
                                <img src="../../../assets/img/works-table.png" alt="" class="works-category__img">
                                <a href="#" class="works-category__link clickable__button" title="GD"/>
                                <div class="works-category__options">
                                    <p class="works-category__option-title">GD</p>
                                    <span class="works-category__option-subtitle">Graphic Design</span>
                                </div>
                            </li>
                            <li class="works-category__item works-category__item--pd clickable">
                                <img src="../../../assets/img/works-table.png" alt="" class="works-category__img">
                                <a href="#" class="works-category__link clickable__button" title="PD"/>
                                <div class="works-category__options">
                                    <p class="works-category__option-title">PD</p>
                                    <span class="works-category__option-subtitle">Packaging Design</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="works-category__title-wrapper">
                        <h2 class="works-category__title big-title">Works</h2>
                        <button type="button" class="works-category__btn decoration-btn decoration-btn--black" @click="goToTop">Back</button>
                    </div>
                </div>
            </div>
        </div>
    </ColorSection>
</template>

<script>
    import ColorSection from "../ColorSection.vue";

    export default {
        name: "WorksSection",
        components: {ColorSection},
        setup() {
            const goToTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };

            return {goToTop}
        }
    }
</script>
