const members = {
    1: {
        name: "Artem",
        bio: "sdfdfsfdsfdfs",
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
