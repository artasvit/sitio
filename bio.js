const members = {
    1: {
        name: "Artem",
        bio: "Me llamo Artem, tengo 18 años y me mudé a Buenos Aires hace un año y medio. Ahora estoy aprendiendo español para entrar a la universidad. Me interesa la informática, especialmente C++ y la programación competitiva. Me gusta resolver problemas difíciles y trabajar en mis propios proyectos.
Me encanta entrenar en el gimnasio y cuido mi alimentación. También disfruto de buenas películas, especialmente del estilo de Seven y Sueños de libertad (The Shawshank Redemption).",
        img: "avatar1.jpg"
    },
    2: {
        name: "Tu nombre",
        bio: "Tu biografia",
        //img: "avatar2.jpg"
    },
    3: {
        name: "Tu nombre",
        bio: "Tu biografia...",
        //img: "avatar3.jpg"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('member');
    const member = members[memberId];

    if (member) {
        document.getElementById('bioName').textContent = member.name;
        document.getElementById('bioText').textContent = member.bio;
        document.getElementById('bioAvatar').src = member.img;
        document.title = `${member.name} | Profile`;
    }
});
