const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};

const data = [
    { id: 1, price: 4000, img: './images/thum0.jpg' },
    { id: 2, price: 7500, img: './images/thum1.jpg' },
    { id: 3, price: 12000, img: './images/thum2.jpg' },
    { id: 4, price: 15300, img: './images/thum3.jpg' },
    { id: 5, price: 32500, img: './images/thum4.jpg' },
    { id: 6, price: 1435000, img: './images/thum5.jpg' },
    // { id: 7, price: 89900, img: './images/thum6.jpg' },
    // { id: 8, price: 211400, img: './images/thum7.jpg' },
];
let cnt = [0, 0, 0, 0, 0, 0]; // 상품 갯수
let won = [0, 0, 0, 0, 0, 0]; // 상품 가격
let totalcount = 0; // 총가격

const $ul = get('.inner ul');
const $p = get('.inner p');
const $total = get('.inner .result');
const $resetBtn = get('.inner .reset');
let $minusBtn = '';
let $plusBtn = '';
let $delBtn = '';
let $money = '';
let $spanIndex = '';
let $calMoney = '';

const allCount = (num) => {
    totalcount = 0;
    $money.forEach((money, idx) => {
        // 선택된 idx이며 갯수가 0이 아닐 때
        if (cnt[idx] >= 0) {
            if (num === idx) {
                won[idx] = $spanIndex[idx].textContent * data[idx].price; // 갯수 * 가격
            }
        }
        totalcount += won[idx]; // 총 가격에 해당 상품의 가격 가산
    });
    $total.textContent = `총금액 : ${totalcount} 원`;

    // 상품별 가격 계산
    let calMoney = cnt[num] * data[num].price;
    calMoney === 0 ? ($calMoney[num].textContent = '') : ($calMoney[num].textContent = `${cnt[num] * data[num].price} 원`);
};

const itemList = () => {
    // innerHTML로 태그 동적 할당
    data.forEach((item, idx) => {
        let print = `
            <li data-index=${idx}>
                <img src="images/thum${idx}.jpg" alt="itemPic${idx}" />
                <div class="price">${data[idx].price} 원</div>
                <div class="nums">
                    <div class="minus">-</div>
                    <span>${cnt[idx]}</span>
                    <div class="plus">+</div>
                </div>
                <div class="calPrice"></div>
                <p></p>
                <div class="del">X</div>
            </li>
        `;
        $ul.innerHTML += print;

        // innerHTML 이후 재선언
        $minusBtn = getAll('.inner ul li .nums .minus');
        $plusBtn = getAll('.inner ul li .nums .plus');
        $delBtn = getAll('.inner ul li .del');
        $money = getAll('.inner ul li .price');
        $calMoney = getAll('.inner ul li .calPrice');
        $spanIndex = getAll('.inner ul .nums span');
    });

    // minus button
    $minusBtn.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            if (cnt[idx] > 0) {
                cnt[idx] -= 1;
                $spanIndex[idx].textContent = cnt[idx];
                $p.textContent = '';
                allCount(idx);
            } else $p.textContent = `해당 ${idx + 1}번째의 상품은 이미 0입니다.`;
        });
        btn.addEventListener('mouseenter', (e) => {
            btn.textContent = '';
        });
        btn.addEventListener('mouseleave', (e) => {
            setTimeout(() => {
                btn.textContent = '-';
            }, 500);
        });
    });

    // plus button
    $plusBtn.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            cnt[idx] += 1;
            $spanIndex[idx].textContent = cnt[idx];
            $p.textContent = '';
            allCount(idx);
        });
        btn.addEventListener('mouseenter', (e) => {
            btn.textContent = '';
        });
        btn.addEventListener('mouseleave', (e) => {
            setTimeout(() => {
                btn.textContent = '+';
            }, 500);
        });
    });

    // close button
    $delBtn.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            let close = btn.parentElement;

            // X 버튼 클릭된 상품의 총 가격
            let closeWon = won[close.dataset.index];

            // 갯수 및 가격 초기화
            cnt[close.dataset.index] = 0;
            won[close.dataset.index] = 0;

            // 총 가격에서 감산
            totalcount -= closeWon;
            $total.textContent = `총금액 : ${totalcount} 원`;

            close.remove();
        });
        btn.addEventListener('mouseenter', (e) => {
            btn.textContent = '';
        });
        btn.addEventListener('mouseleave', (e) => {
            setTimeout(() => {
                btn.textContent = 'X';
            }, 500);
        });
    });

    // reset button
    $resetBtn.addEventListener('click', (e) => {
        // 갯수, 배열 초기화
        cnt = [0, 0, 0, 0, 0, 0];
        won = [0, 0, 0, 0, 0, 0];
        $total.textContent = `총금액 : 0 원`;

        $spanIndex.forEach((span, idx) => {
            span.textContent = '0';
        });

        $calMoney.forEach((money, idx) => {
            money.textContent = '';
        });
    });
};

(() => {
    preventDefaultAnchor();
    itemList();
})();
