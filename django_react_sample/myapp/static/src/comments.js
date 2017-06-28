var React = require('react')
var Comment = require('./comment')
var PropTypes = require('prop-types')

class Comments extends React.Component {
  
    render() {
        return (
         <ol>
            {this.props.comments.map(function (comment) {
                return (<Comment key={comment.id} id={comment.id} name={comment.name} text={comment.text} />)
            })}
        </ol>
      )
    }

}
Comments.propTypes = {
  comments: PropTypes.array,
}
module.exports = Comments
