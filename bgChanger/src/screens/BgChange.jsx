import styles from './BgChange.module.css'
import ColorSelector from '../components/ColorSelector';
import { useState } from 'react';




function BgChange() {
    const [color, setColor] = useState("olive")

    const ChangeColor = (color_passed) => {
        setColor(color_passed)
    }
    
    return(
        <>
            <div id = {styles.background} style={{backgroundColor: color}}>
                <span id = {styles.menu}>
                    <ColorSelector BG="Brown" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Green" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Yellow" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Lavender" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Grey" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Purple" ChangeColor={ChangeColor}/>
                    <ColorSelector BG="Pink" ChangeColor={ChangeColor}/>

                </span>
            </div>
        </>
    );

}

export default BgChange
