<style scoped>
.header-bg {
    background-image: url("/bg.svg");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position:  -30vh;
}

header {
    padding: 20vh;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
}

img {
    width: 400px;
    max-width: 100%;
}
</style>

<template>
    <div class="header-bg">
        <div class="container">
            <header class="text-center gap">
                <h1>Transforme sua idéia em um negócio de sucesso</h1>
                <p class="tx-big">
                    Oferecemos mentoria personalizada para startups em fase inicial. Nossa equipe de especialistas ajudará você a transformar sua ideia 
                    em um negócio lucrativo.
                </p>  
                <a class="btn primary" href="#">Faça seu diagnóstico gratuíto</a>  
                <img src="/guy.webp" alt="">
            </header>
        </div>    
    </div>
</template>