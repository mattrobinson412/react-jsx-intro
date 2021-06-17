const App = () => (
    <section>
        <Tweet username="@matt.peaches" name="Matt Robinson" date="08/09/2021" message="Happy birthday to me, suckas!" />
        <Tweet username="@CanadianZay" name="Zay Mac" date="08/21/2021" message="Vancouver in da HOUSEE...!" />
        <Tweet username="@glenn_glennard" name="Glenn G. Murray" date="07/09/2021" message="'I keep blasting off like an astronaut, yea!' - Derek Minor" />
    </section>
    
);

ReactDOM.render(<App />, 
    document.getElementById("root"));