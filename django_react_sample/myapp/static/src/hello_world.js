var React = require('react')

class HelloWorld extends React.Component {
    onClick() {
        alert('Hello World')
    }

    render() {
        return (
          <div className="react-component " onClick={this.onClick}>
            Hello World
        </div>
      )

    }

}

module.exports = HelloWorld
