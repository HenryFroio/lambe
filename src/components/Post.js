import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './addComment'

class Post extends Component {
   render() {

    const addComment = this.props.name ? 
        <AddComment postId={this.props.id} /> : null
 
       return (
           <View style={{backgroundColor:'white', marginTop:10}}>
               <Image source={this.props.image} style={styles.image}/>
               <Author email={this.props.email} nickname={this.props.nickname} />
               <Comments comments={this.props.comments} />
               {addComment}
           </View>
       )
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
   image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
   }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

// export default Post
export default connect(mapStateToProps)(Post)
