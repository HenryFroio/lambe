import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
 } from 'react-native'
import ImagePicker, {launchImageLibrary, launchCamera} from 'react-native-image-picker'

const noUser = 'Você precisa estar logado para executar esta ação!'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {

        if (!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }

        launchImageLibrary({
            title: 'Escolha uma imagem',
            maxHeight: 600,
            maxWidth: 800,
        }, res => {
            if(!res.didCancel) {
                this.setState({ image: { uri:res.assets[0].uri, base64:res.assets[0].data } })
            }
        })
    }

    save = async () => {

        if(!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({ image: null, comment: ''})
        this.navigation.navigate('Feed')
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image}
                             style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage}
                         style={styles.buttom}>
                        <Text  style={styles.buttomText} >Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário para a foto?'
                         style={styles.input} value={this.state.comment}
                         editable={this.props.name != null}
                         onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save}
                         style={styles.buttom} >
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
       flex:1,
       alignItems:'center',
       
    },
    title: {
        fontSize: 20,
        paddingTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
        backgroundColor: '#4286f4',
        width: '100%',
        paddingBottom: 10,
        color: 'white',
        textAlign: 'center'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width /2,
        backgroundColor: 'grey',
        marginTop: 10,
        borderWidth:1,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width /2,
        resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor:'grey',
        
        
    }
})

// export default AddPhoto

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
