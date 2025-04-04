const members = {
    1: {
        name: "Artem",
        bio: "Me llamo Artem, tengo 18 años y me mudé a Buenos Aires hace un año y medio. Ahora estoy aprendiendo español para entrar a la universidad. Me interesa la informática, especialmente C++",
        img: "avatar1.jpg"
    },
    2: {
        name: "Mateo",
        bio: "Hola, mi nombre es Mateo, me gusta comer empanadas, jugar Brawl Stars y competir en Jerkmate. También me encanta rapear y ya he grabado varios discos.",
        img: "avatar2.jpg"
    },
    3: {
        name: "Lalo",
        bio: "hola, soy lalo, tengo 17 años y me gusta jugar al rugby y ir al gimnasio y tambien hacer planes con mis amigos. suka",
        img: "avatar3.jpg"
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
