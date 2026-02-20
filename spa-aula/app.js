const app = document.getElementById("app");

const pages = {

    "/": () => `
    <section class="card">
    <h2>Início</h2> 
    <p>Isso é uma SPA: navegação sem recarregar a página.</p>
    <p>Use o menu para trocar de pagina</p>
    `,

    "/alunos": () => {
        const alunos = ["Ana", "Bruno", "Carlos", "Diana"];
        return `
       <section class="card">
       <h2>Alunos</h2>
       <ul>
        ${alunos.map((a) => `<li> ${a}</li>`).join("")}
       </ul>
       </section>
       `;
    },

    "/sobre": () => {
        return`
        <section class="card">
        <h2>Sobre</h2>
        <p>Exemplo simples de roteamento no front-end (sem framework).</p>
        <p>Próximo passo: carregar dados via fetch e criar componentes.</p>
        </section>
    `;
    
    },

    "/cursos": () => {
        const cursos = ["Administração", "Automação Inustrial","Desenvolvimento de Sistemas", "Mecatrônica", "Recursos Humanos"];
        return `
       <section class="card">
       <h2>Cursos</h2>
       <ul>
        ${cursos.map((b) => `<li> ${b}</li>`).join("")}
       </ul>
       </section>
       `;
    },

     "/professores": () => {
        const professores = ["Ederson", "Jair","Mauricio", "Simone", "Sinzomar"];
        return `
       <section class="card">
       <h2>Professores</h2>
       <ul>
        ${professores.map((c) => `<li> ${c}</li>`).join("")}
       </ul>
       </section>
       `;
    },
};

function setActiveLink(path) {
    document.querySelectorAll("a[data-link]").forEach((a) => {
        const isActive = a.getAttribute("href") === path;
        a.classList.toggle("active", isActive);
    });
}

function setActiveLink(path) {
    document.querySelectorAll("a[data-link]").forEach((b) => {
        const isActive = b.getAttribute("href") === path;
        b.classList.toggle("active", isActive);
    });
}

function setActiveLink(path) {
    document.querySelectorAll("a[data-link]").forEach((c) => {
        const isActive = c.getAttribute("href") === path;
        c.classList.toggle("active", isActive);
    });
}

function render() {
    const path = window.location.pathname;
    const page = pages[path] ?? (() => `
    <section class="card">
    <h2>Erro 404</h2>
    <p>Rota não encontrada:<code>${path} </code></p>
    <p><a href="/" data-link>Voltar ao Início</a></p>
    </section>
    `);

    app.innerHTML = page();
    setActiveLink(path);
}

function navigateTo(url) {
    history.pushState(null, "", url);
    render();
}

//intercepta cliques nos links do menu
document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-link]");

    if (!a)
        return;

    e.preventDefault();

    navigateTo(a.getAttribute("href"));
});

document.addEventListener("click", (e) => {
    const b = e.target.closest("b[data-link]");

    if (!b)
        return;

    e.preventDefault();

    navigateTo(b.getAttribute("href"));
});

document.addEventListener("click", (e) => {
    const c = e.target.closest("c[data-link]");

    if (!c)
        return;

    e.preventDefault();

    navigateTo(c.getAttribute("href"));
});

// Voltar ou Avançar do navegador
window.addEventListener("popstate", render);

//primeira renderização
render();


//Rodar sempre utilizando o arquivo no c: e depois abrir o terminal do vs e digitar npx serve .