

const sections = document.querySelector(".skills")


const observer = new IntersectionObserver(entries => {
    console.log(entries)
})


observer.observe(sections)

console.log(sections)



export default observer