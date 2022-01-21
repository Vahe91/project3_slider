const projects = [
    {
        title: 'Rostov-on-Don, Admiral',
        img: './images/Rostov-on-Don_Admiral.jpg',
        city: `Rostov-on-Don<br>LCD admiral`,
        area: 81,
        time: '3.5 months',
        cost: 'Upon request'
    }, {
        title: 'Sochi Thieves',
        img: './images/Sochi_Thieves.jpg',
        city: `Sochi<br>Thieves`,
        area: 105,
        time: '4 months',
        cost: 'Upon request'
    }, {
        title: 'Rostov-on-Don Patriotic',
        img: './images/Rostov-on-Don_Patriotic.jpg',
        city: `Rostov-on-Don<br>Patriotic`,
        area: 93,
        time: '3 months',
        cost: 'Upon request'
    }
];

function initSlider() {
    if (!projects || !projects.length) return;

    const nav = document.querySelector('.projects-navigation');
    const sliderImages = document.querySelector('.projects-main__image');
    const infoData = document.querySelector('.projects-main__info-data');
    const sliderArrows = document.querySelectorAll('.slider__arrow');
    const sliderDots = document.querySelector('.slider-dots');

    initTitles();
    initImages();
    initInfo();
    initArrows();
    initDots();

    function initTitles() {
        projects.forEach((project, index) => {
            let titleLi = `<li class="projects-navigation__item n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${project.title}</li>`;
            nav.innerHTML += titleLi;
        });

        nav.querySelectorAll('.projects-navigation__item').forEach(title => {
            title.addEventListener('click', function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initImages() {
        projects.forEach((project, index) => {
            let imageDiv = `<div 
                                class="image n${index} ${index === 0 ? 'active' : ''}" 
                                style = "background-image: url(${project.img});"
                                data-index="${index}">
                            </div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initInfo() {
        projects.forEach((project, index) => {
            let dataDiv = `
            <div class="projects-main__info-data__items n${index} ${index === 0 ? 'active': ''}" data-index="${index}">
                <div  class="projects-main__info-data__item">
                    <h3 class="subtitle">City:</h3>
                    <span>${project.city}</span>
                </div>
                <div  class="projects-main__info-data__item">
                    <h3 class="subtitle">apartment area:</h3>
                    <span>${project.area} m2</span>
                </div>
                <div  class="projects-main__info-data__item">
                    <h3 class="subtitle">Repair time:</h3>
                    <span>${project.time}</span>
                </div>
                <div  class="projects-main__info-data__item">
                    <h3 class="subtitle">Repair Cost:</h3>
                    <span>${project.cost}</span>
                </div>
            </div>
            `;
            infoData.innerHTML += dataDiv;
        });
    }

    function initArrows() {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if(arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0 ? projects.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === projects.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            })
        })
    }

    function initDots() {
        projects.forEach((project, index) => {
            let dot = `<div class="slider-dot n${index} ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
            sliderDots.innerHTML += dot;
        })

        sliderDots.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        nav.querySelector('.active').classList.remove('active');
        nav.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        infoData.querySelector('.active').classList.remove('active');
        infoData.querySelector('.n' + num).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', initSlider);