<style scoped>
.header-bg {
    background-image: url("bg.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
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
            </header>
        </div>    
    </div>
</template>