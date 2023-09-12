<template>
    <nav class="navigation navigation--mobile">
        <ul class="navigation__list nav-list">
            <li class="nav-list__item nav-item">
                <a href="about" title="AboutMe" class="nav-item__link">AboutMe</a>
            </li>
            <li class="nav-list__item nav-item">
                <a href="works" title="Works" class="nav-item__link">Works</a>
            </li>
            <li class="nav-list__item nav-item">
                <a href="road" title="Road" class="nav-item__link">Road</a>
            </li>
            <li class="nav-list__item nav-item">
                <a href="contact" title="Contact" class="nav-item__link">Contact</a>
            </li>
        </ul>
        <button @click="$emit('closeMenu')" class="navigation__btn">X</button>
    </nav>
</template>

<script>
    export default {
        name: "MobileMenu",
    }
</script>
