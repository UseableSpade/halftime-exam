const makeDom = () => {
    const rootElement = document.querySelector("#root")
    rootElement.insertAdjacentHTML("beforeend", `
    <div>
        <h1>VISSZAJELZÉS</h1>
        <div>
            <input type="text" placeholder="Tárgy"></input>
        </div>
        <div>    
            <textarea placeholder="Megjegyzés"></textarea>
        </div>
        <section>
            <div>
                <label><input type="checkbox" />Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót</u></label>
            </div>
            <div>
                <label><input type="checkbox" />Szeretnék hírlevelet kapni</label>
            </div>
        </section>
        <div>
            <button type="button">MENTÉS</button>
        </div>
    </div>
    `)
}

makeDom()