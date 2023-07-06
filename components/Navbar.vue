<template>
    <div class="fixed-top container">
        <nav class="container">
            <img src="logo.webp" alt="">
            <ul>
                <li>
                    <a href="">Quem somos</a>
                </li>
                <li>
                    <a href="">Como funciona?</a>
                </li>
                <li>
                    <a href="">Mentoria</a>
                </li>
                <li>
                    <a href="">Smartmentor</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
                <li>
                    <a class="btn" href="">Login</a>
                </li>
                <li>
                    <a class="btn primary" href="">Faça seu diagnóstico</a>
                </li>
            </ul>
        </nav>    
    </div>
</template>

<style>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 2rem #3333;
    background-color: var(--white);
}

nav ul {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
}

nav ul li {
    font-weight: 600; 
}

a {
    font-size: 14px;
}
</style>