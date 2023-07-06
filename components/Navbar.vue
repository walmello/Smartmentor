<template>
    <div class="fixed-top container">
        <nav class="container">
            <img src="/logo.webp" alt="">
            <div>
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
                </ul>
                
                <ul>
                    <li>
                        <a class="btn" href="">Login</a>
                    </li>
                    <li>
                        <a class="btn primary" href="">Faça seu diagnóstico</a>
                    </li>                    
                </ul>
                
            </div>
        </nav>    
    </div>
</template>

<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 2rem #3333;
    background-color: var(--white);
}

nav div {
    display: flex;
    gap: 1.5rem;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
}

ul li {
    font-weight: 600; 
}

a {
    font-size: 14px;
    color: var(--black) !important;
}
</style>