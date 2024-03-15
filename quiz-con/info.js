const leftDiv = (title, titlesub, para, button) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "leftClass"
    mydiv.innerHTML = `<h1 class="title1">${title}</h1>
                        <h2 class="subt" >${titlesub}</h2>
                        <p>${para}</p>
                        <button class="sec1btn">${button}</button>
                        `
    return mydiv
}

export {leftDiv}

