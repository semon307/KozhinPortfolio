import s from "./Skills.module.css"
import container from "./../Common/Styles/CommonStyles.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import react from "../Assets/Images/react2.png"
import typescript from "../Assets/Images/ts1.png"
import redux from "../Assets/Images/redux.png"


export const Skills = () => {
    const reactImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${react})`,
    }
    const tsImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${typescript})`,
    }
    const reduxImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${redux})`,
    }
    return (
        <div id={"Skills"} className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"React"} description={"A JavaScript library for building user interfaces. This App is also build with React:) "}
                    style={reactImage}/>
                    <Skill title={"TypeScript"} description={"JavaScripts with types! I love it! I always use TypeScript in my applications."}
                           style={tsImage}
                           />
                    <Skill title={"Redux"} description={"Most popular library for state-management in React. I like it, but I am not against to learn some alternatives (for instance, MoBX)."}
                           style={reduxImage}
                           />

                </div>
            </div>
        </div>
    )
}