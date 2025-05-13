document.addEventListener('DOMContentLoaded', () => {
    const fetch_btn = document.getElementById('fetch-btn');
    const axios_btn = document.getElementById('axios-btn');
    const container = document.getElementById('data-container');

    const showCharacter = (character) => {
        const containerCharacter = document.createElement("div");
        containerCharacter.className = "character";

        const title = document.createElement("h2");
        title.textContent = character['name'];

        const img = document.createElement("img");
        img.src = character['image'];

        const gender = document.createElement('span');
        gender.textContent = `Gender: ${character['gender']}`;

        const specie = document.createElement("span");
        specie.textContent = `Specie: ${character['species']}`;

        const status = document.createElement("span");
        status.textContent = `Status: ${character['status']}`;

        containerCharacter.appendChild(title);
        containerCharacter.appendChild(img);
        containerCharacter.appendChild(gender);
        containerCharacter.appendChild(specie);
        containerCharacter.appendChild(status);

        container.appendChild(containerCharacter);
    }
    
    const getCharactersFetch = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => {
                console.log("DATA: ", data);

                const charanters = data['results'];

                charanters.forEach(element => {
                    showCharacter(element);
                });
                
            })
            .catch(err => console.error("Error: ", err))
    }

    const getCharactersAxios = () => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                console.log("DATA: ", response);
                const charanters = response['data']['results'];

                charanters.forEach(element => {
                    showCharacter(element);
                })
            })
            .catch(err => console.log("Error: ", err))
    }

    fetch_btn.addEventListener('click', () => {
        getCharactersFetch();
    });

    axios_btn.addEventListener('click', () => {
        getCharactersAxios();
    });
});