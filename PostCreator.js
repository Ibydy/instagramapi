class PostCreator {
    constructor (postData) {
        this.postData = postData;

        this.createPost();
    }

    createPost() {
        this.element = document.createElement('div');
        this.element.classList = [...this.element.classList, 'col'];
        this.element.appendChild(this.createProfile());
        this.element.appendChild(this.createMainImg());
        this.element.appendChild(this.createLikes());
        this.element.appendChild(this.createTags());
        const grid = document.getElementsByClassName('grid')[0];
        grid.appendChild(this.element)
    };

    createProfileImg() {
        const profileImg = document.createElement("img");
        profileImg.setAttribute("src",  this.postData.user.profile_picture);
        profileImg.classList = [...profileImg.classList, 'profile-image'];
        return profileImg;
    };

    createProfileText() {
        const profileText = document.createElement("div");
        profileText.classList = [...profileText.classList, 'profile-text'];
        const profileNickName = document.createElement("div");
        profileNickName.innerText = this.postData.user.username;
        const profileFullName = document.createElement("span");
        profileFullName.innerText = this.postData.user.full_name;
        profileText.appendChild(profileNickName);
        profileText.appendChild(profileFullName);

        return profileText;
    }

    createProfile() {
        const profile = document.createElement('div');
        profile.classList = [...profile.classList, 'profile'];
        profile.appendChild(this.createProfileImg());
        profile.appendChild(this.createProfileText());
        return profile
    };

    createMainImg() {
        const img = document.createElement("img");
        img.setAttribute("src", this.postData.images.low_resolution.url);
        img.classList = [...img.classList, 'image'];
        return img;
    };

    createLikes() {
        const likes = document.createElement("div");
        likes.innerText = this.postData.likes.count;
        likes.onclick = () => alert(`id: ${this.postData.id}`);
        return likes;
    };

    createTags() {
        const tags = document.createElement("div");
        this.postData.tags.forEach((tag) => {
            const el = document.createElement("span");
            el.innerText = `#${tag}`;
            tags.appendChild(el);
        });
        return tags;
    };
}

module.exports.PostCreator = PostCreator;
