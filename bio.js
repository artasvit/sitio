const members = {
    1: {
        name: "Tu nombre",
        bio: "Ваша биография...",
        img: "avatar1.png"
    },
    2: {
        name: "Друг 1",
        bio: "Биография друга 1...",
        img: "avatar2.jpg"
    },
    3: {
        name: "Друг 2",
        bio: "Биография друга 2...",
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
        document.title = `${member.name} | Профиль`;
    }
});
