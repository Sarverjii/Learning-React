function ColorSelector({ BG = 'green', ChangeColor='ChangeColor'}) {
    return (
        <>
            <style>
                {`
                    .color-button {
                        border-radius: 20px;
                        margin: 5px 15px;
                        height: 30px;
                        padding: 0px 10px;
                        color: white;
                        border: none;
                        width: 80px;
                        cursor: pointer;
                        font-size: 15px;
                    }
                `}
            </style>
            <button className="color-button" style={{backgroundColor: BG}} onClick={() => ChangeColor(BG)}>{BG}</button>
        </>
    );
}

export default ColorSelector;
