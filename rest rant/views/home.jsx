const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
            <link rel='stylesheet' href='/css/style.css' />
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>

        </Def>
    )
}


module.exports = home