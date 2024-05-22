function criarTabelas(){
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr_name = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = "nome";
    td_nome.colSpan = 5;

    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    tr_name.appendChild(td_nome);
    thead.appendChild(th_B);
    thead.appendChild(th_I);
    thead.appendChild(th_N);
    thead.appendChild(th_G);
    thead.appendChild(th_O);

    for(let i = 0; i < 5; i++){
        const tr = document.createElement("tr");
        for(let i = 0; i < 5; i++){
            const td = document.createElement("td");
            td.innerHTML = "VASCO";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

}

function pedirNomeECriarTabela(){
    const nome = prompt("Digite o seu nome:");
}