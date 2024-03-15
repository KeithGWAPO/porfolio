import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "Hi, My keith S. Reyes",
    titlesub:   "This is my Portfolio",
    para:       "I’m Keith Reyes, a dedicated college student at GCC, hailing from Gingoog City, Nawasa Sakai. Pursuing a Bachelor of Science in Information Technology (BSIT), I’m driven by a passion for technology and a relentless pursuit of academic excellence. My goal is to leverage my skills to make a meaningful impact in the field, approaching every task with determination and dedication.",
    button:     "Hire Me",
    image:      "mew.jpg"

}

const dataTwo = {
    title2:     "My Projects",

    image1:     "proj1.jpg",
    para1:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button1:    "View Project 1",

    image2:     "proj2.jpg",
    para2:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button2:    "View Project 2",

    image3:     "proj3.jpg",
    para3:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button3:    "View Project 3"
}

const {title, titlesub, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, titlesub, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
