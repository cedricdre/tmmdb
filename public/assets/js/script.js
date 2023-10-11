
fetch('./public/assets/api/movies.json')
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        let dataElement = data.results;
        dataElement.map((item) => {
            let id = item.id;
            let title = item.original_title;
            let resume = item.overview;
            let note = item.vote_average;
            let imgSrc = item.poster_path;
            
            let elementCard = document.getElementById('elementCard');
            let card = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" id="${id}">
                <div class="card mb-3 h-100 rounded rounded-4">
                <img src="${imgSrc}" class="poster_path card-img-top img-cover object-fit-cover rounded rounded-4" alt="...">
                    <div class="card-body">
                        <h3 class="text-primary-emphasis">${title}</h3>
                        <div class="bg-secondary text-primary-emphasis p-2 mb-3">
                        <i class="bi bi-star-fill star1"></i>
                        <i class="bi bi-star-fill star2"></i>
                        <i class="bi bi-star-fill star3"></i>
                        <i class="bi bi-star-fill star4"></i>
                        <i class="bi bi-star-fill star5"></i>
                        <span class="text-primary fw-bold">${note}</span>
                        </div>
                        <div class="scroll mb-0">
                            <p class="mb-0"><small>${resume}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
            elementCard.innerHTML += card;
    })
    // .then(dataNote => {
    //     let dataElement = dataNote.results;
    //     dataElement.map((item) => {
    //         let note = item.vote_average;

    //     const star1 = document.querySelector('.star1');
    //     const star2 = document.querySelector('.star2');
    //     const star3 = document.querySelector('.star3');
    //     const star4 = document.querySelector('.star4');
    //     const star5 = document.querySelector('.star5');

    //     const i = document.querySelector('i');
    //     let starNote = note / 2;

    //     const star = () => {
    //         if (starNote <= 1) {
    //             star1.classList.add('text-warning')
    //         }
    //         if (starNote <= 2) {
    //             star1.classList.add('text-warning')
    //             star2.classList.add('text-warning')
    //         }
    //         if (starNote <= 3) {
    //             star1.classList.add('text-warning')
    //             star2.classList.add('text-warning')
    //             star3.classList.add('text-warning')
    //         }
    //         if (starNote <= 4) {
    //             star1.classList.add('text-warning')
    //             star2.classList.add('text-warning')
    //             star3.classList.add('text-warning')
    //             star4.classList.add('text-warning')
    //         }
    //         if (starNote <= 5) {
    //             star1.classList.add('text-warning')
    //             star2.classList.add('text-warning')
    //             star3.classList.add('text-warning')
    //             star4.classList.add('text-warning')
    //             star5.classList.add('text-warning')
    //         }
    //     };
    //     i.addEventListener(star);
    // })

});
