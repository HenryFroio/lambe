import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/users'
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'



class Profile extends Component {

    logout= () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

   render() {
        const options = { email: this.props.email, secure:true}

       return (
           <View style={styles.container}>
               <Gravatar options={options} style={styles.avatar}/>
               <Text  style={styles.nickname}>{this.props.name}</Text>
               <Text  style={styles.email}>{this.props.email}</Text>
               <TouchableOpacity onPress={this.logout}  
                    style={styles.buttom}>
                   <Text style={styles.buttomText}>Sair</Text>
               </TouchableOpacity>
           </View>
        )
   }
}

const styles = StyleSheet.create({
  container: {
       flex:1,
       alignItems:'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 70,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#555'
    },
    email: {
        marginTop: 20,
        fontSize: 20,
        color: '#777'
    },
    buttom:{
        marginTop: 70,
        padding: 10,
        backgroundColor: '#4286f4',
        width:'40%',
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
        textAlign:'center'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}


// export default Profile
export default connect(mapStateToProps, mapDispatchToProps) (Profile)

