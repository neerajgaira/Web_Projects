let sortby_btn = document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener('click', ()=>{
    sortby_opt.classList.toggle('sortby_opt_active');
})

let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');

let url = "json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];
fetch(url).then((Response => Response.json())).then((data) => {
    // console.log(data);
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(0, 8);
    // console.log(all_shoes_array)

    data.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });



    newest.addEventListener('click' , ()=>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `
        <h5>Sort By: Newest</h5>
        <i class="bi bi-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');

        newest_array.forEach((el , i) => {
            const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Cateory}Shoes</p>
                        <div class="price">
                            <h5>Rs${Price}</h5>
                            <h5>MRP: <del>Rs${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `;
            main_shoes_bx.appendChild(card);
        });
    })

    all_shoes.addEventListener('click' , ()=>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `
        <h5>Sort By: All Shoes</h5>
        <i class="bi bi-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');

        all_shoes_array.forEach((el , i) => {
            const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Cateory}Shoes</p>
                        <div class="price">
                            <h5>Rs${Price}</h5>
                            <h5>MRP: <del>Rs${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `;
            main_shoes_bx.appendChild(card);
        });
    })

    low.addEventListener('click' , ()=>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `
        <h5>Sort By: Low</h5>
        <i class="bi bi-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');

        low_array.sort(({Price : a} , {Price : b}) => a-b);
        low_array.forEach((el , i) => {
            const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Cateory}Shoes</p>
                        <div class="price">
                            <h5>Rs${Price}</h5>
                            <h5>MRP: <del>Rs${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `;
            main_shoes_bx.appendChild(card);
        });
    })


    high.addEventListener('click' , ()=>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `
        <h5>Sort By: High</h5>
        <i class="bi bi-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');

        high_array.sort(({Price : a} , {Price : b}) => a-b);
        high_array.reverse();
        high_array.forEach((el , i) => {
            const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Cateory}Shoes</p>
                        <div class="price">
                            <h5>Rs${Price}</h5>
                            <h5>MRP: <del>Rs${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `;
            main_shoes_bx.appendChild(card);
        });
    })

    // Boot Array : 
    let boot_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Boots';
    })

    let All_Main_filter_array = [];

    let boots = document.getElementById('boots');
    
    boots.addEventListener('click', ()=>{
        if(boots.title === "boots_filter_on"){
            main_shoes_bx.innerHTML =  "";
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(boot_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return boot_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Loafer shoes 
    let loafers_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Loafer';
    })

    // let All_Main_filter_array = [];

    let loafers = document.getElementById('loafers');
    
    loafers.addEventListener('click', ()=>{
        if(loafers.title === "loafers_filter_on"){
            main_shoes_bx.innerHTML =  "";
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return loafers_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Air Force 1 : 
    let air_force_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Air Force';
    })

    // let All_Main_filter_array = [];

    let air_force = document.getElementById('air_force_1');
    
    air_force.addEventListener('click', ()=>{
        if(air_force.title === "air_force_filter_on"){
            main_shoes_bx.innerHTML =  "";
            air_force.classList.toggle('i_active');
            air_force.classList.toggle('bi-toggle2-off');
            air_force.classList.toggle('bi-toggle2-on');
            air_force.title = 'air_force_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(air_force_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            air_force.classList.toggle('i_active');
            air_force.classList.toggle('bi-toggle2-off');
            air_force.classList.toggle('bi-toggle2-on');
            air_force.title = 'air_force_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return air_force_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Air Max :
    let air_max_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Air Max';
    })

    // let All_Main_filter_array = [];

    let air_max = document.getElementById('air_max_1');
    
    air_max.addEventListener('click', ()=>{
        if(air_max.title === "air_max_filter_on"){
            main_shoes_bx.innerHTML =  "";
            air_max.classList.toggle('i_active');
            air_max.classList.toggle('bi-toggle2-off');
            air_max.classList.toggle('bi-toggle2-on');
            air_max.title = 'air_max_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(air_max_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            air_max.classList.toggle('i_active');
            air_max.classList.toggle('bi-toggle2-off');
            air_max.classList.toggle('bi-toggle2-on');
            air_max.title = 'air_max_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return air_max_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })



    // Zoom Rival : 
    let zoom_rival_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Zoom Rival';
    })

    // let All_Main_filter_array = [];

    let zoom_rival = document.getElementById('zoom_rival');
    
    zoom_rival.addEventListener('click', ()=>{
        if(zoom_rival.title === "Zoom_Rival_filter_on"){
            main_shoes_bx.innerHTML =  "";
            zoom_rival.classList.toggle('i_active');
            zoom_rival.classList.toggle('bi-toggle2-off');
            zoom_rival.classList.toggle('bi-toggle2-on');
            zoom_rival.title = 'Zoom_Rival_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(zoom_rival_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            zoom_rival.classList.toggle('i_active');
            zoom_rival.classList.toggle('bi-toggle2-off');
            zoom_rival.classList.toggle('bi-toggle2-on');
            zoom_rival.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return zoom_rival_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Pegasus : 
    let pegasus_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Pegasus';
    })

    // let All_Main_filter_array = [];

    let pegasus = document.getElementById('pegasus');
    
    pegasus.addEventListener('click', ()=>{
        if(pegasus.title === "Pegasus_filter_on"){
            main_shoes_bx.innerHTML =  "";
            pegasus.classList.toggle('i_active');
            pegasus.classList.toggle('bi-toggle2-off');
            pegasus.classList.toggle('bi-toggle2-on');
            pegasus.title = 'Pegasus_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(pegasus_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            pegasus.classList.toggle('i_active');
            pegasus.classList.toggle('bi-toggle2-off');
            pegasus.classList.toggle('bi-toggle2-on');
            pegasus.title = 'Pegasus_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return pegasus_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Nike Duke : 
    let nike_array = all_shoes_array.filter((el)=>{
        return el.Type === 'Nike Dunk';
    })

    // let All_Main_filter_array = [];

    let nike = document.getElementById('nike_dunk');
    
    nike.addEventListener('click', ()=>{
        if(nike.title === "Nike_filter_on"){
            main_shoes_bx.innerHTML =  "";
            nike.classList.toggle('i_active');
            nike.classList.toggle('bi-toggle2-off');
            nike.classList.toggle('bi-toggle2-on');
            nike.title = 'Nike_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(nike_array);

            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });

        }
        else{
            main_shoes_bx.innerHTML = '';
            nike.classList.toggle('i_active');
            nike.classList.toggle('bi-toggle2-off');
            nike.classList.toggle('bi-toggle2-on');
            nike.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return nike_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el , i) => {
                const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Cateory}Shoes</p>
                            <div class="price">
                                <h5>Rs${Price}</h5>
                                <h5>MRP: <del>Rs${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `;
                main_shoes_bx.appendChild(card);
            });
        }
    })

    // Left :
    let right_input = document.getElementById('right_input');
let left_input = document.getElementById('left_input');
let left_input_icon = document.getElementById('left_input_icon');
let right_input_icon = document.getElementById('right_input_icon');


// console.log(array_1000_50000);

left_input.addEventListener('change', ()=>{
    let array_1000_50000 = all_shoes_array.filter((el)=>{
        return el.Price <= 50000;
    })
    left_input_icon.style.left = left_input.value+'%';
    let price_box_value_left = (50000/100)*left_input.value;
    document.getElementById('left_input_price').innerText = (price_box_value_left);
    // console.log(price_box_value_left);

    let array_1000_50000_left = array_1000_50000.filter((el) =>{
        return el.Price >= price_box_value_left;
    })

    main_shoes_bx.innerHTML = '';
    array_1000_50000_left.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });
})


// Right : 
// console.log(array_1000_50000);

right_input.addEventListener('change', ()=>{
    right_input_icon.style.left = right_input.value+'%';
    let price_box_value_right = (50000/100)*right_input.value;
    // console.log(price_box_value_left);
    document.getElementById('right_input_price').innerText = (price_box_value_right + 50000);
    let array_50001_100000 = all_shoes_array.filter((el)=>{
        return el.Price >= 50000;
    })
    let array_1000_50000_right = array_50001_100000.filter((el) =>{
        return el.Price >= (price_box_value_right+50000);
    })

    main_shoes_bx.innerHTML = '';
    array_1000_50000_right.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });
})

const color = ['white' , 'gray-white' , 'yellow' , 'yellow-black' , 'orange' , 'green' , 'sky-blue' , 'pink' , 'red' , 'blue' , 'gray-black',
'brown' , 'black'];

Array.from(document,getElementsByClassName('color')).forEach((el , i) => {
    el.addEventListener('click' , ()=>{
        const color_array = all_shoes_array.filter((el)=>{
            return el.ColorTag === color[i];
        });
        main_shoes_bx.innerHTML = '';
        color_array.forEach((el , i) => {
            const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Cateory}Shoes</p>
                        <div class="price">
                            <h5>Rs${Price}</h5>
                            <h5>MRP: <del>Rs${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `;
            main_shoes_bx.appendChild(card);
        });
    })
})


document.getElementsByClassName('colors')[0].addEventListener('click', ()=>{
    main_shoes_bx.innerHTML = '';
    all_shoes_array.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });
})


// Size : 
const number  = [4, 7, 9, 6, 5 ,8, 10, 11.5, 9.5, 16, 17, 18 ,11, 8.5];

document.getElementsByClassName('size')[0].addEventListener('click', ()=>{
    main_shoes_bx.innerHTML = '';

    let number_array = all_shoes_array.filter((el) =>{
        return el.Size4 === number[0];
    })
    number_array.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });
})

document.getElementsByClassName('size')[1].addEventListener('click', ()=>{
    main_shoes_bx.innerHTML = '';

    let number_array = all_shoes_array.filter((el) =>{
        return el.Size7 === number[0];
    })
    number_array.forEach((el , i) => {
        const {Img , Name,Cateory, MRP ,Price,Tag , Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Cateory}Shoes</p>
                    <div class="price">
                        <h5>Rs${Price}</h5>
                        <h5>MRP: <del>Rs${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `;
        main_shoes_bx.appendChild(card);
    });
})
})

