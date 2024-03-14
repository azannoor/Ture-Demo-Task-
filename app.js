function addTourist(){
    var name = document.tourist.name.value;
    var age = document.tourist.age.value;

    var tr = document.createElement('tr')
    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = name;
    td2.innerHTML = age;

    document.getElementById("tbl").appendChild(tr)

    
    
}
const slides = document.querySelectorAll(".slide")
    var counter = 0
    console.log(slides)
    slides.forEach(
        (slide, index)=>{
            slide.style.left = `${index * 100}%`
        }
    )
    const slideImage = ()=>{
        slides.forEach(
            (slide) =>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            })
        }
        const goPrev = ()=>{
            counter --;
            slideImage()
        }
        const goNext = ()=>{
            counter ++;
            slideImage()
        }