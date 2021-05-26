const showModal = document.querySelector(".c-modal");

class Search {
    constructor(isOpen) {
        this.isOpen = isOpen;
    }

    searchValue(e) {
        e.preventDefault();

        console.log(e.target.value);
    }

    openModal() {
        this.isOpen = true;
        showModal.style.display = "block";
    }
}

export default Search;
