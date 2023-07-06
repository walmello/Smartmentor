<template>
  <Navbar/>
  <NuxtPage/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap');

:root {
    --blue: #2C98F0;
    --green: #00FFC2;
    --black: #333;
    --white: #fafafa;
}

* {
    transition: all 0.2s ease-in-out;
}

html {
    font-size: 16px;
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
}

* {
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3rem;
}

h3 {
    font-size: 2rem;
}

p {
    font-size: 1rem;
}

a {
    color: var(--blue);
    font-weight: 600;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: #5dF;
}

/* layout */

.row {
    display: flex;
    flex-direction: row;
}

.col {
    display: flex;
    flex-direction: column;
}

.between {
    justify-content: space-between;
}

.container {
    width: 1200px;
    margin: auto;
    max-width: 100%;
}

.container.short {
    width: 900px;
}

.full-vh {
    height: 100vh;
}

.fixed-top {
    position: fixed;
    width: 100%;
    margin-top: 1rem;
}

/* buttons */

.btn {
    --font-color: var(--black);
    --bg-color: var(--white);
    --border-color: var(--black);
    display: inline-block;
    box-shadow: 0px 0px 2rem #3332;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    color: var(--font-color);
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
}

.btn:hover {
    box-shadow: 0px 0px 4rem #3332;
    transform: translateY(-0.1rem);
    text-decoration: none;
    color: var(--bg-color);
    border: 1px solid var(--font-color);
    background-color: var(--font-color);
}

.btn.primary {
    --font-color: var(--black);
    --bg-color: var(--green);
}

</style>

