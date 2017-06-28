var React = require('react')
var PropTypes = require('prop-types')

class Comment extends React.Component {

    onClick() {
        alert('hello there, ' + this.props.name + '!')
    }

    render() {
        return (
          <li onClick={this.onClick}>
            <dl>
            <dt>Id</dt><dd>{this.props.id}</dd>
            <dt>Name</dt><dd>{this.props.name}</dd>
            <dt>Comment</dt><dd>{this.props.text}</dd>
            </dl>
            </li>
          )
    }

}
Comment.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  text: PropTypes.string, 
}
module.exports = Comment
