let get = (target) => document.querySelector(target);
let getAll = (target) => document.querySelectorAll(target);

let arrPhotoList = [
    { id: 1, name: '바이올린', comment: '바이올린은 우아한 음색과 뛰어난 표현력으로 클래식 음악에서 중요한 역할을 하며, 솔로 및 앙상블 연주 모두에서 사랑받는 악기입니다.' },
    { id: 2, name: '그랜드피아노', comment: '그랜드피아노는 풍부하고 깊이 있는 음향을 제공하여 콘서트홀에서 가장 많이 사용되는 악기 중 하나로, 다양한 음악 장르에서 그 매력을 발휘합니다.' },
    { id: 3, name: '피아노', comment: '피아노는 클래식, 재즈, 팝 등 다양한 장르에서 활용되는 다재다능한 악기로, 풍부한 화음과 멜로디를 동시에 연주할 수 있는 능력을 지니고 있습니다.' },
    { id: 4, name: '일렉기타', comment: '일렉기타는 록 음악의 상징으로, 강렬한 사운드와 다양한 이펙트를 통해 음악의 에너지를 극대화하며, 솔로와 리프 연주에 모두 적합합니다.' },
    { id: 5, name: '키보드', comment: '키보드는 다양한 악기 소리를 재현할 수 있는 전자 악기로, 현대 음악에서 필수적인 요소로 자리 잡았으며, 특히 라이브 공연에서 많은 사랑을 받고 있습니다.' },
    { id: 6, name: '드럼', comment: '드럼은 밴드의 리듬을 담당하며, 다양한 장르에서 그 존재감을 드러내는 악기로, 강렬한 비트와 다이나믹한 연주로 음악의 에너지를 이끌어냅니다.' },
    { id: 7, name: '기타', comment: '기타는 폭넓은 장르에서 활용되는 대중적인 현악기로, 솔로 연주뿐만 아니라 밴드의 리듬을 지원하며, 다양한 스타일과 테크닉으로 무한한 표현력을 가지고 있습니다.' },
    { id: 8, name: '마이크', comment: '마이크는 가수의 목소리를 청중에게 전달하는 필수 장비로, 음질과 감도를 고려하여 선택하는 것이 중요하며, 라이브 공연의 성공에 큰 영향을 미칩니다.' },
];

const photoListMake = () => {
    // default declare
    let $size = arrPhotoList.length;
    let $photoList = get('.photoList');
    let $ul = get('.photoList ul');
    let $bg = get('.bg');
    let $desc = get('.desc');
    let inner = get('#main .inner');
    let cnt = 0;
    let playFlag = false;

    // outer div declare
    let $imgs = '';
    let $lis = '';

    // inner div declare
    let $h2 = '';
    let $h3 = '';
    let $p = '';
    let $closeBtn = '';
    let $prevBtn = '';
    let $nextBtn = '';
    let $imgLarge = '';
    let $play = '';

    let timer = null,
        interval = 2000;

    const repeat = () => {
        // select css reset & apply
        $lis.forEach((li, idx) => {
            li.classList.remove('active');
        });
        $lis[cnt].classList.add('active');

        $h2.textContent = arrPhotoList[cnt].name;
        $imgLarge.style.backgroundImage = `url(images/big/photo${cnt + 1}.png)`;
        $h3.textContent = arrPhotoList[cnt].comment;
        $p.textContent = `${cnt + 1} / ${$size}`;
    };

    const autoRolling = () => {
        cnt = cnt < 7 ? cnt + 1 : (cnt = 0);
        repeat();
    };

    // outer div, photo drawing
    for (let i = 0; i < $size; i++) {
        $imgs = document.createElement('img');
        $lis = document.createElement('li');

        $imgs.setAttribute('src', `images/small/photo${i + 1}.png`);

        $lis.append($imgs);
        $ul.append($lis);
    }

    // outer div declare
    $imgs = getAll('.photoList ul li img');
    $lis = getAll('.photoList ul li');

    // inner div declare
    $h2 = document.createElement('h2');
    $imgLarge = document.createElement('div');
    $h3 = document.createElement('h3');
    $p = document.createElement('p');
    $closeBtn = document.createElement('i');
    $prevBtn = document.createElement('i');
    $nextBtn = document.createElement('i');
    $play = document.createElement('i');

    // inner div setting
    $closeBtn.classList.add('xi-close-square-o');
    $prevBtn.classList.add('xi-location-arrow');
    $nextBtn.classList.add('xi-location-arrow');
    $play.classList.add('xi-play-circle');

    $prevBtn.style.transform = `rotate(226deg)`;
    $prevBtn.classList.add('left');
    $nextBtn.style.transform = `rotate(45deg)`;
    $nextBtn.classList.add('right');

    // photo click
    $lis.forEach((li, idx) => {
        li.addEventListener('click', (e) => {
            cnt = idx;
            li.classList.toggle('active');

            $bg.classList.add('on');
            $desc.classList.add('on');

            // play state reset
            playFlag = true;
            $play.classList.replace('xi-play-circle', 'xi-pause-circle');

            // inner div update
            $h2.textContent = arrPhotoList[cnt].name;
            $imgLarge.style.backgroundImage = `url(images/big/photo${cnt + 1}.png)`;
            $h3.textContent = arrPhotoList[cnt].comment;
            $p.textContent = `${cnt + 1} / ${$size}`;

            // div append
            $desc.append($h2, $h3, $p, $closeBtn, $prevBtn, $nextBtn, $imgLarge, $play);
            inner.append($desc);

            clearInterval(timer);
            timer = setInterval(autoRolling, interval);
        });
    });

    // background click, inner div active
    $bg.addEventListener('click', (e) => {
        $bg.classList.remove('on');
        $desc.classList.remove('on');

        $lis[cnt].classList.remove('active');
        clearInterval(timer);
    });

    // close button
    $closeBtn.addEventListener('click', (e) => {
        $bg.classList.remove('on');
        $desc.classList.remove('on');

        $lis[cnt].classList.remove('active');
        clearInterval(timer);
    });

    // Prev button
    $prevBtn.addEventListener('click', (e) => {
        cnt = cnt > 0 ? cnt - 1 : (cnt = 7);

        repeat();
        if (!playFlag) clearInterval(timer);
    });

    // Next button
    $nextBtn.addEventListener('click', (e) => {
        cnt = cnt < 7 ? cnt + 1 : (cnt = 0);

        repeat();
        if (!playFlag) clearInterval(timer);
    });

    // play & pause button
    $play.addEventListener('click', (e) => {
        playFlag = !playFlag;
        if (playFlag) {
            $play.classList.replace('xi-play-circle', 'xi-pause-circle');
            timer = setInterval(autoRolling, interval);
        } else {
            $play.classList.replace('xi-pause-circle', 'xi-play-circle');
            clearInterval(timer);
        }
    });
};

(() => {
    photoListMake();
})();
