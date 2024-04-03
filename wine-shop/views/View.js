class View {
    static show(wines) {
        console.log("welcome to wine management!!")
        wines.forEach(wine => {
            const { id, name, year} = wine
            console.log (`${id}. ${name} ${year}` )
        });
    }
}